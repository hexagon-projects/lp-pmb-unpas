import Text from "../Text";

const AdvantageItem = ({ icon: Icon, text }) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    return (
      <div className="flex justify-center items-center gap-2">
        <Icon size={34} className="text-blue-500" />
        <Text text={text} weight="font-semibold" />
      </div>
    );
  };
  
  export default AdvantageItem;
  
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
  return (
    <div className="w-full flex justify-stretch items-center gap-2">
      <div className="md:w-[10%] lg:w-[4%]">
        <Icon size={26} className="text-blue-500" />
      </div>
      <div className="md:w-full">
        <Text text={text} weight="font-semibold" />
      </div>
    </div>
  );
};

export default AdvantageItem;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
