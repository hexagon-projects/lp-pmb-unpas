<<<<<<< HEAD
const RichText = ({ content, textColor = 'text-gray-800', sizeText ='text-xs md:text-sm lg:text-sm', lineclamp}) => {
    return (
        <p className={`${textColor} ${sizeText} leading-6 ${lineclamp}`} 
=======
const RichText = ({ content, textColor = 'text-gray-800', sizeText ='text-xs md:text-sm lg:text-sm', lineclamp, padding}) => {
    return (
        <p className={`${textColor} ${sizeText} leading-6 ${lineclamp} ${padding}`} 
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
            dangerouslySetInnerHTML={{ __html: content }} 
        />
    );
};

export default RichText;
