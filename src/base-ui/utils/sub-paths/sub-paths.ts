import path from 'path-browserify';

//TODO - bad name
export function subPaths(pathname: string) {
	const folders: string[] = [];

	let currentFolder = pathname;
	while (path.dirname(currentFolder) !== currentFolder) {
		//strip '.../' at the end of folder names.
		const folderName = stripTrailingSlash(currentFolder);
		folders.unshift(folderName);

		currentFolder = path.dirname(currentFolder);
	}

	//add root folder '/' or '.'
	folders.unshift(currentFolder);

	return folders;
}

function stripTrailingSlash(pathname: string) {
	if (pathname === '/') return pathname;
	return pathname.replace(/\/$/, '');
}