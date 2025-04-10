const Title = ({ title, sizeText = 'text-xl md:text-2xl lg:text-4xl', color = 'text-gray-900', fontWeight = 'font-bold' }) => {
    const isHex = color.startsWith('#');
    return (
        <h2 className={`font-Sora ${!isHex ? color : ''} ${fontWeight} ${sizeText} `} style={isHex ? { color } : {}}>{title}</h2>
    )
}

export default Title