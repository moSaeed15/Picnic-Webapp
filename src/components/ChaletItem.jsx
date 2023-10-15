const ChaletItem = ({ chaletData, farmData, houseData }) => {
  function calculateMonthsRemaining(targetDate) {
    var currentDate = new Date();
    var parsedTargetDate = new Date(targetDate);
    console.log(currentDate);
    console.log(parsedTargetDate);
    var months;
    months = (parsedTargetDate.getFullYear() - currentDate.getFullYear()) * 12;
    months -= parsedTargetDate.getMonth();
    months += currentDate.getMonth();

    // If the target date's day is before the current date's day, subtract one month
    if (parsedTargetDate.getDate() < currentDate.getDate()) {
      months--;
    }

    return months;
  }

  return (
    <div className="border-y border-borderTable py-5 px-8  ">
      {console.log(chaletData)}
      <div className="flex">
        <div className="flex flex-col font-normal text-secondaryColor gap-3">
          <h4 className="text-xl font-bold text-secondaryColor mb-3 ">
            {chaletData && chaletData.name}
            {farmData && farmData.name}
            {houseData && houseData.name}
          </h4>
          <p className="text-lg">
            <span>Owner Name: </span> {chaletData && chaletData.owner_name}
            {farmData && farmData.owner_name}
            {houseData && houseData.owner_name}
          </p>
          <p className="text-lg">
            <span>Unit Name: </span> {chaletData && chaletData.name}
            {farmData && farmData.name}
            {houseData && houseData.name}
          </p>
          <p className="text-lg">
            <span>No. of Clients: </span>
            {chaletData && chaletData.started_bookings}
            {farmData && farmData.started_bookings}
            {houseData && houseData.started_bookings}
          </p>
          <p className="text-lg">
            <span>Time Remaining for Subscription: </span>
            {chaletData &&
              calculateMonthsRemaining(chaletData.owner_subscription_end_date)}
            {farmData &&
              calculateMonthsRemaining(farmData.owner_subscription_end_date)}
            {houseData &&
              calculateMonthsRemaining(houseData.owner_subscription_end_date)}
          </p>
        </div>
        <img src="./Cover.png" alt="Chalet105" className="ml-3" />
      </div>
    </div>
  );
};

export default ChaletItem;
