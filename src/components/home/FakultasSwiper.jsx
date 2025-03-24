import Stack from "../Stack";

const FakultasList = ({ faculties }) => {
  return (
    <div className="w-full h-full flex lg:hidden justify-center items-center px-8">
      <Stack cardsData={faculties} />
    </div>
  );
};

export default FakultasList;