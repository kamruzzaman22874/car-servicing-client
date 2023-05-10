import { Rating } from '@smastrom/react-rating';
import { FaShoppingBag } from 'react-icons/fa';

const ProductsData = ({ image, rating, title, price }) => {
	return (
		<div className=''>
			<div className='card h-[430px] bg-base-100 shadow-xl p-6 relative group'>
				<div className='text-3xl text-orange-600 bg-white p-2 rounded absolute right-12 top-16 hidden group-hover:block'>
					<FaShoppingBag></FaShoppingBag>
				</div>
				<div className='group'>
					<figure className='px-10 pt-10 bg-[#F3F3F3] rounded'>
						<img src={image} alt='Shoes' className='rounded-xl h-[200px]' />
					</figure>
				</div>
				<div className='card-body items-center text-center'>
					<Rating style={{ maxWidth: 100 }} value={rating} readOnly></Rating>
					<p className='text-lg font-bold'>{title}</p>
					<p className='text-orange-600 font-bold'>Price: {price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductsData;
