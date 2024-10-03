import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ item }) => {
  return (
    <div className='card flex items-center'>
      <Image className='img'
        src={`/imgs/products/${item.image}`}
        alt={item.name}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
      />
      <h3 className='my-4'>{item.name}</h3>
      <p>${item.price}</p>
      <Link className='btn' href={`/product/${item._id}`}>
        Ver en detalle
      </Link>
    </div>
  );
};

export default ProductCard;

