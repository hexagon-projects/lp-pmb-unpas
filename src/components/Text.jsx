const Text = ({ text, sizeMobile = 'text-xs', color = 'text-gray-800', leading, weight, lineClamp }) => {
    return (
        <p className={`${color} ${leading} ${weight} ${sizeMobile} md:text-sm lg:text-base ${lineClamp}`}>{text}</p>
    )
}

export default Text