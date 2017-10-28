
export const sanitizeInput = (input) => {
	return input.replace(/[^\w\s-]/ig, '');
}