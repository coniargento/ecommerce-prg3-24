import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard';
import { getAllProducts, getAllProductsDB } from '@/app/actions';

export default async function ProductsGrid() {
  const response = await getAllProductsDB();
  return (
    <section>
      <Inner>
        {/* Sección: colecciones*/}
        <div className='full-width-bg'>
          <div className='container flex-container'>
            <h2 className='titulo-colecciones'>nuestras<br />colecciones 🡣</h2>
            <p className='texto-colecciones'>Cada colección evoca un sentimiento<br />e implica una técnica diferente.<br />
            Equipá todo tu hogar con una <br />misma impronta de diseño.</p>
          </div>
        </div>
        
        <div className='productos'>
          {/* Sección: productos */}
          <div className='full-width-productos'>
          <h2 className='titulo-productos'>Nuestros<br />productos 🡣</h2>
          <p className='texto-productos'>
            Nuestros productos de cerámica<br />artesanal combinan belleza,<br />durabilidad y diseño único para tu hogar.
          </p>
          </div>
          
          <div className='grid grid-cols-12'>
            {response.products && response.products.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </div>
        
      </Inner>
    </section>
  );
}