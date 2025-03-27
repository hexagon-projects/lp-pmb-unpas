const RichText = ({ content, textColor = 'text-gray-800 prose', sizeText = 'text-xs md:text-sm lg:text-sm', lineclamp, padding }) => {
  // Pastikan content adalah string
  const safeContent = content?.toString() || '';

  return (
    <div className={`${textColor} ${sizeText} ${padding}`}>
      <p className={`overflow-hidden ${lineclamp} leading-6 font-medium`} dangerouslySetInnerHTML={{ __html: safeContent }} />
    </div>
  );
};

export default RichText;
