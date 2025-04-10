import axios from "../lib/axios";

const GalleryService = {
  getAllGallery: async () => {
    try {
      const response = await axios.get("/galery");
      return response.data;
    } catch (error) {
      console.error("Error fetching galery:", error);
      throw error;
    }
  },
  getAllInovasiHome: async () => {
    try {
      const response = await axios.get("/inovasi-home");
      return response.data;
    } catch (error) {
      console.error("Error fetching inovasi-home:", error);
      throw error;
    }
  },
  getAllInovasiSlug: async ({ slug }) => {
    try {
      const response = await axios.get(`/inovasi-home/${slug}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching inovasi-home:", error);
      throw error;
    }
  },
};

export default GalleryService;
