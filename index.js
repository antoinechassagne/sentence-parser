console.info("Welcome on Sentence Parser !");

start();

/**
 * Start application.
 */
function start() {
  const { parseButton, sentenceInput } = UI();
  parseButton.addEventListener("click", render);
  sentenceInput.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
      render();
    }
  });
  render();
}

/**
 * Return the UI's elements.
 */
function UI() {
  return {
    sentenceInput: document.querySelector("#sentenceInput"),
    parseButton: document.querySelector("#parseButton"),
    parsingResult: document.querySelector("#parsingResult"),
  };
}

/**
 * Render the parsing result.
 */
function render() {
  const { parsingResult, sentenceInput } = UI();
  const { value: sentence } = sentenceInput;
  if (!sentence) {
    parsingResult.innerHTML = `<p>No parsing result yet. Let's type a sentence ! </p>`;
    return;
  }
  const { words, letters, vowels, consonants } = parse(sentence);
  parsingResult.innerHTML = `
    <p>Words : ${words}</p>
    <p>Letters : ${letters}</p>
    <p>Vowels : ${vowels}</p>
    <p>Consonants : ${consonants}</p>
  `;
}

/**
 * Parse the sentence.
 *
 * @param {String} sentence The sentence to parse.
 */
function parse(sentence) {
  const words = sentence.split(" ")?.length || 0;
  const letters = sentence.replace(/\s/g, "")?.length || 0;
  const vowels = sentence.match(/[aeiou]/gi)?.length || 0;
  const consonants = sentence.match(/[^aeiou]/gi)?.length || 0;
  return { words, letters, vowels, consonants };
}
