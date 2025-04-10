import axios from '../lib/axios';

const ProdiService = {
    getAllProdi: async () => {
        try {
            const response = await axios.get('/prodi');
            return response.data;
        } catch (error) {
            console.error('Error fetching prodi:', error);
            throw error;
        }
    },
    getProdiBySlug: async (slug) => {
        try {
            const response = await axios.get(`/prodi/${slug}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching prodi by slug:', error);
            throw error;
        }
    },
};

export default ProdiService;