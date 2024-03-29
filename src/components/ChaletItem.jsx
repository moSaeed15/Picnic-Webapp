import { Img } from '@chakra-ui/react';

const ChaletItem = ({ chaletData, farmData, houseData, language }) => {
  function calculateMonthsRemaining(targetDate) {
    var currentDate = new Date();
    var parsedTargetDate = new Date(targetDate);

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
      <div className="flex justify-between">
        <div className="flex flex-col font-normal text-secondaryColor gap-3">
          <h4 className="text-xl font-bold text-secondaryColor mb-3 ">
            {chaletData && chaletData.name}
            {farmData && farmData.name}
            {houseData && houseData.name}
          </h4>
          <p className="text-md">
            <span> {language === 'en' ? 'Owner Name:' : 'اسم المالك:'}</span>
            {chaletData && chaletData.owner_name}
            {farmData && farmData.owner_name}
            {houseData && houseData.owner_name}
          </p>
          <p className="text-md">
            <span>{language === 'en' ? 'Unit Name:' : 'اسم الوحدة:'}</span>
            {chaletData && chaletData.name}
            {farmData && farmData.name}
            {houseData && houseData.name}
          </p>
          <p className="text-md">
            <span>
              {language === 'en'
                ? 'No. of Clients Started bookings:'
                : 'عدد العملاء:'}
            </span>{' '}
            {chaletData && chaletData.started_bookings}
            {farmData && farmData.started_bookings}
            {houseData && houseData.started_bookings}
          </p>
          <p className="text-md">
            <span>
              {language === 'en'
                ? 'No. of Clients Completed bookings:'
                : 'عدد العملاء:'}
            </span>{' '}
            {chaletData && chaletData.completed_bookings}
            {farmData && farmData.completed_bookings}
            {houseData && houseData.completed_bookings}
          </p>
          <p className="text-md">
            <span>
              {language === 'en'
                ? 'No. of Clients Upcoming bookings:'
                : 'عدد العملاء:'}
            </span>{' '}
            {chaletData && chaletData.upcoming_bookings}
            {farmData && farmData.upcoming_bookings}
            {houseData && houseData.upcoming_bookings}
          </p>
          <p className="text-md">
            <span>
              {language === 'en'
                ? 'Time Remaining for Subscription:'
                : 'الوقت المتبقي للاشتراك:'}
            </span>
            {chaletData &&
              calculateMonthsRemaining(chaletData.owner_subscription_end_date)}
            {farmData &&
              calculateMonthsRemaining(farmData.owner_subscription_end_date)}
            {houseData &&
              calculateMonthsRemaining(houseData.owner_subscription_end_date)}
          </p>
        </div>
        {chaletData && (
          <Img
            src={`${
              chaletData?.gallery[0]?.url
                ? chaletData?.gallery[0]?.url
                : 'https://jtrepair.com/wp-content/uploads/2019/02/placeholder-image11.jpg'
            }`}
            alt="Chalet105"
            width="254px"
            height="240px"
            className="ml-3 "
          />
        )}
        {farmData && (
          <Img
            src={`${
              farmData?.gallery[0]?.url
                ? farmData?.gallery[0]?.url
                : 'https://jtrepair.com/wp-content/uploads/2019/02/placeholder-image11.jpg'
            }`}
            alt="Chalet105"
            width="254px"
            height="240px"
            className="ml-3 "
          />
        )}
        {houseData && (
          <Img
            src={`${
              houseData?.gallery[0]?.url
                ? houseData?.gallery[0]?.url
                : 'https://jtrepair.com/wp-content/uploads/2019/02/placeholder-image11.jpg'
            }`}
            alt="Chalet105"
            width="254px"
            height="240px"
            className="ml-3 "
          />
        )}
      </div>
    </div>
  );
};

export default ChaletItem;
