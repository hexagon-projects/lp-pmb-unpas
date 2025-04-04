const ArticleTitle = ({ title, sizeMobile = 'text-sm', color = 'text-gray-900', fontWeight = 'font-bold' }) => {
    return (
        <h2 className={`${color} ${fontWeight} ${sizeMobile} md:text-base lg:text-lg`}>{title}</h2>
    )
}

export default ArticleTitle