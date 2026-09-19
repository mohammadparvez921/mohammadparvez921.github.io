import About from '@/components/about';
import Contact from '@/components/contact';
import Details from '@/components/details';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Nav from '@/components/nav';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export const meta = {
	base: 'https://mohammadparvez921.github.io',
	url: 'https://mohammadparvez921.github.io',
	title: 'Md Parvez Alam Khan – Full-Stack AI Engineer',
	description:
		'Full-stack AI engineer with 3+ years building real-time web, IoT, and AI products with Node.js, React, Vue, and MongoDB. Open to remote, part-time, and contract roles.',
};

export const metadata = {
	metadataBase: new URL(meta.base),
	alternates: {canonical: meta.url},
	title: meta.title,
	description: meta.description,

	openGraph: {
		title: meta.title,
		description: meta.description,
		url: meta.url,
		siteName: 'Md Parvez Alam Khan',
		type: 'website',
	},

	icons: {
		icon: '/meta/favicon.svg',
		shortcut: '/meta/favicon.svg',
	},
};

export const viewport = {
	themeColor: '#08090a',
};

export default function Home() {
	return (
		<>
			<Nav />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Skills />
			<Details />
			<Contact />
			<Footer />
		</>
	);
}
