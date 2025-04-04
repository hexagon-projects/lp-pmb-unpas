import axios from '../lib/axios';

const UnggulanService = {
    getAllUnggulan: async () => {
        try {
            const response = await axios.get('/unggulan');
            return response.data;
        } catch (error) {
            console.error('Error fetching unggulans:', error);
            throw error;
        }
    },
    getUnggulanByID: async (id) => {
        try {
            const response = await axios.get(`/unggulan/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching unggulan by id:', error);
            throw error;
        }
    },
};

export default UnggulanService;