'use client';

import {useEffect, useRef, useState} from 'react';

const rand = (min, spread) => min + Math.random() * spread;

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Types `text` out once, terminal style. Renders the full text without motion. */
export function Typed({text, className}) {
	const [out, setOut] = useState(text);

	useEffect(() => {
		if (reducedMotion()) return;

		let i = 0;
		let timer;
		const type = () => {
			setOut(text.slice(0, i));
			if (i++ < text.length) timer = setTimeout(type, rand(45, 40));
		};
		type();
		return () => clearTimeout(timer);
	}, [text]);

	return <span className={className}>{out}</span>;
}

/**
 * Types each word, holds, erases, then moves to the next. With `startInView` it waits until
 * the element scrolls into view. Renders the first word statically without motion.
 */
export function Cycle({
	words,
	as: Tag = 'span',
	className,
	startDelay = 0,
	startInView = false,
	hold = 2000,
	type: typeSpeed = [60, 40],
	erase: eraseSpeed = [30, 20],
	blankInitially = true,
}) {
	const [text, setText] = useState(blankInitially ? '' : words[0]);
	const ref = useRef(null);

	useEffect(() => {
		if (reducedMotion()) {
			setText(words[0]);
			return;
		}

		let timer;
		let observer;
		let wordIndex = 0;
		let charIndex = 0;
		let erasing = false;

		const tick = () => {
			const word = words[wordIndex];
			if (!erasing) {
				setText(word.slice(0, ++charIndex));
				if (charIndex === word.length) {
					erasing = true;
					timer = setTimeout(tick, hold);
					return;
				}
				timer = setTimeout(tick, rand(...typeSpeed));
			} else {
				setText(word.slice(0, --charIndex));
				if (charIndex === 0) {
					erasing = false;
					wordIndex = (wordIndex + 1) % words.length;
					timer = setTimeout(tick, 350);
					return;
				}
				timer = setTimeout(tick, rand(...eraseSpeed));
			}
		};
		const start = () => {
			timer = setTimeout(tick, startDelay);
		};

		if (startInView) {
			setText('');
			observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						start();
						observer.disconnect();
					}
				},
				{threshold: 0.4},
			);
			observer.observe(ref.current);
		} else {
			start();
		}

		return () => {
			clearTimeout(timer);
			observer?.disconnect();
		};
	}, [words, startDelay, startInView, hold, typeSpeed, eraseSpeed]);

	return (
		<Tag
			className={className}
			ref={ref}>
			{text}
		</Tag>
	);
}
