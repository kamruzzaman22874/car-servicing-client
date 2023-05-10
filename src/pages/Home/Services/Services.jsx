import { useEffect } from 'react';
import { useState } from 'react';
import TitleSection from '../../sharedPages/TitleSection';
import ServiceCard from './ServiceCard';

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/services')
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div className='mt-4 my-12'>
			<TitleSection heading='Our Services' title='Our Service Area'></TitleSection>
			<div className='grid grid-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{services.map((service) => (
					<ServiceCard key={service._id} service={service}></ServiceCard>
				))}
			</div>

			<div className='text-center my-8'>
				<button className='btn btn-outline btn-warning'>More Services</button>
			</div>
		</div>
	);
};

export default Services;
