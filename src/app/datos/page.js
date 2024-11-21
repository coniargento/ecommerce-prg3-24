import Inner from '@/app/components/Inner';
import DatosCard from '@/app/components/DatosCard';
import { getAllFactsDB } from '@/app/actions';

export default async function DatosGrid() {
  const response = await getAllFactsDB();
  return (
    <section>
      <Inner>
        <div className='productos-ceramica'>
          {/* seccion: datos */}
          <div className='ceramica-section'>
          <h2 className='ceramica-title'>Usos y Cuidados 🡣</h2>
          <p className='ceramica-text'>Las piezas de cerámica son frágiles y requieren un manejo cuidadoso.</p>
          <p className='ceramica-text'>Para asegurar su durabilidad, sigue estas recomendaciones:</p>
          </div>
          
          <div className='grid-usos grid-cols-12'>
            {response.facts && response.facts.map((item, index) => (
              <DatosCard key={index} item={item} />
            ))}
          </div>
        </div>
        
      </Inner>
    </section>
  );
}