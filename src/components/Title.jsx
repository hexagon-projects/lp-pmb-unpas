const Title = ({ title, sizeMobile = 'text-xl', color = 'text-gray-900', fontWeight = 'font-bold' }) => {
    return (
        <h2 className={`font-Sora ${color} ${fontWeight} ${sizeMobile} md:text-2xl lg:text-3xl`}>{title}</h2>
    )
}

export default Title