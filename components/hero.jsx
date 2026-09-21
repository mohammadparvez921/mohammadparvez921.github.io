import FadeIn from '@/components/fade-in';
import {Cycle, Typed} from '@/components/typed';

const titles = [
	'Full-Stack AI Engineer',
	'MVP Specialist',
	'Agentic AI',
	'Gen AI',
	'Exploring AI Technologies',
	'Real-Time Systems',
];

const stats = [
	{n: '3+', k: 'Years in production'},
	{n: '25K', k: 'Smart meters in pipeline'},
	{n: '1.2M', k: 'Data packets per day'},
	{n: '+50%', k: 'AI content output'},
];

export default function Hero() {
	return (
		<header
			className='hero'
			id='top'>
			<div className='wrap'>
				<FadeIn
					className='status'
					delay={220}
					immediate={true}>
					<span className='pulse' /> System online · open to remote &amp; part-time
				</FadeIn>
				<FadeIn
					className='term'
					delay={330}
					immediate={true}>
					<span className='u'>parvez@fullstack</span>
					<span className='p'>:</span>~$ <Typed text='whoami --role "full-stack ai engineer"' />
					<span className='caret' />
				</FadeIn>
				<FadeIn
					as='h1'
					delay={440}
					immediate={true}>
					MOHAMMAD
					<br />
					PARVEZ
					<Cycle
						className='l2'
						startDelay={1400}
						words={titles}
					/>
				</FadeIn>
				<FadeIn
					className='role'
					delay={550}
					immediate={true}>
					Software <span>{'//'}</span> DevOps <span>{'//'}</span> Applied AI
				</FadeIn>
				<FadeIn
					as='p'
					className='lede'
					delay={660}
					immediate={true}>
					I design <b>data-heavy systems</b> and build <b>AI-powered products</b> on top of them —{' '}
					<b>agentic systems</b>, <b>LLM integrations</b>, and the real-time backends they run on. Currently building an{' '}
					<b>anomaly-detection AI agent</b> as <b>Senior Founding Engineer at Trillectric Gridmend</b>. Available for{' '}
					<b>remote, part-time, and contract</b> AI engineering work.
				</FadeIn>
				<FadeIn
					className='cta'
					delay={770}
					immediate={true}>
					<a
						className='btn primary'
						href='#contact'>
						Get in touch →
					</a>
					<a
						className='btn'
						href='#projects'>
						View projects
					</a>
					<a
						className='btn'
						href='/resume.pdf'
						rel='noopener noreferrer'
						target='_blank'>
						Résumé ↗
					</a>
				</FadeIn>
				<FadeIn
					className='stats'
					delay={880}
					immediate={true}>
					{stats.map((s) => (
						<div
							className='stat'
							key={s.k}>
							<div className='n'>{s.n}</div>
							<div className='k'>{s.k}</div>
						</div>
					))}
				</FadeIn>
			</div>
		</header>
	);
}
