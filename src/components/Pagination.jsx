import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="flex justify-center space-x-2 text-xs md:text-sm lg:text-base">
        <button
            className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
=======
    <div className="flex justify-center space-x-2 text-xs md:text-sm lg:text-sm">
        <button
            className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-pointer" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
    <div className="flex justify-center space-x-2 text-xs md:text-sm lg:text-sm">
        <button
            className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-pointer" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
>>>>>>> 8bbe4dc (First Commit)
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
        >
            <MdOutlineKeyboardArrowLeft />
        </button>
        <span className="px-4 py-2 text-gray-700">{currentPage} of {totalPages}</span>
        <button
<<<<<<< HEAD
<<<<<<< HEAD
            className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
=======
            className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-300 cursor-pointer" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
            className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-300 cursor-pointer" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
>>>>>>> 8bbe4dc (First Commit)
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
        >
            <MdKeyboardArrowRight />
        </button>
    </div>
);

export default Pagination