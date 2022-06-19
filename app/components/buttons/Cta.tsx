import { Link } from "@remix-run/react";
import type { RemixLinkProps } from '@remix-run/react/components';
export function Cta({
  link,
  onClick,
  style = {},
  className = '',
  children,
}: {
  link?: string;
  onClick?: () => void | null;
  style?: { [key: string]: string };
  className?: string;
  children?: React.ReactNode;
}) {
  const attributes = {
    className: `inline-block cursor-pointer border-0 border-none bg-slate-900 py-6 px-16 text-center text-lg font-bold text-white hover:bg-white hover:text-dh-dark ${className}`,
    ...(onClick ? { onClick } : {}),
    ...(link ? { to: link } : {}),
    style: {
      transition:
        "color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s",
      textDecoration: "none",
      borderRadius: "80px",
      ...style
    },
    role: 'button'
  }

  return (
    <>
      {
        link
          ? (link?.startsWith('http')
            ? <a {...attributes} href={link}>{children}</a>
            : <Link {...attributes as RemixLinkProps}>{children}</Link>)
          : <div {...attributes}>{children}</div>
      }
    </>
  );
}
