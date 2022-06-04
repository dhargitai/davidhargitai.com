import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";
import type { DynamicLinksFunction } from 'remix-utils';
import { promiseHash, DynamicLinks } from 'remix-utils';

export const links: LinksFunction = () => {
  return [
    {
      rel: "apple-touch-icon",
      href: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      href: "/favicon/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      href: "/favicon/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
    },
    { rel: "stylesheet", href: tailwindStylesheetUrl }
  ];
};

const dynamicLinks: DynamicLinksFunction<LoaderData> = ({ data }) => {
  const url = new URL(data.url)
  return [{ rel: "canonical", href: url.href }];
};

export const handle = {
  dynamicLinks
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "David Hargitai",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
  url: Awaited<string>
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>(
    await promiseHash({
      user: getUser(request),
      url: Promise.resolve(request.url),
    })
  );
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <DynamicLinks />
        <Links />
      </head>
      <body className="h-full font-satoshi text-lg">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
