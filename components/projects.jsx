import FadeIn from '@/components/fade-in';

const projects = [
	{
		title: 'Anomaly-Detection AI Agent',
		description:
			'An AI agent that watches real-time sensor streams to identify sensor failures, production outliers, and data inconsistencies as they happen.',
		stack: ['Agentic AI', 'Anomaly detection', 'Real-time streams'],
		impact: 'In progress · Trillectric Gridmend',
		featured: true,
	},
	{
		title: 'Smart-Meter Data Pipeline',
		description:
			'A data-heavy system: ingests ~48 data packets per meter per day with Airflow orchestration, S3 storage, ClickHouse and Athena queries, and APIs on top.',
		stack: ['Apache Airflow', 'ClickHouse', 'AWS Athena', 'Amazon S3', 'Data pipelines', 'APIs'],
		impact: '≈25,000 meters · ≈1.2M packets a day',
		featured: true,
	},
	{
		title: 'AI-Powered Blog Writer',
		description:
			'Prompt-driven blogging tool built on the OpenAI API with direct WordPress publishing and input validation.',
		stack: ['OpenAI API', 'Node.js', 'WordPress API'],
		impact: '+50% output · −80% input errors',
	},
	{
		title: 'Real-Time Solar Monitoring Platform',
		description:
			'AWS Textract/Rekognition OCR automation and Gemini-based geolocation extraction layered onto a full-stack MERN system streaming Modbus IoT sensor data over Socket.io, with Chart.js dashboards.',
		stack: ['Gemini API', 'AWS Textract', 'Rekognition', 'Node.js', 'React.js', 'Socket.io'],
		impact: '40% lower latency · 99% uptime',
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
					AI, shipped to production.
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
