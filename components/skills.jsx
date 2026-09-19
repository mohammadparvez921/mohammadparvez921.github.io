import FadeIn from '@/components/fade-in';

const groups = [
	{
		title: 'Frontend',
		items: ['React.js', 'Vue.js', 'Next.js', 'Nuxt.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'HTML5 / CSS3'],
	},
	{
		title: 'Backend',
		items: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'Socket.io', 'Keystone.js', 'JWT'],
	},
	{
		title: 'Data',
		items: ['MongoDB', 'Mongoose', 'MySQL'],
	},
	{
		title: 'Cloud & DevOps',
		items: ['Docker', 'AWS Lambda', 'AWS IoT Core', 'GCP', 'Nginx', 'CI/CD', 'Git'],
	},
	{
		title: 'Systems & AI',
		items: ['IoT / Modbus', 'Real-time streams', 'OpenAI API', 'Gemini API', 'Agentic AI', 'AWS Textract/Rekognition'],
		wide: true,
	},
];

export default function Skills() {
	return (
		<section id='skills'>
			<div className='wrap'>
				<FadeIn className='lbl'>
					<span className='num'>04</span> / Skills
				</FadeIn>
				<FadeIn
					as='h2'
					delay={60}>
					The toolkit.
				</FadeIn>
				<div className='arsenal'>
					{groups.map((g, i) => (
						<FadeIn
							className='kit'
							delay={i * 60}
							key={g.title}
							style={g.wide ? {gridColumn: '1 / -1'} : undefined}>
							<h4>{g.title}</h4>
							<div className='chips'>
								{g.items.map((item) => (
									<span
										className='chip'
										key={item}>
										{item}
									</span>
								))}
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
