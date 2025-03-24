const FakultasCard = ({ faculty }) => {
    return (
        <div className="space-y-4">
            <div
                className={`bg-primary/30 border border-white hover:shadow-xl hover:shadow-primary/20
                hover:shadow-[0px_0px_40px_10px_rgba(254, 242, 81, 1.0)] max-h-fit p-6 rounded-xl md:rounded-2xl lg:rounded-4xl flex flex-col 
                transition-all duration-500 ease-in-out`}
                onClick={() => window.location.href = `/fakultas/${faculty.slug}`}
            >
                <h3 className="font-semibold text-base lg:text-lg mb-4">{faculty.name}</h3>
                <div className="space-y-2 max-h-fit rounded-xl md:rounded-2xl lg:rounded-4xl flex-grow">
                    {faculty.programs.map((program, idx) => (
                        <p
                            key={idx}
                            className="bg-gray-100 border-2 border-white p-4 rounded-lg lg:rounded-xl md:rounded-3xl text-xs md:text-sm text-gray-700 hover:bg-primary cursor-pointer transition duration-500"
                            onClick={(e) => {
                                e.stopPropagation(); // Mencegah event bubbling ke parent
                                window.location.href = `/program-studi/${program.slug}`;
                            }}
                        >
                            {program.name} {/* Perbaikan: Akses properti `name` dari objek `program` */}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FakultasCard;