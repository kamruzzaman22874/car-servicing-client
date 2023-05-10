import img1 from '../../../assets/icons/group.svg';
import img2 from '../../../assets/icons/deliveryt.svg';
import img3 from '../../../assets/icons/person.svg';
import img4 from '../../../assets/icons/Wrench.svg';
import img5 from '../../../assets/icons/check.svg';
import img6 from '../../../assets/icons/quote.svg';
import TitleSection from '../../sharedPages/TitleSection';

const Features = () => {
	return (
		<div>
			<TitleSection
				heading='Core Features'
				title='Why Choose Us'></TitleSection>
			<div className='flex justify-between mb-20'>
				<div className='border border-1 flex justify-center rounded'>
					<div className='flex flex-col items-center p-5'>
						<img src={img1} alt='' className='' />
						<p>Expert Team</p>
					</div>
				</div>
				<div className='border border-1 flex justify-center rounded bg-orange-400'>
					<div className='flex flex-col items-center p-5'>
						<img src={img2} alt='' className='' />
						<p>Timely Delivery</p>
					</div>
				</div>
				<div className='border border-1 flex justify-center rounded'>
					<div className='flex flex-col items-center p-5'>
						<img src={img3} alt='' className='' />
						<p>24/7 Support</p>
					</div>
				</div>
				<div className='border border-1 flex justify-center rounded'>
					<div className='flex flex-col items-center p-5'>
						<img src={img4} alt='' className='' />
						<p>Best Equipment</p>
					</div>
				</div>
				<div className='border border-1 flex justify-center rounded'>
					<div className='flex flex-col items-center p-5'>
						<img src={img5} alt='' className='' />
						<p>100% Guaranty</p>
					</div>
				</div>
				<div className='border border-1 flex justify-center rounded'>
					<div className='flex flex-col items-center p-5'>
						<img src={img1} alt='' className='' />
						<p>Expert Team</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
