import * as React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import jsonLang from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import BlockContent from "@sanity/block-content-to-react";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { imageUrlFor } from '~/utils'

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('json', jsonLang);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);

type CodeBlock = { language: string; content: string }
type Image = {
  alt: string
  asset: { _ref: string },
  caption: string
}

export const serializer = {
  list: (props) => (props.type === "bullet" ? (
    <ul role="list" className="list-disc overflow-hidden pl-12 mt-0 mb-12 text-slate-500">{props.children}</ul>
  ) : props.type === "checkbox" ? (
    <ul role="list" className="checklist overflow-hidden pl-12 mt-0 mb-12 text-slate-500">{props.children}</ul>
  ) : (
    <ol start="" role="list" className="overflow-hidden pl-12 mt-0 mb-12 text-slate-500" style={{listStyle: 'outside none decimal'}}>{props.children}</ol>
  )),
  listItem: (props) =>
    (props.type === "bullet" ? (
      <li className="mb-4 text-left">{props.children}</li>
    ) : (
      <li className="mb-4 text-left">{props.children}</li>
    )),
  types: {
    code: ({
      node: { language, content },
    }: { node: CodeBlock }) => (
      <SyntaxHighlighter language={language} style={coldarkDark} showLineNumbers>
        {content}
      </SyntaxHighlighter>
    ),
    image: ({ node: { alt, asset, caption }}: { node: Image }) => {
      const imageBaseUrl = imageUrlFor(asset)
      return (
        <figure>
          <picture>
            <source src={`${imageBaseUrl}?w=400&auto`} media="(max-width: 400px)" />
            <source src={`${imageBaseUrl}?w=600&auto`} media="(max-width: 800px)" />
            <img src={`${imageBaseUrl}?w=790&format=auto`} alt={alt} />
          </picture>
          <figcaption>{caption}</figcaption>
        </figure>
      );
    },
    block: (props) => {
      const { style = "normal" } = props.node;

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        const textSize = level === "2" ? "4xl" : level === "3" ? "2xl" : "xl";
        const bottomMargin = level === "2" ? "6" : level === "3" ? "5" : "4";
        return React.createElement(
          style,
          { className: `mt-10 mb-${bottomMargin} text-${textSize} font-bold text-slate-900` },
          props.children
        );
      }

      if (style === "blockquote") {
        return <blockquote className="py-10 px-24 my-12 text-xl leading-7 text-center text-gray-600 bg-blue-50 rounded-3xl border-black">- {props.children}</blockquote>;
      }

      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props);
    }
  },
};
