const questions = [
    {
        question: "Who is the best Chelsea winger?",
        answers: [
            { text: "Palmer", correct: false},
            { text: "Sterling", correct: false},
            { text: "Mudryk", correct: true},
            { text: "Madueke", correct: false},
        ]
    },
    {
        question: "Who is the best male actor?",
        answers: [
            { text: "Ryan Gosling", correct: true},
            { text: "Ryan Reynolds", correct: false},
            { text: "Jeremy Allen", correct: false},
            { text: "Idris Alba", correct: false},
        ]
    },
    {
        question: "Who is the owner of Tesla",
        answers: [
            { text: "Bezos", correct: false},
            { text: "Dangote", correct: false},
            { text: "Otedola", correct: false},
            { text: "Elon Musk", correct: true},
        ]
    },
    {
        question: "Who is the best female actor?",
        answers: [
            { text: "Gwyneth Paltrow", correct: true},
            { text: "Kim Kardashian", correct: false},
            { text: "Scarlett Johansson", correct: false},
            { text: "Amber Heard", correct: false},
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Elephant", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Giraffe", correct: false},
        ]
    }

    ]; 

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButtons = document.getElementById("next-btn");

    let currrentQuestionIndex = 0;
    let score = 0;

    function startQuiz(){
        currrentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next"
        showQuestion();
    }

    function showQuestion(){
        resetState();
        let currrentQuestion = questions[currrentQuestionIndex];
        let questionNo = currrentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currrentQuestion
        .question;

        currrentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }

    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstchild);
        }
    }

    function selectAnswer(e){
        const selectBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.Disabled = true;
        });
        nextButton.style.display = "block";
    }

    function showScore(){
        resetState();
        questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!'; 
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
        
    }

    function handleNextButton(){
        currrentQuestionIndex++;
        if(currrentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }
    nextButton.addEventListener("click", ()=>{
        if(currrentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    })
    
    startQuiz();





        

    
   
