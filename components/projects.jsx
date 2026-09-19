import FadeIn from '@/components/fade-in';

const projects = [
	{
		title: 'Real-Time Solar Monitoring Platform',
		description:
			'Full-stack MERN system with Modbus IoT sensors over Socket.io, Chart.js dashboards, and AWS Textract/Rekognition + Gemini for automated data enrichment.',
		stack: ['Node.js', 'React.js', 'Socket.io', 'Modbus', 'AWS', 'Chart.js'],
		impact: '40% lower latency · 99% uptime',
		featured: true,
	},
	{
		title: 'AI-Powered Blog Writer',
		description:
			'Prompt-driven content tool built on the OpenAI API with direct WordPress publishing and input validation.',
		stack: ['Node.js', 'OpenAI API', 'WordPress API'],
		impact: '+50% output · −80% input errors',
	},
	{
		title: 'Short-Video Streaming App',
		description:
			'Mobile streaming app with real-time comments, deep linking, and reactions on a secured GraphQL layer.',
		stack: ['Vue.js', 'GraphQL', 'Cordova'],
		impact: '+40% onboarding efficiency',
	},
	{
		title: 'Import–Export Management Platform',
		description:
			'MongoDB schemas with Mongoose pre-/post-hooks for validation automation, backing a modular Vue.js dashboard.',
		stack: ['Vue.js', 'MongoDB', 'Mongoose'],
		impact: '−60% manual data entry',
	},
];

export default function Projects() {
	return (
		<section id='projects'>
			<div className='wrap'>
				<FadeIn className='lbl'>
					<span className='num'>03</span> / Projects
				</FadeIn>
				<FadeIn
					as='h2'
					delay={60}>
					Built for real users.
				</FadeIn>
				<div className='cards'>
					{projects.map((p, i) => (
						<FadeIn
							className={`card ${p.featured ? 'feature' : ''}`}
							delay={i * 60}
							key={p.title}>
							<div className='kk'>{p.impact}</div>
							<h3>{p.title}</h3>
							<p>{p.description}</p>
							<div className='chips'>
								{p.stack.map((s) => (
									<span
										className='chip'
										key={s}>
										{s}
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
