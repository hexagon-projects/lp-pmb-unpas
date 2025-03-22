import axios from '../lib/axios';

const ChatService = {
    getChat: async () => {
        try {
            const response = await axios.get('/chat');
            return response.data;
        } catch (error) {
            console.error('Error fetching chat:', error);
            throw error;
        }
    },
};

export default ChatService;