import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
	const { title, img, price } = service;
	return (
		<div>
			<div className='card  bg-base-100 shadow-xl'>
				<figure className='px-10 pt-10'>
					<img
						src={img}
						alt='service'
						className='rounded-xl h-[200px] w-full'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{title}</h2>
					<div className='flex justify-end'>
						<p className='text-xl text-orange-500 font-bold'>Price: ${price}</p>
						<Link className='text-orange-500'>
							<FaArrowRight></FaArrowRight>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
