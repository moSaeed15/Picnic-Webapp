const ChaletItem = ({ chaletData, farmData, houseData }) => {
  console.log(chaletData);
  return (
    <div className="border-y border-borderTable py-5 px-8  ">
      <div className="flex">
        <div className="flex flex-col font-normal text-secondaryColor gap-3">
          <h4 className="text-xl font-bold text-secondaryColor mb-3 ">
            {chaletData && chaletData.name}
            {farmData && farmData.name}
            {houseData && houseData.name}
          </h4>
          <p className="text-lg">
            <span>Owner Name: </span> {chaletData && chaletData.name}
            {farmData && farmData.name}
            {houseData && houseData.name}
          </p>
          <p className="text-lg">
            <span>No. of Clients: </span> {houseData && houseData.name}
          </p>
          <p className="text-lg">
            <span>Time Remaining for Subscription: </span>3 Months
          </p>
        </div>
        <img src="./Cover.png" alt="Chalet105" />
      </div>
    </div>
  );
};

export default ChaletItem;
