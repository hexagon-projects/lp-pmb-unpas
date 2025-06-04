import axios from '../lib/axios';

const BeritaService = {
    getAllBerita: async () => {
        try {
            const response = await axios.get('/postall');
            return response.data;
        } catch (error) {
            console.error('Error fetching post:', error);
            throw error;
        }
    },
        getPaginationBerita: async (page) => {
        try {
            const response = await axios.get(`/post?page=${page}`);
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