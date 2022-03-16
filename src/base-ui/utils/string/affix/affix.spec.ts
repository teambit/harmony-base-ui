import { affix } from './affix';

it('should prepend', () => {
	const result = affix('?q=', 'cats');

	expect(result).toEqual('?q=cats');
});

it('should append', () => {
	const result = affix(undefined, 'cats', '!');

	expect(result).toEqual('cats!');
});

it('should append and prepend', () => {
	const result = affix('?q=', 'cats', '!');

	expect(result).toEqual('?q=cats!');
});

it('should return empty string when subject is empty', () => {
	const result = affix('?q=', '', '!');

	expect(result).toEqual('');
});

it('should return empty string when subject is undefined', () => {
	const result = affix('?q=', undefined, '!');

	expect(result).toEqual('');
});
