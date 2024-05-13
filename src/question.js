class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }
  shuffleChoices() {
    for (let i = 0; i < this.choices.length; i++) {
      let randomIndex = Math.floor(Math.random() * this.choices.length);
      let randomElement = this.choices[randomIndex];
      this.choices.splice(randomElement, 1);
      this.choices.push(randomElement);
    }
    
  }
}
