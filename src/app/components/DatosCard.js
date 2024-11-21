import Image from 'next/image';
import Link from 'next/link';

const DatosCard = ({ item }) => {
  return (
    <div className='card flex items-center'>
      <h1 className='categoria'>{item.category}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default DatosCard;