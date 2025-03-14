const Text = ({ text, sizeMobile = 'text-xs', color = 'text-gray-800', leading, weight }) => {
    return (
        <p className={`${color} ${leading} ${weight} ${sizeMobile} md:text-sm lg:text-sm`}>{text}</p>
    )
}

export default Text