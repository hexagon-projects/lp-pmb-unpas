import FakultasCard from '../../components/home/FakultasCard'
import FakultasSwiper from '../../components/home/FakultasSwiper'
import Text from '../../components/Text'
import Title from '../../components/Title'

const FakultasSection = ({ faculties, faculties1, faculties2, faculties3 }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-10 md:px-10 lg:px-12">
      {/* Judul */}
      <div className="text-center p-4 md:px-10 lg:px-12">
        <Text sizeText="text-base md:text-lg lg:text-2xl" text="Universitas Pasundan" color="text-text" weight="font-bold" />
        <Title title="Fakultas dan Program Studi" />
      </div>

      {/* Swiper */}
      <FakultasSwiper faculties={faculties} />

      {/* Grid Fakultas */}
      <div className="w-full flex justify-center items-center">
        <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[80%] hidden lg:grid grid-cols-2 lg:grid-cols-3 gap-4 rounded-xl md:rounded-2xl lg:rounded-4xl">
          {[faculties1, faculties2, faculties3].map((facultyList, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {facultyList.map((faculty, index) => (
                <FakultasCard key={faculty.id} faculty={faculty} index={columnIndex * 3 + index} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FakultasSection
