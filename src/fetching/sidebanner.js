import axios from 'axios';

const SideBannerService = {
  getAllSideBanner: async () => {
    try {
      const response = await axios.get('https://cms.unpas.ac.id/api/sidebanner');

      return response.data;
    } catch (error) {
      console.error('Gagal fetch sidebanner:', error);
      return [];
    }
  },
};

export default SideBannerService;
