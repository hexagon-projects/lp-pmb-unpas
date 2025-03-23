import axios from '../lib/axios';

const TeamService = {
    getAllTeam: async () => {
        try {
            const response = await axios.get('/team');
            return response.data;
        } catch (error) {
            console.error('Error fetching team:', error);
            throw error;
        }
    },
};

export default TeamService;