import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="description" content="A beautiful RSS Feed Reader" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#f59e0b" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
