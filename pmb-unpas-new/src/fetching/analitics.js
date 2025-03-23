import axios from '../lib/axios';

const AnaliticService = {
    getAnalitic: async () => {
        try {
            const response = await axios.get('/google-analytics');
            return response.data;
        } catch (error) {
            console.error('Error fetching google-analytics:', error);
            throw error;
        }
    },
};

export default AnaliticService;