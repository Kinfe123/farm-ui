const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
        <img
          className="w-24 h-24 mx-auto mb-4"
          src="https://img.icons8.com/external-flat-juicy-fish/64/000000/external-construction-road-and-street-flat-flat-juicy-fish.png"
          alt="Under Construction"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Under Construction
        </h1>
        <p className="text-gray-600 mb-4">
          We're working hard to finish the development of this page. Please
          check back soon.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
