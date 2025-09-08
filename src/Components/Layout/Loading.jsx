const Loading=()=> {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 select-none">
      
      <div className="text-center mb-12 space-y-4">
        <div className="mx-auto bg-gray-300 rounded-lg h-12 w-3/4 animate-pulse"></div>
        <div className="mx-auto bg-gray-300 rounded-lg h-6 w-1/2 animate-pulse"></div>
      </div>

      <div className="flex overflow-x-auto pb-4 mb-8 justify-center scrollbar-hide space-x-3">
        {Array(6).fill(0).map((_, i) => (
          <div
            key={i}
            className="bg-gray-300 rounded-full h-10 min-w-[80px]  text-center animate-pulse"
          ></div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array(8).fill(0).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col h-full animate-pulse"
          >
            <div className="bg-gray-300 rounded-t-xl h-48 w-full" />

            <div className="p-5 flex flex-col flex-grow space-y-3">
              <div className="h-6 bg-gray-300 rounded w-3/4" /> 
              <div className="h-4 bg-gray-300 rounded w-1/2" /> 
              <div className="h-12 bg-gray-300 rounded w-full" />
              <div className="h-5 bg-gray-300 rounded w-1/3" />
            </div>

            <div className="mt-auto">
              <div className="h-10 bg-gray-300 rounded-b-xl w-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Loading;