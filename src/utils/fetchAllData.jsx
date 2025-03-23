import SliderService from "../fetching/slider";
import AboutService from "../fetching/about";
import PartnerService from "../fetching/partner";
import TestimoniService from "../fetching/testimoni";
import UnggulanService from "../fetching/unggulan";
import RegistrasiService from "../fetching/registration";
import BeritaService from "../fetching/berita";
import PrestasiService from "../fetching/prestasi";
<<<<<<< HEAD
=======
import DukunganService from "../fetching/dukungan";
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)

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
<<<<<<< HEAD
=======
            dukungan
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
        ] = await Promise.all([
            SliderService.getAllSlider(),
            AboutService.getAllAbouts(),
            PartnerService.getAllPartner(),
            TestimoniService.getAllTestimoni(),
            UnggulanService.getAllUnggulan(),
            RegistrasiService.getAllRegistrasi(),
            BeritaService.getAllBerita(),
            PrestasiService.getAllPrestasi(),
<<<<<<< HEAD
=======
            DukunganService.getAllDukungan()
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
        ]);

        return {
            slider,
            about,
            partner,
<<<<<<< HEAD
            testimonials,
=======
            testimonials: testimonials.slice(0, 5),
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
            unggulan,
            jalur: jalur.slice(0, 4),
            artikel: artikel.slice(0, 4),
            prestasi: prestasi.slice(0, 4),
<<<<<<< HEAD
=======
            dukungan,
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};