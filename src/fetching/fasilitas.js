import axios from '../lib/axios';

const FasilitasService = {
    getAllFasilitas: async () => {
        try {
            const response = await axios.get('/fasilitasUnggulan');
            return response.data;
        } catch (error) {
            console.error('Error fetching fasilitas:', error);
            throw error;
        }
    }
};

export default FasilitasService;