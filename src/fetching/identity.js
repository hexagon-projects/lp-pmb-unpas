import axios from '../lib/axios';

const IdentityService = {
    getAllIdentities: async () => {
        try {
            const response = await axios.get('/identity');
            return response.data;
        } catch (error) {
            console.error('Error fetching identities:', error);
            throw error;
        }
    },
};

export default IdentityService;