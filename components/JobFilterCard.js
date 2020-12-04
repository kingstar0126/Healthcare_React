const JobFilterCard = ({ name, items, hasMore = false, onShowMore = null }) => {
  return (
      <div className="bg-white p-4 mb-4">
          <p className="font-bold mb-3">{name}</p>
          { items.map((item, index) => (<div className="my-2" key={index}>
              <span className="mr-2 text-sm">{item.key}</span><span className="text-gray-400 text-xs">{item.doc_count.toLocaleString()}</span>
          </div>)) }
          { hasMore && <a href="#" className="text-sm text-indigo-600" onClick={() => {
              event.preventDefault();
              onShowMore();
          }}>Show more</a> }
      </div>
  );
};

export default JobFilterCard;
