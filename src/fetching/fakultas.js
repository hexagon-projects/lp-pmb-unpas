import axios from '../lib/axios';

const FakultasService = {
    getAllFakultas: async () => {
        try {
            const response = await axios.get('/fakultas');
            return response.data;
        } catch (error) {
            console.error('Error fetching fakultas:', error);
            throw error;
        }
    },
    getFakultasBySlug: async (slug) => {
        try {
            const response = await axios.get(`/fakultas/${slug}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching fakultas by slug:', error);
            throw error;
        }
    },
};

export default FakultasService;