function captalizeFirstLetter(value: string): string {
  return value
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLocaleLowerCase())
    .join(' ');
}

export const stringsUtils = {
  captalizeFirstLetter,
};
