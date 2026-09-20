import FadeIn from '@/components/fade-in';

const groups = [
	{
		title: 'AI & LLMs',
		items: ['Agentic AI', 'Gen AI', 'OpenAI API', 'Gemini API', 'AWS Textract', 'AWS Rekognition', 'Anomaly detection'],
		wide: true,
	},
	{
		title: 'Frontend',
		items: ['React.js', 'Vue.js', 'Next.js', 'Nuxt.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'HTML5 / CSS3'],
	},
	{
		title: 'Backend',
		items: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'Socket.io', 'Keystone.js', 'JWT'],
	},
	{
		title: 'Data & Systems',
		items: [
			'ClickHouse',
			'Apache Airflow',
			'AWS Athena',
			'Data pipelines',
			'MongoDB',
			'Mongoose',
			'MySQL',
			'IoT / Modbus',
			'Real-time streams',
		],
	},
	{
		title: 'Cloud & DevOps',
		items: ['Docker', 'AWS Lambda', 'AWS IoT Core', 'Amazon S3', 'GCP', 'Nginx', 'CI/CD', 'Git'],
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
