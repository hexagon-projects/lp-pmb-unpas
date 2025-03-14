const RichText = ({ content, textColor = 'text-gray-800', sizeText ='text-xs md:text-sm lg:text-sm', lineclamp}) => {
    return (
        <p className={`${textColor} ${sizeText} leading-6 ${lineclamp}`} 
            dangerouslySetInnerHTML={{ __html: content }} 
        />
    );
};

export default RichText;
