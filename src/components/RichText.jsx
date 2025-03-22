const RichText = ({ content, textColor = 'text-gray-800', sizeText ='text-xs md:text-sm lg:text-sm', lineclamp, padding}) => {
    return (
        <p className={`${textColor} ${sizeText} leading-6 ${lineclamp} ${padding}`} 
            dangerouslySetInnerHTML={{ __html: content }} 
        />
    );
};

export default RichText;
