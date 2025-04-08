import SliderService from "../fetching/slider";
import AboutService from "../fetching/about";
import PartnerService from "../fetching/partner";
import TestimoniService from "../fetching/testimoni";
import UnggulanService from "../fetching/unggulan";
import RegistrasiService from "../fetching/registration";
import BeritaService from "../fetching/berita";
import PrestasiService from "../fetching/prestasi";
import DukunganService from "../fetching/dukungan";
import OrganisasiService from "../fetching/organisasi";

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
            dukungan,
            organisasi
        ] = await Promise.all([
            SliderService.getAllSlider(),
            AboutService.getAllAbouts(),
            PartnerService.getAllPartner(),
            TestimoniService.getTestimoniHome(),
            UnggulanService.getAllUnggulan(),
            RegistrasiService.getAllRegistrasi(),
            BeritaService.getAllBerita(),
            PrestasiService.getAllPrestasi(),
            DukunganService.getAllDukungan(),
            OrganisasiService.getAllOrganisasi()
        ]);

        return {
            slider,
            about,
            partner,
            testimonials,
            unggulan,
            jalur,
            artikel: artikel.slice(0, 4),
            prestasi: prestasi.slice(0, 10),
            dukungan,
            organisasi
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};