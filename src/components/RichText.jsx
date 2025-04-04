const RichText = ({ content, textColor = 'text-gray-800 prose', sizeText = 'text-xs md:text-sm lg:text-sm', weight = 'font-normal', lineclamp, padding }) => {
    const safeContent = content?.toString() || '';
    
    return (
        <div className={`${textColor} ${sizeText} ${padding}`}
        style={{
          whiteSpace: 'pre-line', 
          wordBreak: 'break-word', 
          overflowWrap: 'break-word',
          lineHeight: '1.6', 
          fontSize: '16px', 
          color: '#2D3748', 
          padding: '16px', 
          textAlign: 'justify',
        }}>
            <p 
                className={`overflow-hidden ${lineclamp} leading-6 ${weight}`} 
                dangerouslySetInnerHTML={{ __html: safeContent }} 
                style={{ 
                    textAlign: 'justify',
                    marginBottom: '20px',
                    marginTop: '20px',
                  }}
            />

            {/* Tambahkan CSS tambahan untuk link dan list */}
            <style>
                {`
                p a {
                    color: #c73929 !important; /* Warna link */
                    text-decoration: none; /* Hilangkan underline */
                }
                p a:hover {
                    text-decoration: underline; /* Tambahkan underline saat hover */
                }
                ol {
                    list-style-type: decimal; /* Pastikan angka muncul di ol */
                    margin-left: 20px;
                }
                ul {
                    list-style-type: disc; /* Pastikan bullet muncul di ul */
                    margin-left: 20px;
                }
                `}
            </style>
        </div>
    );
};

export default RichText;