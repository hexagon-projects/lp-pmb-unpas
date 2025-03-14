import Text from "../Text";

const AdvantageItem = ({ icon: Icon, text }) => {
    return (
      <div className="flex justify-center items-center gap-2">
        <Icon size={34} className="text-blue-500" />
        <Text text={text} weight="font-semibold" />
      </div>
    );
  };
  
  export default AdvantageItem;
  