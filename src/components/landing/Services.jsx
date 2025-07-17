import TagSection from "../TagSection";
import ServicesCard from "../ServicesCard";

import wordpress from "../../../public/Assets/Logo/WordpressLogo.svg";
import sekolah from "../../../public/Assets/Logo/SistemSekolah.svg";
import Ecommerce from "../../../public/Assets/Logo/Ecommerce.svg";

const Services = () => {
  return (
    <>
      <div>
        <TagSection title="Our Services" />
        <div>
          <h1 className="title"> This is Services</h1>
          <p className="subtitle">Here you can find the services we offer.</p>
        </div>
        <div>
          <div className="flex justify-center gap-10 pt-10">
            <ServicesCard
              titCol="text-white"
              descCol="text-gray-400"
              linkCol="text-[#B7FF00]"
              color="bg-[#204635]"
              src={wordpress}
              title="Wordpress"
              desc="Website cepat, ringan, dan mudah dikelola. Cocok buat portfolio, landing page, company profile, atau blog bisnismu. "
            />
            <ServicesCard
              width="70"
              height="70"
              titCol=" "
              descCol=" "
              linkCol=" "
              color="bg-[#CFFFB1]"
              src={sekolah}
              title="Sistem Sekolah"
              desc="Digitalisasi proses belajar dan administrasi sekolah dengan sistem yang rapi dan mudah digunakan."
            />
            <ServicesCard
              titCol="text-white"
              descCol="text-gray-400"
              linkCol="text-[#B7FF00]"
              color="bg-[#204635]"
              src={Ecommerce}
              title="E-Commerce"
              desc="Bangun toko online yang siap jualan. Fitur lengkap: katalog produk, keranjang belanja, pembayaran, laporan penjualan, dan notifikasi otomatis. "
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
