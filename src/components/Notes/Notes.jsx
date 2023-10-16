import { Textarea } from '@chakra-ui/react';

const Notes = ({ language, description, setDescription }) => {
  return (
    <div className="mt-5 px-5">
      <div className="text-white bg-primaryColor rounded-t-xl py-3 px-5 font-bold">
        <h2>{language === 'en' ? 'Notes' : 'ملحوظات'}</h2>
      </div>
      <div className=" border border-borderTable p-4">
        <Textarea
          value={description}
          onChange={setDescription}
          placeholder={
            language === 'en' ? 'Write your Unit Description' : 'اكتب وصف وحدتك'
          }
          size="md"
        />
      </div>
    </div>
  );
};

export default Notes;
