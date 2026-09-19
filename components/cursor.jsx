'use client';

import {useEffect, useRef} from 'react';

const HOVERABLE = 'a,button,.tag,.chip,.kit,.card,.cert';
const RING_EASE = 0.35;

export default function Cursor() {
	const ringRef = useRef(null);
	const dotRef = useRef(null);

	useEffect(() => {
		const finePointer = window.matchMedia('(pointer:fine)').matches;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (!finePointer || reduce) return;

		const ring = ringRef.current;
		const dot = dotRef.current;
		document.body.classList.add('has-cursor');

		let x = 0;
		let y = 0;
		let cx = 0;
		let cy = 0;
		let frame = 0;
		let visible = false;

		const show = () => {
			if (visible) return;
			visible = true;
			ring.classList.add('on');
			dot.classList.add('on');
		};
		const hide = () => {
			visible = false;
			ring.classList.remove('on', 'hov', 'down');
			dot.classList.remove('on');
		};

		// The ring eases toward the pointer and stops animating once it catches up.
		const loop = () => {
			cx += (x - cx) * RING_EASE;
			cy += (y - cy) * RING_EASE;
			ring.style.transform = `translate3d(${cx}px,${cy}px,0)`;
			frame = Math.abs(x - cx) + Math.abs(y - cy) > 0.1 ? requestAnimationFrame(loop) : 0;
		};

		const onMove = (e) => {
			x = e.clientX;
			y = e.clientY;

			// The dot sits exactly on the pointer, so aiming stays precise.
			dot.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;

			if (!visible) {
				// First move (or re-entry): snap the ring to the pointer instead of flying in.
				cx = x;
				cy = y;
				show();
			}
			if (!frame) frame = requestAnimationFrame(loop);

			// Hover glow on skill cards follows the pointer.
			const kit = e.target.closest?.('.kit');
			if (kit) kit.style.setProperty('--mx', `${x - kit.getBoundingClientRect().left}px`);
		};
		const onOver = (e) => {
			if (e.target.closest?.(HOVERABLE)) ring.classList.add('hov');
		};
		const onOut = (e) => {
			if (e.target.closest?.(HOVERABLE)) ring.classList.remove('hov');
		};
		const onDown = () => ring.classList.add('down');
		const onUp = () => ring.classList.remove('down');

		document.addEventListener('mousemove', onMove);
		document.addEventListener('mouseover', onOver);
		document.addEventListener('mouseout', onOut);
		document.addEventListener('mousedown', onDown);
		document.addEventListener('mouseup', onUp);
		document.documentElement.addEventListener('mouseleave', hide);

		return () => {
			document.body.classList.remove('has-cursor');
			document.removeEventListener('mousemove', onMove);
			document.removeEventListener('mouseover', onOver);
			document.removeEventListener('mouseout', onOut);
			document.removeEventListener('mousedown', onDown);
			document.removeEventListener('mouseup', onUp);
			document.documentElement.removeEventListener('mouseleave', hide);
			cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<>
			<div
				aria-hidden='true'
				className='cursor'
				ref={ringRef}>
				<div className='ring' />
			</div>
			<div
				aria-hidden='true'
				className='cursor-dot'
				ref={dotRef}
			/>
		</>
	);
}
