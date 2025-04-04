import axios from '../lib/axios';

const SliderService = {
    getAllSlider: async () => {
        try {
            const response = await axios.get('/slider');
            return response.data;
        } catch (error) {
            console.error('Error fetching slider:', error);
            throw error;
        }
    },
};

export default SliderService;