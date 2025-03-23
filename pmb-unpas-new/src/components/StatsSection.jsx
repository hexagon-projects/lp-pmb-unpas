import { BiBuilding } from "react-icons/bi"
import StatsBox from "./StatsBox"
import { PiStudentDuotone } from "react-icons/pi"
import { RiGraduationCapLine } from "react-icons/ri"
import { IoTrophyOutline } from "react-icons/io5"

const StatsSection = ({ title1 = 'Program Studi', prodi, mahasiswa, lulusan, prestasi, colorIcon }) => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[90%] md:w-[90%] grid grid-cols-2 lg:w-3/4 xl:w-2/3 lg:flex lg:flex-row lg:flex-wrap lg:justify-between lg:items-center h-fit gap-4 md:gap-6 lg:gap-8 p-4 md:p-0 bg-[#F0F0F0] md:bg-none rounded-lg shadow-xl shadow-black/5 shadow-[0px_20px_40px_rgba(254, 242, 81, 0.7)] md:shadow-none">
                <StatsBox colorIcon={colorIcon} icon={<PiStudentDuotone className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={mahasiswa} title={'Mahasiswa'} />
                <StatsBox colorIcon={colorIcon} icon={<RiGraduationCapLine className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={lulusan} title={'Lulusan'} />
                <StatsBox colorIcon={colorIcon} icon={<BiBuilding className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={prodi} title={title1} />
                <StatsBox colorIcon={colorIcon} icon={<IoTrophyOutline className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={prestasi} title={'Prestasi'} />
            </div>
        </div>
    )
}

export default StatsSection