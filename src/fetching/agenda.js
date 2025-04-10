import axios from '../lib/axios';

const AgendaService = {
    getAllAgenda: async () => {
        try {
            const response = await axios.get('/agenda');
            return response.data;
        } catch (error) {
            console.error('Error fetching agenda:', error);
            throw error;
        }
    },
};

export default AgendaService;