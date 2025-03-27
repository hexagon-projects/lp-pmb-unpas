import { useEffect, useState } from 'react';
import Text from '../components/Text';
import Title from '../components/Title';
import UserLayout from './layouts/UserLayout';
import SearchInput from '../components/SearchInput';
import Pagination from '../components/Pagination';
import { IoIosArrowDown } from 'react-icons/io';
import Button from '../components/Button';
import FaqService from '../fetching/faq';
import Loading from '../components/Loading';
import CTASection from '../components/CTASection';
import Section1 from '../assets/gedung.jpeg';
import { Helmet } from 'react-helmet-async';
import IdentityService from '../fetching/identity';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [identity, setIdentity] = useState(null);
  const [identityLoading, setIdentityLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTermGeneral, setSearchTermGeneral] = useState('');
  const [searchTermBilling, setSearchTermBilling] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
  });
  const itemsPerPage = 3;

  // Fetch FAQs
  const fetchFaqs = async () => {
    try {
      const response = await FaqService.getAllFaqs();
      if (response.data) {
        setFaqs(response.data.data);
      } else {
        // Show user-friendly error if no data
        alert('Tidak ada data FAQ ditemukan.');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      setLoading(false);
      alert('Terjadi kesalahan saat memuat FAQ. Silakan coba lagi.');
    }
  };

  // Fetch identity (admin's WhatsApp number)
  const fetchIdentity = async () => {
    try {
      const response = await IdentityService.getAllIdentities();
      if (response.length > 0) {
        setIdentity(response[0]);
      } else {
        alert('Nomor WhatsApp admin tidak tersedia.');
      }
      setIdentityLoading(false);
    } catch (error) {
      console.error('Error fetching identity:', error);
      alert('Terjadi kesalahan saat memuat data kontak. Silakan coba lagi.');
      setIdentityLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
    fetchIdentity();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identity?.phone) {
      alert('Nomor WhatsApp admin tidak tersedia.');
      return;
    }

    const { email, phone, message } = formData;
    const whatsappMessage = `Halo Admin PMB Unpas,\n\nSaya ingin bertanya tentang:\n${message}\n\nKontak saya:\nEmail: ${email}\nTelepon: ${phone ? '+62' + phone : '-'}\n\nTerima kasih.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${identity.phone}?text=${encodedMessage}`, '_blank');
  };

  const filteredGeneralFaqs = faqs.filter((faq) => faq.id_kategori === 6 && faq.title.toLowerCase().includes(searchTermGeneral.toLowerCase()));

  const filteredBillingFaqs = faqs.filter((faq) => faq.id_kategori === 4 && faq.title.toLowerCase().includes(searchTermBilling.toLowerCase()));

  const totalPagesGeneral = Math.ceil(filteredGeneralFaqs.length / itemsPerPage);
  const paginatedGeneralFaqs = filteredGeneralFaqs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPagesBilling = Math.ceil(filteredBillingFaqs.length / itemsPerPage);
  const paginatedBillingFaqs = filteredBillingFaqs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading || identityLoading) {
    return <Loading />;
  }

  return (
    <UserLayout bgLayoutColor="bg-[#F3F3F3]" bgColor={'bg-[#F3F3F3]'} position={'fixed'} margin={''} titleColor={'text-black'} paddingDekstop={'md:py-3 md:px-3 lg:py-6 lg:px-6'} paddingTop={'lg:pt-20'} type={'fadeInUp'} duration={0.5}>
      <Helmet>
        <title>FAQ - Universitas Pasundan</title>
      </Helmet>
      <div className="p-4 md:p-6 lg:p-12 space-y-8 md:space-y-12 lg:space-y-20">
        {/* Main Section */}
        <div className="relative h-[70vh] p-4 md:px-10 lg:px-12 rounded-xl md:rounded-2xl lg:rounded-4xl flex flex-col justify-center items-start bg-cover bg-no-repeat" style={{ backgroundImage: `url(${Section1})` }}>
          <div className="absolute inset-0 bg-black/30 rounded-xl md:rounded-2xl lg:rounded-4xl"></div>
          <div className="relative z-">
            <Text text={'Bantuan'} color="text-white" />
            <Title title={'Frequently Asked Questions'} color="text-white" />
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* General FAQ Section */}
          <div className="w-full space-y-3 text-center md:text-left">
            <Title title={`Jadwal Umum PMB`} />
            <Text text={'Pertanyaan-pertanyaan umum seputar PMB'} />
          </div>
          <div className="w-full flex flex-col gap-4">
            <SearchInput placeholder={'Cari FAQ Umum...'} searchTerm={searchTermGeneral} setSearchTerm={setSearchTermGeneral} widthDekstop="w-full" />

            {paginatedGeneralFaqs.length > 0 ? (
              paginatedGeneralFaqs.map((faq, index) => (
                <div key={faq.id} className="w-full shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-lg p-4">
                  <button className="w-full flex justify-between items-center text-left font-semibold text-xs md:text-sm lg:text-base" onClick={() => toggleDropdown(index)}>
                    {faq.title}
                    <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                      <IoIosArrowDown />
                    </span>
                  </button>
                  {openIndex === index && <div className="mt-2 text-xs md:text-sm lg:text-base text-gray-600" dangerouslySetInnerHTML={{ __html: faq.description }} />}
                </div>
              ))
            ) : (
              <p className="text-center text-xs md:text-sm lg:text-base text-gray-500">Tidak ada FAQ ditemukan.</p>
            )}

            <Pagination currentPage={currentPage} totalPages={totalPagesGeneral} setCurrentPage={setCurrentPage} />
          </div>
        </div>

        {/* Other sections similar to the one above */}

        <CTASection />
      </div>
    </UserLayout>
  );
};

export default Faq;
