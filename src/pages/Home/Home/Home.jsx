import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactInfo from '../ContactInfo/ContactInfo';
import Features from '../Features/Features';
import MeetTeams from '../MeetTeams/MeetTeams';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<About></About>
			<Services></Services>
			<ContactInfo></ContactInfo>
			<Products></Products>
			<MeetTeams></MeetTeams>
			<Features></Features>
			<Testimonial></Testimonial>
		</div>
	);
};

export default Home;
