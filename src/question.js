class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }
  shuffleChoices(){
    const randomizedArr = [];
    counter = this.choices.length // 4
    while (counter > 0){
        let shuffleChoice = thisChoices[(Math.floor(Math.random() * thisChoices.length))];
        if (!randomizedArr.includes(shuffleChoice)) {
            randomizedArr.push(shuffleChoice)
            counter -= 1;
        }    
        
        }
        return randomizedArr
  }


//   shuffleChoices() {
//     for (let i = this.choices.length-1; i > 0; i--){
//         let k = (Math.floor(Math.random() * (i+1)));
//         [this.choices[i], this.choices[k]] = [this.choices[k], this.choices[i]]
        
        
//         //randomizedArr.push(shuffleChoice)    
//      
//      //return randomizedArr;
// }
//   }

}

// thisChoices = ["choice1", "choice2", "choice3", "choice4"]
// const randomizedArr = [];
// counter = thisChoices.length
// while (counter > 0){
//     let shuffleChoice = thisChoices[(Math.floor(Math.random() * thisChoices.length))];
//     if (!randomizedArr.includes(shuffleChoice)) {
//         randomizedArr.push(shuffleChoice)
//         counter -= 1;
//     }    
    
//     }
// console.log(randomizedArr)



/*function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}*/

