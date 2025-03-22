import Text from "../Text";

const AdvantageItem = ({ icon: Icon, text }) => {
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
