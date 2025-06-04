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

export const fetchAllData = () => {
  return {
    slider: SliderService.getAllSlider(),
    about: AboutService.getAllAbouts(),
    partner: PartnerService.getAllPartner(),
    testimonials: TestimoniService.getTestimoniHome(),
    unggulan: UnggulanService.getAllUnggulan(),
    jalur: RegistrasiService.getAllRegistrasi(),
    artikel: BeritaService.getAllBerita().then(artikel => artikel.slice(0, 4)),
    prestasi: PrestasiService.getAllPrestasi().then(prestasi => prestasi.slice(0, 6)),
    dukungan: DukunganService.getAllDukungan(),
    organisasi: OrganisasiService.getAllOrganisasi()
  };
};