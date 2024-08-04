import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import Head from 'next/head';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      <Head>
        <title>RSS Feed Reader</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Stay up to date with the latest tech news from various sources in a beautiful RSS feed reader." />
        <meta name="keywords" content="RSS, feed, reader, tech news, technology, latest news" />
        <meta property="og:title" content="RSS Feed Reader" />
        <meta property="og:description" content="Stay up to date with the latest tech news from various sources in a beautiful RSS feed reader." />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:title" content="RSS Feed Reader" />
        <meta name="twitter:description" content="Stay up to date with the latest tech news from various sources in a beautiful RSS feed reader." />
        <meta name="twitter:image" content="/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
