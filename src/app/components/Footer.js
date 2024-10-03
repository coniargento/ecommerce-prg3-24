import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-container bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-12 gap-8">

        {/* sección: contacto */}
        <div className="contact-section col-span-12 md:col-span-4 flex flex-col items-start">
          <h4 className="text-lg font-bold mb-4">Contacto</h4>
          <div className="flex items-center mb-2">
            <Image src="/imgs/icons/email.png" alt="Email" width={24} height={24} />
            <span className="ml-2">cococlay@ceramica.com</span>
          </div>
          <div className="flex items-center">
            <Image src="/imgs/icons/phone.png" alt="Teléfono" width={24} height={24} />
            <span className="ml-2">+54 11 xxxx-xxxx</span>
          </div>
          {/* Medios de pago debajo de la sección de contacto */}
          <div className="payment-methods mt-6">
            <Image src="/imgs/pagos.png" alt="Medios de Pago" width={150} height={30} />
          </div>
        </div>

        {/* seccion: redes Sociales */}
        <div className="social-section col-span-12 md:col-span-4 flex flex-col items-center">
          <h4 className="text-lg font-bold mb-4">Seguinos</h4>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        {/* seccion: enlaces Rápidos */}
        <div className="quick-links col-span-12 md:col-span-4 flex flex-col items-start">
          <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
          <Link href="/productos" legacyBehavior>
            <a className="hover:underline">PRODUCTOS</a>
          </Link>
          <Link href="/cuidados" legacyBehavior>
            <a className="hover:underline">CUIDADOS</a>
          </Link>
          <Link href="/cambios" legacyBehavior>
            <a className="hover:underline">CAMBIOS</a>
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


