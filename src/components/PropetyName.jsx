const PropetyName = () => {
  return (
    <div className="mt-5 px-5">
      <div className="text-white bg-primaryColor rounded-t-xl py-3 px-5 font-bold">
        <h2>Property Name</h2>
      </div>
      <div className="flex flex-col border border-borderTable ">
        <input
          type="text"
          placeholder="Enter Property Name Here"
          className="border rounded-md px-3 py-2 ml-3  focus:outline-primaryColor mr-10 my-5 "
        />
      </div>
    </div>
  );
};

export default PropetyName;
