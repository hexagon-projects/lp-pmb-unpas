import axios from '../lib/axios';

const TestimoniService = {
    getAllTestimoni: async () => {
        try {
            const response = await axios.get('/testimoni');
            return response.data;
        } catch (error) {
            console.error('Error fetching testimonis:', error);
            throw error;
        }
    },
};

export default TestimoniService;