import { Rating } from '@smastrom/react-rating';

const ProductsData = ({ image, rating, title, price }) => {
	return (
		<div className=''>
			<div className='card h-[430px] bg-base-100 shadow-xl p-6'>
				<figure className='px-10 pt-10 bg-slate-400'>
					<img src={image} alt='Shoes' className='rounded-xl h-[200px] ' />
				</figure>
				<div className='card-body items-center text-center'>
					<Rating style={{ maxWidth: 100 }} value={rating} readOnly></Rating>
					<p>{title}</p>
					<p>{price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductsData;
