import axios from '../lib/axios';

const GalleryService = {
    getAllGallery: async () => {
        try {
            const response = await axios.get('/galery');
            return response.data;
        } catch (error) {
            console.error('Error fetching galery:', error);
            throw error;
        }
    },
};

export default GalleryService;