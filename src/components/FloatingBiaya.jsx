import { IoWalletOutline } from "react-icons/io5";
import Biaya from '../assets/biaya.jpg';

const FloatingBiaya = () => {
  const handleDownloadBiaya = () => {
    const link = document.createElement('a');
    link.href = Biaya;
    link.download = 'Brosur Biaya Unpas.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed md:hidden bottom-48 lg:bottom-24 right-6 z-999999 bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition"
      onClick={handleDownloadBiaya}
      title="Download Brosur Biaya"
    >
      <IoWalletOutline size={32} />
    </div>
  );
};

export default FloatingBiaya;