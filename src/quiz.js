class Quiz {
    constructor(questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion(){
        return this.questions[this.currentQuestionIndex]
    }
    
    moveToNextQuestion(){
        return this.questions[this.currentQuestionIndex++]
    }

    shuffleQuestions(){ // LT solution
        for (let i = 0; i < this.questions.length; i++) {
            let randomIndex = Math.floor(Math.random() * this.questions.length);
            let randomElement = this.questions[randomIndex];
            this.questions.splice(randomElement, 1);
            this.questions.push(randomElement);
          }
    }

    checkAnswer(answer){
        if(this.questions[this.currentQuestionIndex].answer === answer){
            return this.correctAnswers ++;
        }
    }


    hasEnded(){
        if(this.currentQuestionIndex === this.questions.length){
            return true;
        }else{
            return false;
        }
    }
}