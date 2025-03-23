const RichText = ({ content, textColor = 'text-gray-800', sizeText = 'text-xs md:text-sm lg:text-sm', lineclamp, padding }) => {
    return (
        <div className={`${textColor} ${sizeText} ${padding}`}>
            <p className={`overflow-hidden ${lineclamp} leading-6 font-medium`} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default RichText;