import ChaletItem from '../ChaletItem';

const ChaletData = () => {
  return (
    <div className="flex flex-col bg-white py-7 min-w-[427.047px] gap-5  rounded-xl max-h-[500px]  overflow-y-scroll">
      <h3 className="text-3xl font-bold text-secondaryColor mb-5  px-8">
        Chalet Data :
      </h3>
      <ChaletItem />
      <ChaletItem />
      <ChaletItem />
    </div>
  );
};

export default ChaletData;
