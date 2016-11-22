export const concatClassNames = (addClassName, ...classNames) => {
	return classNames.concat(addClassName).join(' ');
}

export const getUserImage = (imgName) => {
	if (imgName) {
		return `./images/${imgName}.svg`;
	}
}

export const copy = (source) => {
  if (Array.isArray(source)) {
    return Object.assign({}, ...source);
  } else {
    return Object.assign({}, source);
  }
}
