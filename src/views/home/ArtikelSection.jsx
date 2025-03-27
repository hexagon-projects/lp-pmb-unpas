import ArticleCard from "../../components/artikel/ArticleCard"
import SelengkapnyaButton from "../../components/SelengkapnyaButton"
import Text from "../../components/Text"
import Title from "../../components/Title"

const ArtikelSection = ({ data }) => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className={'w-full flex flex-col gap-4 md:gap-6 lg:gap-8 p-4 md:px-10 lg:px-12'}>
                <div className="flex justify-between items-center">
                    <div className="text-left md:text-left">
                        <Title title={'Informasi dan Pengumuman'} />
                    </div>
                    <SelengkapnyaButton onClick={() => window.location.href = '/artikel'} />
                </div>
                <ArticleCard data={data.artikel} />
            </div>
        </div>
    )
}

export default ArtikelSection