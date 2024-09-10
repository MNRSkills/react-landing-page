// we want title content author

const BlogCards = (props) => {
  const { title, author, content } = props.items;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className>
        <h1 className="font-bold text-base">{title}</h1>
      </div>
      <div>
        <div className="px-6 py-4">
          <div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {content}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {author}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
