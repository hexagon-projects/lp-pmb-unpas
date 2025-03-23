import axios from '../lib/axios';

const BeritaService = {
    getAllBerita: async () => {
        try {
            const response = await axios.get('/post');
            return response.data;
        } catch (error) {
            console.error('Error fetching post:', error);
            throw error;
        }
    },
    getBeritaBySlug: async (slug) => {
        try {
            const response = await axios.get(`/post/${slug}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching post by slug:', error);
            throw error;
        }
    },
};

export default BeritaService;