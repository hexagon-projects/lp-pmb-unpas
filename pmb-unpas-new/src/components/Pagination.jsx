import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => (
    <div className="flex justify-center space-x-2 text-xs md:text-sm lg:text-sm">
        <button
            className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-pointer" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
        >
            <MdOutlineKeyboardArrowLeft />
        </button>
        <span className="px-4 py-2 text-gray-700">{currentPage} of {totalPages}</span>
        <button
            className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-300 cursor-pointer" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
        >
            <MdKeyboardArrowRight />
        </button>
    </div>
);

export default Pagination