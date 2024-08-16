import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#f59e0b" />
        {/* Moved description meta tag to _app.js for easier customization per page */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}