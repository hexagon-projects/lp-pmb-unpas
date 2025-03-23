const SearchInput = ({ placeholder, searchTerm, setSearchTerm, widthDekstop = 'md:w-1/2' }) => (
    <input
        type="text"
        placeholder={placeholder}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        className={`w-full text-xs md:text-sm lg:text-base ${widthDekstop} border border-gray-200 shadow-md p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
=======
        className={`bg-white w-full text-xs md:text-sm lg:text-sm ${widthDekstop} border border-gray-200 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
        className={`bg-white w-full text-xs md:text-sm lg:text-sm ${widthDekstop} border border-gray-200 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
>>>>>>> 8bbe4dc (First Commit)
=======
        className={`bg-white w-full text-xs md:text-sm lg:text-sm ${widthDekstop} border border-gray-200 shadow-lg drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
>>>>>>> origin/Budi
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
);

export default SearchInput