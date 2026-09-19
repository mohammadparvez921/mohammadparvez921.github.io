'use client';

import {useEffect, useState} from 'react';

const links = [
	{href: '#about', label: 'about'},
	{href: '#experience', label: 'experience'},
	{href: '#projects', label: 'projects'},
	{href: '#skills', label: 'skills'},
	{href: '#contact', label: 'contact'},
];

export default function Nav() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener('scroll', onScroll, {passive: true});
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		if (!open) return;
		const onKeyDown = (e) => {
			if (e.key === 'Escape') setOpen(false);
		};
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [open]);

	return (
		<nav className={scrolled ? 'scrolled' : ''}>
			<div className='nav-in'>
				<a
					className='brand'
					href='#'>
					mohammad<b>Parvez</b>
				</a>
				<button
					aria-controls='nav-links'
					aria-expanded={open}
					className='nav-toggle'
					type='button'
					onClick={() => setOpen(!open)}>
					{open ? 'close' : 'menu'}
				</button>
				<div
					className={`nav-links ${open ? 'open' : ''}`}
					id='nav-links'
					onClick={(e) => e.target.tagName === 'A' && setOpen(false)}>
					{links.map((link) => (
						<a
							href={link.href}
							key={link.href}>
							{link.label}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
}
