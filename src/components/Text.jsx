<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const Text = ({ text, sizeMobile = 'text-xs', color = 'text-gray-800', leading, weight }) => {
    return (
        <p className={`${color} ${leading} ${weight} ${sizeMobile} md:text-sm lg:text-sm`}>{text}</p>
=======
const Text = ({ text, sizeMobile = 'text-xs', color = 'text-gray-800', leading, weight, lineClamp }) => {
    return (
        <p className={`${color} ${leading} ${weight} ${sizeMobile} md:text-sm lg:text-base ${lineClamp}`}>{text}</p>
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
const Text = ({ text, sizeMobile = 'text-xs', color = 'text-gray-800', leading, weight, lineClamp }) => {
    return (
        <p className={`${color} ${leading} ${weight} ${sizeMobile} md:text-sm lg:text-base ${lineClamp}`}>{text}</p>
>>>>>>> 8bbe4dc (First Commit)
=======
const Text = ({ text, sizeMobile = 'text-xs', color = 'text-gray-800', leading, weight, lineClamp }) => {
    return (
        <p className={`${color} ${leading} ${weight} ${sizeMobile} md:text-sm lg:text-base ${lineClamp}`}>{text}</p>
>>>>>>> origin/Budi
    )
}

export default Text