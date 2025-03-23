const Title = ({ title, sizeText = 'text-xl md:text-2xl lg:text-4xl', color = 'text-gray-900', fontWeight = 'font-bold' }) => {
    return (
        <h2 className={`font-Sora ${color} ${fontWeight} ${sizeText} `}>{title}</h2>
    )
}

export default Title