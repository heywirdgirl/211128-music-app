
function EventItem(props) {
  const { key,title,subtitle,image,url } = props;
  
  return (
<>
    <div className="mt-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex">
        <div className="flex-shrink-0 w-32">
          <img
            className="h-full w-full object-cover md:h-full md:w-48"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-8">
          <a
            href={url}
            target="_blank"
            className="block font-medium  hover:underline uppercase tracking-wide text-sm text-indigo-500 font-semibold"
          >
            {title}
          </a>
          <div className="mt-3 text-lg text-black leading-tight">
            {subtitle}
          </div>          
        </div>
      </div>
    </div>
 </>
       
    
  );
}

export default EventItem;
