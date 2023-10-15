import ChaletData from '../components/Admin/ChaletData';
import GenerateUser from '../components/Admin/GenerateUser';

const Admin = ({ setUnApprovedUnits }) => {
  return (
    <div className="2xl:px-52 xl:px-32 ">
      <h1 className="text-4xl font-bold text-secondaryColor mb-10   mt-7">
        Admin Panel :
      </h1>
      <GenerateUser />
      <div className="grid grid-cols-2   gap-10 mt-10">
        <ChaletData title="Chalet" setUnApprovedUnits={setUnApprovedUnits} />
        <ChaletData title="Farm" setUnApprovedUnits={setUnApprovedUnits} />
        <ChaletData
          title="Rental Houses"
          setUnApprovedUnits={setUnApprovedUnits}
        />
      </div>
    </div>
  );
};

export default Admin;
