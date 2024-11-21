import Inner from '@/app/components/Inner';
import DatosCard from '@/app/components/DatosCard';
import { getAllFactsDB } from '@/app/actions';

export default async function DatosGrid() {
  const response = await getAllFactsDB();
  return (
    <section>
      <Inner>
        <div className='full-width-bg'>
          <div className='container flex-container'>
            <h2 className='titulo-colecciones'>Piezas que Hablan:<br />Cerámica con Historia y Estilo 🡣</h2>
            <p className='texto-colecciones'>Cada pieza de cerámica tiene una historia que contar, desde sus antiguos orígenes en las civilizaciones más tempranas hasta las técnicas modernas que transforman la arcilla en arte.<br />
            El proceso de creación varía según la región y la cultura, y cada estilo aporta una impronta única a tu hogar.<br />
            Ya sea que prefieras la elegancia de las cerámicas esmaltadas o la rusticidad del barro crudo, cada colección refleja la conexión profunda entre el arte, la tradición y la creatividad.</p>
          </div>
        </div>
        
        <div className='grid grid-cols-12'>
            {response.facts && response.facts.map((item, index) => (
                <DatosCard key={index} item={item} />
            ))}
        </div>
    
      </Inner>
    </section>
  );
}