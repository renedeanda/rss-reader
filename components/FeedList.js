import { useState } from 'react';

const FeedList = ({ feeds, setFeed }) => {
  const [selectedFeed, setSelectedFeed] = useState('');

  const fetchFeed = async (url) => {
    try {
      const response = await fetch(`/api/rss?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      setFeed(data);
    } catch (error) {
      console.error('Failed to fetch RSS feed:', error);
    }
  };

  const handleSelectChange = (e) => {
    const selectedUrl = e.target.value;
    setSelectedFeed(selectedUrl);
    fetchFeed(selectedUrl);
  };

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-2">Popular Tech Feeds</h2>
      <select
        value={selectedFeed}
        onChange={handleSelectChange}
        className="block w-full px-3 py-2 text-lg border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
      >
        <option value="">Select a feed</option>
        {feeds.map((feed, index) => (
          <option key={index} value={feed.url}>
            {feed.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FeedList;
