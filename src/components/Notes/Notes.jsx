import { Textarea } from '@chakra-ui/react';

const Notes = ({ language, notes, setNotes, disabled, text }) => {
  return (
    <div className="mt-5 px-5">
      <div className="text-white bg-primaryColor rounded-t-xl py-3 px-5 font-bold">
        <h2>{language === 'en' ? 'Notes' : 'ملحوظات'}</h2>
      </div>
      <div className=" border border-borderTable p-4">
        <Textarea
          isDisabled={disabled}
          value={notes ? notes : text}
          onChange={e => setNotes(e.target.value)}
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
