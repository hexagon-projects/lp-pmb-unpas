import axios from '../lib/axios';

const DukunganService = {
    getAllDukungan: async () => {
        try {
            const response = await axios.get('/dukungan');
            return response.data;
        } catch (error) {
            console.error('Error fetching dukungan:', error);
            throw error;
        }
    },
};

export default DukunganService;