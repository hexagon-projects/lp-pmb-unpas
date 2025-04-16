import { BiBuilding } from "react-icons/bi";
import { PiStudentDuotone } from "react-icons/pi";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoTrophyOutline } from "react-icons/io5";
import StatsBoxProdi from "./StatsBoxProdi";

const StatsSection = ({ title1 = 'Program Studi', prodi, mahasiswa, lulusan, prestasi, colorIcon }) => {
  const shadowClass = colorIcon 
    ? colorIcon.startsWith('#')
      ? ''
      : `shadow-[${colorIcon.replace('text-', '')}/20] sm:shadow-none`
    : 'shadow-black/20 sm:shadow-none';

  return (
    <div className="w-full flex justify-center items-center">
      <div 
        className={`
          border-2 border-[#fafafa] 
          md:border-none 
          w-[90%] md:w-[90%] 
          grid grid-cols-2 
          lg:w-[90%] xl:w-[80%] 
          lg:flex lg:flex-row lg:flex-wrap lg:justify-between lg:items-center 
          h-fit 
          gap-4 md:gap-6 lg:gap-8 
          p-4 md:p-6 
          bg-[#F0F0F0] md:bg-transparent 
          rounded-xl md:rounded-2xl lg:rounded-4xl 
          shadow-xl 
          ${shadowClass}
        `}
        style={
          colorIcon?.startsWith('#') 
            ? { 
                boxShadow: window.innerWidth < 640 ? `0px 20px 40px ${hexToRgba(colorIcon, 0.2)}` : 'none'
              } 
            : {}
        }
      >
        <div className="lg:w-1/5">
        <StatsBoxProdi colorIcon={colorIcon} icon={<PiStudentDuotone className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={mahasiswa} title={'Mahasiswa'} />
        </div>
        <div className="lg:w-1/5">
        <StatsBoxProdi colorIcon={colorIcon} icon={<RiGraduationCapLine className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={lulusan} title={'Lulusan'} />
        </div>
        <div className="lg:w-1/5">
        <StatsBoxProdi colorIcon={colorIcon} icon={<BiBuilding className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={prodi} title={title1} />
        </div>
        <div className="lg:w-1/5">
        <StatsBoxProdi colorIcon={colorIcon} icon={<IoTrophyOutline className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} number={prestasi} title={'Prestasi'} />
        </div>
      </div>
    </div>
  );
};

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default StatsSection;