import FadeIn from '@/components/fade-in';

const items = [
	{label: 'Education', value: 'B.Tech, Jamia Millia Islamia — CGPA 8.7 (2019–2023)'},
	{label: 'Location', value: 'India · open to remote-first teams worldwide'},
	{label: 'Availability', value: 'Open to part-time / contract engagements, flexible hours'},
];

export default function Details() {
	return (
		<section id='details'>
			<div className='wrap'>
				<FadeIn className='lbl'>
					<span className='num'>05</span> / Details
				</FadeIn>
				<FadeIn
					as='h2'
					delay={60}>
					The essentials.
				</FadeIn>
				<div className='certs'>
					{items.map((item, i) => (
						<FadeIn
							className='cert'
							delay={i * 60}
							key={item.label}>
							<div className='cd'>{item.label}</div>
							<div className='cn'>{item.value}</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
