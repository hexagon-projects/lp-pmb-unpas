import axios from '../lib/axios';

const AboutService = {
    getAllAbouts: async () => {
        try {
            const response = await axios.get('/about');
            return response.data;
        } catch (error) {
            console.error('Error fetching abouts:', error);
            throw error;
        }
    },
};

export default AboutService;