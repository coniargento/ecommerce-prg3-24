'use client';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa'; // icono de WhatsApp

export default function Navbar() {
  const { cartLenghtFunc } = useAppContext();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // animacion tira de frases
  useEffect(() => {
    const marqueeText = document.querySelector('.marquee-text');
    let startPos = window.innerWidth;
    let currentPos = startPos;

    function animateMarquee() {
      currentPos -= 5; // velocidad del movimiento
      if (currentPos < -marqueeText.offsetWidth) {
        currentPos = startPos; // resetea la posición cuando termina el ciclo
      }
      marqueeText.style.transform = `translateX(${currentPos}px)`;
      requestAnimationFrame(animateMarquee);
    }

    animateMarquee();
  }, []);

  return (
    <>
      <header>
        {/* frases animadas */}
        <div className="marquee-container p-2 overflow-hidden">
          <div className="marquee">
            <span className="marquee-text inline-block whitespace-nowrap">
            3 6 & 9 CUOTAS SIN INTERÉS   |   20% OFF POR TRANSFERENCIA   |   ENVÍOS A TODO EL PAÍS   |   HECHO A MANO
            </span>
          </div>
        </div>

        {/* navbar */}
        <div className='flex justify-between items-center h-20 bg-pink-400 text-white px-10'>
          <Link href={`/`}>
            <Image className='logo' src={`/imgs/logo.png`} width={70} height={70} alt='Logo' />
          </Link>
          <nav>
            <ul className='flex justify-center items-center gap-5'>
              <li>
                <Link href={`/`}>HOME</Link>
              </li>
              
              <li>
                <Link href={`/productos`}>PRODUCTOS</Link>
              </li>

              <li>
                <Link href={`/cuidados`}>CUIDADOS</Link>
              </li>
              <li>
                <Link href={`/cambios`}>CAMBIOS</Link>
              </li>
            </ul>
          </nav>

          <Link href={`/cart`}>
            <div className='relative'>
              <FaCartShopping size={30} />
              {cartLenghtFunc() > 0 && (
                <span className='absolute top-5 left-5 flex items-center justify-center bg-black text-white rounded-full w-2 h-4 p-4 text-sm'>
                  {cartLenghtFunc()}
                </span>
              )}
            </div>
          </Link>
        </div>
      </header>

      {/* boton WhatsApp */}
      <a
        href="https://wa.me/5491166232603" // el link que te lleva al numero que quieras
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} />
      </a>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 20px;
          right: 20px;
          background-color: #25d366;
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
          z-index: 100;
          transition: transform 0.3s ease-in-out;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}


