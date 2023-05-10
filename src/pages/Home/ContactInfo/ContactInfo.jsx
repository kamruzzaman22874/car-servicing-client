import { FcOvertime } from 'react-icons/fc';
import { FiPhoneForwarded } from 'react-icons/fi';
import { FaMapMarkerAlt } from 'react-icons/fa';
const ContactInfo = () => {
	return (
		<div className='bg-[#151515] flex justify-evenly rounded py-12 my-12'>
			<div className='flex items-center'>
				<FcOvertime className='text-3xl mr-5'></FcOvertime>
				<span className='text-white'>
					<p>
						<small>We are open monday-friday</small>
					</p>
					<h2 className='text-xl'>7:00 am - 9:00 pm</h2>
				</span>
			</div>
			<div className='flex items-center text-white'>
				<FiPhoneForwarded className='text-2xl mr-5'></FiPhoneForwarded>
				<span className='text-white'>
					<p className='ml-2'>
						<small>Have a question?</small>
					</p>
					<h2 className='text-xl'>+8801989214721</h2>
				</span>
			</div>
			<div className='flex items-center text-white'>
				<FaMapMarkerAlt className='text-2xl mr-5'></FaMapMarkerAlt>
				<span>
					<p>
						<small>Need a repair? our address</small>
					</p>
					<h2 className='text-xl'>Uttara, Dhaka</h2>
				</span>
			</div>
		</div>
	);
};

export default ContactInfo;
