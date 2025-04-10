const RichText = ({ content, textColor = 'text-gray-800 prose', sizeText = 'text-xs md:text-sm lg:text-sm', weight = 'font-normal', lineclamp, padding, leading, }) => {
    const safeContent = content?.toString() || '';
    
    return (
        <div className={`${textColor} ${sizeText} ${padding}`}>
            <p className={`overflow-hidden ${lineclamp} ${leading} ${weight}`} dangerouslySetInnerHTML={{ __html: safeContent }}/>
        </div>
    );
};

export default RichText;