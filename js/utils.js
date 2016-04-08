export const concatClassNames = (addClassName, ...classNames) => {
	return classNames.concat(addClassName).join(' ');
}

export const getUserImage = (imgName) => {
	if (imgName) {
		return `./images/${imgName}.svg`;
	}
}