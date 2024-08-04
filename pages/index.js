import { useState } from 'react';
import Layout from '../components/Layout';
import RSSFeedInput from '../components/RSSFeedInput';
import ArticleList from '../components/ArticleList';
import FeedList from '../components/FeedList';

const feeds = [
  { name: "TechCrunch", url: "http://feeds.feedburner.com/TechCrunch/" },
  { name: "Wired", url: "https://www.wired.com/feed/rss" },
  { name: "The Verge", url: "https://www.theverge.com/rss/index.xml" },
  { name: "Engadget", url: "https://www.engadget.com/rss.xml" },
  { name: "Gizmodo", url: "https://gizmodo.com/rss" },
  { name: "Mashable", url: "https://mashable.com/feed/" },
  { name: "Ars Technica", url: "http://feeds.arstechnica.com/arstechnica/index/" },
  { name: "VentureBeat", url: "https://venturebeat.com/feed/" },
  { name: "Recode", url: "https://www.recode.net/rss/index.xml" },
  { name: "CNET", url: "https://www.cnet.com/rss/all/" },
  { name: "ZDNet", url: "https://www.zdnet.com/news/rss.xml" },
  { name: "TechRadar", url: "https://www.techradar.com/rss" },
  { name: "The Next Web", url: "https://thenextweb.com/feed/" },
  { name: "ReadWrite", url: "https://readwrite.com/feed/" },
  { name: "Slashdot", url: "http://rss.slashdot.org/Slashdot/slashdotMain" },
  { name: "Digital Trends", url: "https://www.digitaltrends.com/feed/" },
  { name: "PCWorld", url: "https://www.pcworld.com/index.rss" },
  { name: "AnandTech", url: "http://www.anandtech.com/rss/" },
  { name: "TechSpot", url: "https://www.techspot.com/backend.xml" },
  { name: "Tom's Hardware", url: "https://www.tomshardware.com/feeds/all" },
  { name: "ExtremeTech", url: "https://www.extremetech.com/feed" },
  { name: "BGR", url: "http://feeds2.feedburner.com/TheBoyGeniusReport" },
  { name: "GigaOM", url: "https://gigaom.com/feed/" },
  { name: "Ubergizmo", url: "https://www.ubergizmo.com/feed/" },
  { name: "9to5Mac", url: "https://9to5mac.com/feed/" },
  { name: "9to5Google", url: "https://9to5google.com/feed/" },
  { name: "Android Authority", url: "https://www.androidauthority.com/feed" },
  { name: "AppleInsider", url: "https://appleinsider.com/rss/news/" },
  { name: "MacRumors", url: "https://www.macrumors.com/macrumors.xml" },
  { name: "TechRepublic", url: "https://www.techrepublic.com/rssfeeds/topic/tech-industry/" },
];

export default function Home() {
  const [feed, setFeed] = useState(null);

  return (
    <Layout>
      <RSSFeedInput setFeed={setFeed} />
      <FeedList feeds={feeds} setFeed={setFeed} />
      <ArticleList feed={feed} />
    </Layout>
  );
}
