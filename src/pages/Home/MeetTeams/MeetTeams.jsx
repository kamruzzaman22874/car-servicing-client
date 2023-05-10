import TitleSection from '../../sharedPages/TitleSection';
import image1 from '../../../assets/images/team/1.jpg';
import image2 from '../../../assets/images/team/2.jpg';
import image3 from '../../../assets/images/team/3.jpg';

const MeetTeams = () => {
	return (
		<div>
			<div>
				<TitleSection heading='Team' title='Meet Our Team'></TitleSection>
			</div>
			<div>
				<div className='carousel w-full'>
					<div id='slide5' className='carousel-item relative w-full'>
						<img src={image1} className='w-full h-[400px]' />
						<div className='absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2'>
							<a href='#slide4' className='btn btn-circle'>
								❮
							</a>
							<a href='#slide6' className='btn btn-circle'>
								❯
							</a>
						</div>
					</div>
					<div id='slide6' className='carousel-item relative w-full'>
						<img src={image2} className='w-full h-[400px]' />
						<div className='absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2'>
							<a href='#slide5' className='btn btn-circle'>
								❮
							</a>
							<a href='#slide7' className='btn btn-circle'>
								❯
							</a>
						</div>
					</div>
					<div id='slide7' className='carousel-item relative w-full'>
						<img src={image3} className='w-full h-[400px]' />
						<div className='absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2'>
							<a href='#slide6' className='btn btn-circle'>
								❮
							</a>
							<a href='#slide5' className='btn btn-circle'>
								❯
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MeetTeams;
