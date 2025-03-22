import axios from '../lib/axios';

const PrestasiService = {
    getAllPrestasi: async () => {
        try {
            const response = await axios.get('/prestasi');
            return response.data;
        } catch (error) {
            console.error('Error fetching prestasi:', error);
            throw error;
        }
    },

    getPrestasiProdi: async (slug) => {
        try {
            const response = await axios.get(`/prestasi/${slug}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching prestasi by slug:', error);
            throw error;
        }
    },
};

export default PrestasiService;