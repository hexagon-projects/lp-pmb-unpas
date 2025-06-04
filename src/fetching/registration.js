import axios from '../lib/axios';

const RegistrasiService = {
    getAllRegistrasi: async () => {
        try {
            const response = await axios.get('/registration');
            return response.data;
        } catch (error) {
            console.error('Error fetching registration:', error);
            throw error;
        }
    },
        getRegistrasiBySlug: async (slug) => {
        try {
            const response = await axios.get(`/registration/${slug}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching prodi by slug:', error);
            throw error;
        }
    },
};

export default RegistrasiService;