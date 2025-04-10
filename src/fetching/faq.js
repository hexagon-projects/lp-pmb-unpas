import axios from '../lib/axios';

const FaqService = {
    getAllFaqs: async () => {
        try {
            const response = await axios.get('/faqs');
            return response.data;
        } catch (error) {
            console.error('Error fetching faq:', error);
            throw error;
        }
    },
};

export default FaqService;