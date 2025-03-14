const SearchInput = ({ placeholder, searchTerm, setSearchTerm, widthDekstop = 'md:w-1/2' }) => (
    <input
        type="text"
        placeholder={placeholder}
        className={`w-full text-xs md:text-sm lg:text-base ${widthDekstop} border border-gray-200 shadow-md p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
);

export default SearchInput