import FadeIn from '@/components/fade-in';
import {Cycle} from '@/components/typed';

const headings = [
	'AI agents that ship to production.',
	'LLMs wired into real products.',
	'From sensor streams to smart decisions.',
	'Agentic AI on solid backends.',
	"Always exploring what's next in AI.",
];

const focus = [
	'Agentic AI',
	'Gen AI & LLM Apps',
	'OpenAI & Gemini APIs',
	'OCR Automation',
	'Anomaly Detection',
	'Real-Time Systems',
	'MERN / MEVN',
	'REST & GraphQL APIs',
	'Exploring New AI Tech',
	'Team Leadership',
];

export default function About() {
	return (
		<section id='about'>
			<div className='wrap'>
				<FadeIn className='lbl'>
					<span className='num'>01</span> / About
				</FadeIn>
				<FadeIn
					as='h2'
					delay={60}>
					<Cycle
						blankInitially={false}
						hold={2400}
						startInView={true}
						type={[55, 35]}
						erase={[28, 18]}
						words={headings}
					/>
				</FadeIn>
				<div className='about-grid'>
					<FadeIn>
						<p>
							I&apos;m Parvez — a full-stack AI engineer with <b>3+ years</b> shipping production systems across the{' '}
							<b>MERN and MEVN</b> stacks. I build the AI layer and the product around it: an{' '}
							<b>anomaly-detection agent</b> for real-time sensor data, <b>OCR automation</b> on AWS Textract and
							Rekognition, <b>Gemini</b>-based geolocation extraction, and an <b>OpenAI</b>-powered content tool that
							lifted output by <b>50%</b>.
						</p>
						<p>
							Underneath the models I care about the same things on every project — dependable APIs, clean data
							pipelines, and UI that stays out of the way. I&apos;m always exploring new AI technologies and folding
							what works into real products. Currently taking on <b>remote, part-time, and contract</b> AI engineering
							work.
						</p>
					</FadeIn>
					<FadeIn
						className='focus'
						delay={80}>
						<h4>{'// Focus areas'}</h4>
						<div className='tags'>
							{focus.map((f) => (
								<span
									className='tag'
									key={f}>
									{f}
								</span>
							))}
						</div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
