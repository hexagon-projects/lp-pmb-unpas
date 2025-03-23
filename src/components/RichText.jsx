const RichText = ({ content, textColor = 'text-gray-800', sizeText ='text-[18px]', lineclamp, padding, font = 'semibold'}) => {
    return (
        <p className={`${textColor} ${sizeText} leading-6 ${lineclamp} ${padding} ${font}`} 
            dangerouslySetInnerHTML={{ __html: content }} 
        />
    );
};

export default RichText;
