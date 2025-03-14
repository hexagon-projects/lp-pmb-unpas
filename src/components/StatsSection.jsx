import { BiBuilding } from "react-icons/bi"
import StatsBox from "./StatsBox"
import { PiStudentDuotone } from "react-icons/pi"
import { RiGraduationCapLine } from "react-icons/ri"
import { IoTrophyOutline } from "react-icons/io5"

const StatsSection = ({prodi, mahasiswa, lulusan, prestasi}) => {
    return (
        <div className="w-full flex justify-center items-center p-4 md:px-10 lg:px-12">
            <div className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
                <StatsBox icon={<BiBuilding className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={prodi} title={'Program Studi'} />
                <StatsBox icon={<PiStudentDuotone className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={mahasiswa} title={'Mahasiswa'} />
                <StatsBox icon={<RiGraduationCapLine className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={lulusan} title={'Lulusan'} />
                <StatsBox icon={<IoTrophyOutline className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={prestasi} title={'Prestasi'} />
            </div>
        </div>
    )
}

export default StatsSection