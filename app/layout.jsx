import '@/app/globals.css';
import {Analytics} from '@vercel/analytics/next';
import {Hanken_Grotesk, JetBrains_Mono, Syne} from 'next/font/google';

import Cursor from '@/components/cursor';

const syne = Syne({
	subsets: ['latin'],
	weight: ['600', '700', '800'],
	variable: '--font-syne',
});

const hanken = Hanken_Grotesk({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-hanken',
});

const mono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-mono',
});

export default function RootLayout({children}) {
	return (
		<html
			className={`${syne.variable} ${hanken.variable} ${mono.variable}`}
			lang='en'>
			<body suppressHydrationWarning>
				<noscript>
					<style>{'.reveal{opacity:1;transform:none}'}</style>
				</noscript>
				<div className='grid-bg' />
				<div className='glow' />
				<div className='grain' />
				<Cursor />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
