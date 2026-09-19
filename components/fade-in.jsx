'use client';

import {useEffect, useRef, useState} from 'react';

/**
 * Scroll-triggered reveal. `as` swaps the element (e.g. 'li'), `immediate` skips the
 * observer and reveals on mount after `delay` ms (used for the staggered hero).
 */
export default function FadeIn({as: Tag = 'div', children, className = '', delay = 0, immediate = false, ...rest}) {
	const [shown, setShown] = useState(false);
	const [done, setDone] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce || !('IntersectionObserver' in window)) {
			setShown(true);
			setDone(true);
			return;
		}

		let timer;
		const reveal = () => {
			timer = setTimeout(() => setShown(true), delay);
		};

		if (immediate) {
			reveal();
			return () => clearTimeout(timer);
		}

		const el = ref.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					reveal();
					observer.disconnect();
				}
			},
			{threshold: 0.12, rootMargin: '0px 0px -8% 0px'},
		);
		observer.observe(el);
		return () => {
			observer.disconnect();
			clearTimeout(timer);
		};
	}, [delay, immediate]);

	// After the entrance finishes, drop the slow reveal transition so hover states stay snappy.
	useEffect(() => {
		if (!shown || done) return;
		const timer = setTimeout(() => setDone(true), 800);
		return () => clearTimeout(timer);
	}, [shown, done]);

	return (
		<Tag
			className={`reveal ${shown ? 'in' : ''} ${done ? 'done' : ''} ${className}`}
			ref={ref}
			{...rest}>
			{children}
		</Tag>
	);
}
