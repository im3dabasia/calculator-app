let evaluationString = "";
const answerBox = document.getElementById('answer-display')


window.addEventListener("keydown", (event) => {

    if(Number(event.key) || event.key ==='*' || event.key ==='+' || event.key ==='-' || event.key ==='/'){
        evaluationString += event.key
        answerBox.innerHTML  = evaluationString

    }
    if(event.key ==='Enter'){
        let ans = eval(evaluationString)

        answerBox.innerHTML  = ans ? ans : "0" ;
        evaluationString =""

    }
    if(event.key ==='Backspace'){
        evaluationString =  evaluationString.slice(0,evaluationString.length -1)

        console.log(evaluationString)
        answerBox.innerHTML  = evaluationString

    }
}, true);

const myFunction = (arg) => {
    

    if((arg === '*' && evaluationString.charAt(0) === '*') || (arg === '/' && evaluationString.charAt(0) === '/')){

        evaluationString = "";
        answerBox.innerHTML = evaluationString

        console.log(arg.length )
    }

    else if (arg === 'EQ') {

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