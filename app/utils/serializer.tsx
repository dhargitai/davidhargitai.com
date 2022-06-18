import * as React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import jsonLang from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import * as prism from "react-syntax-highlighter/dist/cjs/styles/prism";
import { imageUrlFor } from '~/utils'
import { getImageDimensions } from '@sanity/asset-utils'
import type { TypedObject, } from '@portabletext/types'
import { PortableTextComponentProps } from '@portabletext/react';

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
  list: (props: { type?: string, children?: React.ReactNode }) => (props.type === "bullet" ? (
    <ul className="list-disc overflow-hidden pl-12 mt-0 mb-12 text-slate-500">{props.children}</ul>
  ) : props.type === "checkbox" ? (
    <ul className="checklist overflow-hidden pl-12 mt-0 mb-12 text-slate-500">{props.children}</ul>
  ) : (
    <ol start={1} className="overflow-hidden pl-12 mt-0 mb-12 text-slate-500" style={{listStyle: 'outside none decimal'}}>{props.children}</ol>
  )),
  listItem: (props: React.PropsWithChildren<PortableTextComponentProps<any>>) => <li className="mb-4 text-left">{props.children}</li>,
  types: {
    code: ({
      value: { language, content },
    }: { value: CodeBlock }) => (
      <div className="overflow-x-scroll" style={{ width: 'calc(100vw - 3rem)', maxWidth: '838px' }}>
        <SyntaxHighlighter
          language={language}
          style={(prism as any).coldarkDark}
          showLineNumbers>
          {content}
        </SyntaxHighlighter>
      </div>
    ),
    image: ({ value }: { value: Image }) => {
      const { alt, asset, caption, } = value;
      const imageBaseUrl = imageUrlFor(asset)
      const {width, height} = getImageDimensions(value)
      return (
        <figure className="mb-6">
          <picture>
            <source src={`${imageBaseUrl}?w=400&auto`} media="(max-width: 400px)" />
            <source src={`${imageBaseUrl}?w=600&auto`} media="(max-width: 800px)" />
            <img
              src={`${imageBaseUrl}?w=790&format=auto`}
              alt={alt}
              loading="lazy"
              style={{
                // Avoid jumping around with aspect-ratio CSS property
                aspectRatio: `${width} / ${height}`,
              }}
            />
          </picture>
          <figcaption className="text-center italic">{caption}</figcaption>
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => <h2 className="text-4xl mt-10 mb-6 font-bold text-slate-900">{children}</h2>,
    h3: ({ children }: { children?: React.ReactNode }) => <h3 className="text-2xl mt-10 mb-5 font-bold text-slate-900">{children}</h3>,
    h4: ({ children }: { children?: React.ReactNode }) => <h4 className="text-xl mt-10 mb-4 font-bold text-slate-900">{children}</h4>,
    blockquote: ({ children }: { children?: React.ReactNode }) => <blockquote className="py-4 sm:py-7 md:py-10 px-8 sm:px-14 md:px-24 my-12 text-xl leading-7 text-center text-gray-600 bg-blue-50 rounded-3xl border-black italic">- {children}</blockquote>,
  },
};
