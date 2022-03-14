import {useRef, useEffect} from 'react';
import {Fn} from './typings';
import {noop, notNil} from './utils';

export function useInterval(callback: Fn, delay: number | null) {
	const savedCallback = useRef<Fn>();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current?.();
		}
		if (notNil(delay)) {
			const id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
		return noop;
	}, [delay]);
}
