import FadeIn from '@/components/fade-in';

const links = [
	{label: 'Email', href: 'mailto:mohammad.parvez.tech@gmail.com'},
	{label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammad-parvez-921-in/'},
	{label: 'GitHub', href: 'https://github.com/mohammadparvez921'},
	{label: 'WhatsApp', href: 'https://wa.me/917078356834'},
	{label: 'Résumé', href: '/resume.pdf'},
];

export default function Contact() {
	return (
		<section
			className='contact'
			id='contact'>
			<div className='wrap'>
				<FadeIn
					className='lbl'
					style={{justifyContent: 'center'}}>
					<span className='num'>06</span> / Contact
				</FadeIn>
				<FadeIn
					as='h2'
					delay={60}>
					Let&apos;s build
					<br />
					something real.
				</FadeIn>
				<FadeIn
					as='p'
					className='sub'
					delay={100}>
					Open to remote and part-time roles, freelance contracts, or a quick chat about your stack. My inbox is always
					open.
				</FadeIn>
				<FadeIn
					className='socials'
					delay={140}>
					{links.map((link) => (
						<a
							href={link.href}
							key={link.label}
							rel='noopener noreferrer'
							target={link.href.startsWith('mailto:') ? undefined : '_blank'}>
							{link.label} ↗
						</a>
					))}
				</FadeIn>
			</div>
		</section>
	);
}
