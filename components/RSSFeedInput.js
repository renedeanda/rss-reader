import { useState } from 'react';

const RSSFeedInput = ({ setFeed }) => {
  const [url, setUrl] = useState('');

  const fetchFeed = async () => {
    try {
      const response = await fetch(`/api/rss?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      setFeed(data);
    } catch (error) {
      console.error('Failed to fetch RSS feed:', error);
    }
  };

  return (
    <div className="flex justify-center items-center my-4">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-md w-3/4"
        placeholder="Enter RSS feed URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={fetchFeed}
        className="bg-amber-500 text-white p-2 rounded-md ml-2"
      >
        Fetch Feed
      </button>
    </div>
  );
};

export default RSSFeedInput;
