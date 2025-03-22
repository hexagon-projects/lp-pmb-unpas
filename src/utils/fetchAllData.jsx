import SliderService from "../fetching/slider";
import AboutService from "../fetching/about";
import PartnerService from "../fetching/partner";
import TestimoniService from "../fetching/testimoni";
import UnggulanService from "../fetching/unggulan";
import RegistrasiService from "../fetching/registration";
import BeritaService from "../fetching/berita";
import PrestasiService from "../fetching/prestasi";
import DukunganService from "../fetching/dukungan";

export const fetchAllData = async () => {
    try {
        const [
            slider,
            about,
            partner,
            testimonials,
            unggulan,
            jalur,
            artikel,
            prestasi,
            dukungan
        ] = await Promise.all([
            SliderService.getAllSlider(),
            AboutService.getAllAbouts(),
            PartnerService.getAllPartner(),
            TestimoniService.getAllTestimoni(),
            UnggulanService.getAllUnggulan(),
            RegistrasiService.getAllRegistrasi(),
            BeritaService.getAllBerita(),
            PrestasiService.getAllPrestasi(),
            DukunganService.getAllDukungan()
        ]);

        return {
            slider,
            about,
            partner,
            testimonials: testimonials.slice(0, 5),
            unggulan,
            jalur: jalur.slice(0, 4),
            artikel: artikel.slice(0, 4),
            prestasi: prestasi.slice(0, 4),
            dukungan,
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};