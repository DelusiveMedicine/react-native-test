export function transformFirstLetter(word) {
  let newWord;
  if (word) return (newWord = word[0].toUpperCase() + word.slice(1));
  return word;
}
