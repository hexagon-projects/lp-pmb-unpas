<<<<<<< HEAD
const RichText = ({ content, textColor = 'text-gray-800', sizeText ='text-xs md:text-sm lg:text-sm', lineclamp, padding}) => {
    return (
        <p className={`${textColor} ${sizeText} leading-6 ${lineclamp} ${padding}`} 
=======
const RichText = ({ content, textColor = 'text-gray-800', sizeText ='text-[18px]', lineclamp, padding, font = 'semibold'}) => {
    return (
        <p className={`${textColor} ${sizeText} leading-6 ${lineclamp} ${padding} ${font}`} 
>>>>>>> origin/Radh
            dangerouslySetInnerHTML={{ __html: content }} 
        />
    );
};

export default RichText;
