# Sentence Parser ✍️

String Parser is a tool to parse a sentence.

## 01

As a user, I can write a sentence in an input so it can be parsed.

### Acceptance critera

- Input should be of type "text"
- If the user click the "Parse" button, the parsing should be triggered
- If the user type the "Enter" key, the parsing should be triggered
- A parsing can't be triggered if the input is empty

## 02

As a user, I can visualize parsing result so I can better understand the sentence details.

### Acceptance critera

- When the parsing result is empty, it should display the following message : "No parsing result yet. Let's type a sentence !"
- When parsing is triggered, the parsing result should display the following informations :
  - The number of words in the sentence
  - The number of letter in the sentence (spaces are excluded)
  - The number of vowels in the sentence
  - The number of consonants in the sentence
