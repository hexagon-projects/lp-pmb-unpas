import axios from '../lib/axios';

const PartnerService = {
    getAllPartner: async () => {
        try {
            const response = await axios.get('/partner');
            return response.data;
        } catch (error) {
            console.error('Error fetching partners:', error);
            throw error;
        }
    },
};

export default PartnerService;