import FadeIn from '@/components/fade-in';
import {Cycle} from '@/components/typed';

const headings = [
	'Real-time data, dependable APIs.',
	'Shipped to real users.',
	'Clean pipelines, quiet UI.',
	'Built to hold up in production.',
];

const focus = [
	'Real-Time Systems',
	'IoT / Modbus',
	'REST & GraphQL APIs',
	'MERN / MEVN',
	'Team Leadership',
	'AI Integrations',
	'Cloud & Docker',
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
							I&apos;m Parvez — a full-stack engineer with <b>3+ years</b> shipping production systems across the{' '}
							<b>MERN and MEVN</b> stacks. Most recently I built a real-time IoT monitoring platform from the ground up:
							cutting data latency by <b>40%</b> and holding <b>99% uptime</b> while leading a team of four.
						</p>
						<p>
							I care about the same things on every project — dependable APIs, clean data pipelines, and UI that stays
							out of the way. Currently taking on <b>remote, part-time, and contract</b> work.
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
