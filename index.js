const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (data) => {
  function modifiedWord (words) {
    const newWord = words[0].toUpperCase() + words.slice(1)
    return newWord
  } 

  const iTitles = tutorials.map( (titles) => titles.split(" "))
  
  const uppedCase = iTitles.map( (array) => array.map( (word) => word = modifiedWord(word)))
  const answerArray = uppedCase.map( wordSoup => wordSoup.join(" "))
  return answerArray
}

titleCased(tutorials)