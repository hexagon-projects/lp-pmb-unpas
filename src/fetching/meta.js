import axios from '../lib/axios';

const MetaService = {
    getMeta: async () => {
        try {
            const response = await axios.get('/meta-pixel');
            return response.data;
        } catch (error) {
            console.error('Error fetching meta-pixel:', error);
            throw error;
        }
    },
};

export default MetaService;