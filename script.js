const correctAnswers = [3,4,3,4,4,2,2,1,2,4];
let correctQuestions = 0;

let questionContainers = document.getElementsByClassName("questionContainer");
let submitButton = document.querySelector('.submitButton');

let totalQuestions = questionContainers.length;

function checkAnswers() {
    for (const qCon of questionContainers) {
        // Iterate through each question and get the answer
        let answers = qCon.getElementsByClassName('answer');
        for (const ans of answers) {
            ans.classList.remove("correct");
            ans.classList.remove("incorrect");
            let rBtn = ans.querySelector('input')
            if (rBtn.checked) {
                let qNum = ans.getAttribute("data-question")
                let aNum = ans.getAttribute("data-answer")
                console.log("Question #" + qNum)
                console.log("Answer #" + aNum)
                if (correctAnswers[qNum-1] == aNum) {
                    correctQuestions++;
                    ans.classList.add("correct")
                } else {
                    ans.classList.add("incorrect")
                }
            }
        }
    }
    document.querySelector(".scoreText").textContent = `You got ${correctQuestions} out of ${totalQuestions} correct! (${correctQuestions*100/totalQuestions}%)`
    correctQuestions = 0;
}

submitButton.addEventListener("click",checkAnswers)

