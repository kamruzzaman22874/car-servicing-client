const TitleSection = ({heading , title}) => {
	return (
		<div className='mt-12 my-12'>
			<div className='text-center space-y-3'>
                <p className='text-2xl text-orange-600'>{heading}</p>
                <h2 className='text-5xl'>{title}</h2>
				<p>
					the majority have suffered alteration in some form, by injected
					humour, or randomised <br /> words which do not look even slightly
					believable.
				</p>
			</div>
		</div>
	);
};

export default TitleSection;
