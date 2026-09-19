import FadeIn from '@/components/fade-in';
import {Cycle, Typed} from '@/components/typed';

const titles = ['Full-Stack Engineer', 'Node.js Developer', 'Real-Time Systems', 'IoT Platforms'];

const stats = [
	{n: '3+', k: 'Years in production'},
	{n: '40%', k: 'Latency cut'},
	{n: '99%', k: 'Uptime held'},
	{n: '4', k: 'Engineers led'},
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
					<span className='p'>:</span>~$ <Typed text='whoami --role "full-stack engineer"' />
					<span className='caret' />
				</FadeIn>
				<FadeIn
					as='h1'
					delay={440}
					immediate={true}>
					MD PARVEZ
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
					MERN <span>{'//'}</span> MEVN <span>{'//'}</span> Real-Time &amp; IoT
				</FadeIn>
				<FadeIn
					as='p'
					className='lede'
					delay={660}
					immediate={true}>
					I build and ship <b>real-time web and IoT products</b> — dependable APIs, clean data pipelines, and UI that
					stays out of the way. Most recently <b>Senior Founding Engineer at Trillectric Gridmend</b>, leading a team of
					four. Available for <b>remote, part-time, and contract</b> work.
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
