import { BiBuilding } from "react-icons/bi"
import StatsBox from "./StatsBox"
import { PiStudentDuotone } from "react-icons/pi"
import { RiGraduationCapLine } from "react-icons/ri"
import { IoTrophyOutline } from "react-icons/io5"

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const StatsSection = ({prodi, mahasiswa, lulusan, prestasi}) => {
    return (
        <div className="w-full flex justify-center items-center p-4 md:px-10 lg:px-12">
            <div className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
                <StatsBox icon={<BiBuilding className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={prodi} title={'Program Studi'} />
                <StatsBox icon={<PiStudentDuotone className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={mahasiswa} title={'Mahasiswa'} />
                <StatsBox icon={<RiGraduationCapLine className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={lulusan} title={'Lulusan'} />
                <StatsBox icon={<IoTrophyOutline className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={prestasi} title={'Prestasi'} />
=======
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
const StatsSection = ({ title1 = 'Program Studi', prodi, mahasiswa, lulusan, prestasi, colorIcon }) => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full md:w-[90%] lg:w-full flex justify-center items-center ">
                <div className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-[80px] xl:gap-[100px]">
                    <StatsBox colorIcon={colorIcon} icon={<PiStudentDuotone className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={mahasiswa} title={'Mahasiswa'} />
                    <StatsBox colorIcon={colorIcon} icon={<RiGraduationCapLine className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={lulusan} title={'Lulusan'} />
                    <StatsBox colorIcon={colorIcon} icon={<BiBuilding className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={prodi} title={title1} />
                    <StatsBox colorIcon={colorIcon} icon={<IoTrophyOutline className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={prestasi} title={'Prestasi'} />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
>>>>>>> 8bbe4dc (First Commit)
=======
>>>>>>> origin/Budi
            </div>
        </div>
    )
}

export default StatsSection