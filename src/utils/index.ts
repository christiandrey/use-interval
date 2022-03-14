export function notNil<T>(value?: T | null): value is T {
	return typeof value !== 'undefined' && value !== null;
}

export const noop = (..._args: unknown[]) => {
	/** NOOP */
};
