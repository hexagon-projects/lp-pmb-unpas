import axios from '../lib/axios';

const OrganisasiService = {
    getAllOrganisasi: async () => {
        try {
            const response = await axios.get('/organisasi');
            return response.data;
        } catch (error) {
            console.error('Error fetching organisasi:', error);
            throw error;
        }
    },
};

export default OrganisasiService;