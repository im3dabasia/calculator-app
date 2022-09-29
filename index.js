let evaluationString = "";
const answerBox = document.getElementById('answer-display')
const myFunction = (arg) => {

    if (arg === 'EQ') {

        let ans = eval(evaluationString)

        if (ans === undefined) {
            answerBox.innerHTML = "0"

        } else {
            answerBox.innerHTML = ans
            evaluationString = ""

        }
    }

    else if (arg === 'AC') {
        evaluationString = ""
        answerBox.innerHTML = evaluationString

    }
    else if (arg === 'DEL') {
        evaluationString = evaluationString.slice(0, evaluationString.length - 1)
        answerBox.innerHTML = evaluationString

    }
    else {

        evaluationString += arg;
        answerBox.innerHTML = evaluationString

    }
}