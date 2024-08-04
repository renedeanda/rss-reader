const ArticleList = ({ feed }) => {
  if (!feed || !feed.items) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {feed.items.map((item, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          {item.enclosure && item.enclosure.url && (
            <img
              src={item.enclosure.url}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 my-2 line-clamp-3">{item.contentSnippet}</p>
            <small className="block text-gray-500 dark:text-gray-400 mb-2">{new Date(item.pubDate).toLocaleDateString()}</small>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
