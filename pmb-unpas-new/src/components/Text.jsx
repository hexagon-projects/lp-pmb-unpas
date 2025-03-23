const Text = ({ text, sizeText = 'text-xs md:text-sm lg:text-base', color = 'text-gray-800', leading, weight, lineClamp }) => {
    return (
        <p className={`${color} ${leading} ${weight} ${sizeText} ${lineClamp}`}>{text}</p>
    )
}

export default Text