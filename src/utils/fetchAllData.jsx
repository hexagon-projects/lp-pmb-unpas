import SliderService from "../fetching/slider";
import AboutService from "../fetching/about";
import PartnerService from "../fetching/partner";
import TestimoniService from "../fetching/testimoni";
import UnggulanService from "../fetching/unggulan";
import RegistrasiService from "../fetching/registration";
import BeritaService from "../fetching/berita";
import PrestasiService from "../fetching/prestasi";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import DukunganService from "../fetching/dukungan";
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
import DukunganService from "../fetching/dukungan";
>>>>>>> 8bbe4dc (First Commit)

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
<<<<<<< HEAD
=======
            dukungan
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
            dukungan
>>>>>>> 8bbe4dc (First Commit)
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
<<<<<<< HEAD
=======
            DukunganService.getAllDukungan()
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
            DukunganService.getAllDukungan()
>>>>>>> 8bbe4dc (First Commit)
        ]);

        return {
            slider,
            about,
            partner,
<<<<<<< HEAD
<<<<<<< HEAD
            testimonials,
=======
            testimonials: testimonials.slice(0, 5),
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
            testimonials: testimonials.slice(0, 5),
>>>>>>> 8bbe4dc (First Commit)
            unggulan,
            jalur: jalur.slice(0, 4),
            artikel: artikel.slice(0, 4),
            prestasi: prestasi.slice(0, 4),
<<<<<<< HEAD
<<<<<<< HEAD
=======
            dukungan,
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
            dukungan,
>>>>>>> 8bbe4dc (First Commit)
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};