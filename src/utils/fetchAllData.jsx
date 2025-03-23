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
<<<<<<< HEAD
=======
import DukunganService from "../fetching/dukungan";
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
import DukunganService from "../fetching/dukungan";
>>>>>>> 8bbe4dc (First Commit)
=======
import DukunganService from "../fetching/dukungan";
>>>>>>> origin/Budi

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
<<<<<<< HEAD
=======
            dukungan
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
            dukungan
>>>>>>> 8bbe4dc (First Commit)
=======
            dukungan
>>>>>>> origin/Budi
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
<<<<<<< HEAD
=======
            DukunganService.getAllDukungan()
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
            DukunganService.getAllDukungan()
>>>>>>> 8bbe4dc (First Commit)
=======
            DukunganService.getAllDukungan()
>>>>>>> origin/Budi
        ]);

        return {
            slider,
            about,
            partner,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            testimonials,
=======
            testimonials: testimonials.slice(0, 5),
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
            testimonials: testimonials.slice(0, 5),
>>>>>>> 8bbe4dc (First Commit)
=======
            testimonials: testimonials.slice(0, 5),
>>>>>>> origin/Budi
            unggulan,
            jalur: jalur.slice(0, 4),
            artikel: artikel.slice(0, 4),
            prestasi: prestasi.slice(0, 4),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            dukungan,
>>>>>>> 1d241ff (ADD: transition close modal, loading fakultas; FIX: navbar;)
=======
            dukungan,
>>>>>>> 8bbe4dc (First Commit)
=======
            dukungan,
>>>>>>> origin/Budi
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};