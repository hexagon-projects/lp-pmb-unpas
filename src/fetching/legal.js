import axios from '../lib/axios';

const LegalService = {
    getAllLegal: async () => {
        try {
            const response = await axios.get('/legal');
            return response.data;
        } catch (error) {
            console.error('Error fetching legal:', error);
            throw error;
        }
    },
};

export default LegalService;