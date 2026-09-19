import FadeIn from '@/components/fade-in';

const roles = [
	{
		company: 'Trillectric Gridmend Pvt. Ltd.',
		role: 'Senior Founding Engineer',
		period: 'Sep 2024 – Present',
		location: 'Remote, India',
		highlights: [
			'Currently developing an AI agent for anomaly detection to identify sensor failures, production outliers, and data inconsistencies in real-time streams.',
			'Built AI-powered enhancements: AWS Textract/Rekognition for OCR-driven automation and Gemini-based geolocation extraction to enrich real-time analytics.',
			'Engineered a real-time solar monitoring platform (MERN + Cordova), ingesting Modbus IoT sensor data over Socket.io — cut data latency by 40% and held 99% uptime in production.',
			'Led a team of 4 engineers to architect scalable REST & GraphQL APIs on Node.js/Express.js.',
		],
	},
	{
		company: 'Codalien Technologies',
		role: 'Software Engineer',
		period: 'Sep 2023 – Sep 2024',
		location: 'New Delhi, India',
		highlights: [
			'Shipped an AI-powered blog writer — a prompt-driven tool on the OpenAI API with WordPress publishing — content output up 50%, input errors down 80%.',
			'Architected an influencer-marketing backend on MongoDB aggregation pipelines (+40% query performance) with Nuxt.js/Vue.js watchers (−25% UI latency).',
			'Designed an import–export platform with Mongoose validation hooks and a Vue.js dashboard — manual data entry down 60%.',
			'Launched a short-video streaming app (Vue.js, GraphQL, Cordova) with real-time comments and reactions — onboarding efficiency up 40%.',
			'Modernized an EdTech platform (React.js, Redux), cutting post-release defects by 20% and integration time by 30%.',
		],
	},
	{
		company: 'Easexpense',
		role: 'Full Stack Developer',
		period: 'Feb 2023 – Sep 2023',
		location: 'Noida, India',
		highlights: [
			'Built a responsive React.js UI (+40% usability) with optimized MySQL schemas and REST APIs on Node.js/Express.js — load time down 30%.',
		],
	},
];

export default function Experience() {
	return (
		<section id='experience'>
			<div className='wrap'>
				<FadeIn className='lbl'>
					<span className='num'>02</span> / Experience
				</FadeIn>
				<FadeIn
					as='h2'
					delay={60}>
					Where I&apos;ve shipped.
				</FadeIn>
				<div className='xp'>
					{roles.map((r) => (
						<FadeIn
							className='job'
							key={r.company}>
							<div className='when'>
								{r.period} · {r.location}
							</div>
							<h3>{r.role}</h3>
							<div className='org'>{r.company}</div>
							<ul>
								{r.highlights.map((h) => (
									<li key={h}>{h}</li>
								))}
							</ul>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
