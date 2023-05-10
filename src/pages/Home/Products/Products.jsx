import TitleSection from '../../sharedPages/TitleSection';
import ProductsData from './ProductsData';
import products1 from '../../../assets/images/products/1.png';
import products2 from '../../../assets/images/products/2.png';
import products3 from '../../../assets/images/products/3.png';
import products4 from '../../../assets/images/products/4.png';
import products5 from '../../../assets/images/products/5.png';
import products6 from '../../../assets/images/products/6.png';

const Products = () => {
	return (
		<div>
			<div>
				<TitleSection
					heading='Our Product'
					title='Browse Our Products'></TitleSection>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
				<ProductsData
					image={products1}
					rating={4.2}
					title='Car Engine Plug'
					price='$20.00'></ProductsData>
				<ProductsData
					image={products2}
					rating={4.0}
					title='Car Air Filter'
					price='$20.00'></ProductsData>
				<ProductsData
					image={products3}
					rating={4.3}
					title='Cools Led Light'
					price='$20.00'></ProductsData>
				<ProductsData
					image={products4}
					rating={5.0}
					title='Cools Led Light'
					price='$20.00'></ProductsData>
				<ProductsData
					image={products5}
					rating={3.0}
					title='Cools Led Light'
					price='$20.00'></ProductsData>
				<ProductsData
					image={products6}
					rating={4.2}
					title='Cools Led Light'
					price='$20.00'></ProductsData>
			</div>
		</div>
	);
};

export default Products;
