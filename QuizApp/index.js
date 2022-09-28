const questions = [{
 que : "Que) Which of these following is not an HTML Tag",
 op1 : "textarea",
 op2 : "body",
 op3 : "class",
 op4 : "select",
 correct : "op3"
},
{
 que : "Que) Which is an CSS Selector",
 op1 : "id",
 op2 : "script",
 op3 : "public",
 op4 : "private",
 correct : "op1"
},
{
 que : "Que) Which is a not a valid C Keyword",
 op1 : "enum",
 op2 : "struct",
 op3 : "break",
 op4 : "public",
 correct : "op4"
}];


let total = questions.length;
const opt = document.querySelectorAll('.option');
const question = document.getElementById('question');
let idx = 0;
let right = 0;

const newQuestion = () => {
     if(idx == total){
      // console.log("++");
      return endQuiz();
     }
     else{
     reset();
     const currque = questions[idx];
    //  console.log(currque);
     question.innerText = currque.que;
     opt[0].nextElementSibling.innerText = currque.op1;
     opt[1].nextElementSibling.innerText = currque.op2;
     opt[2].nextElementSibling.innerText = currque.op3;
     opt[3].nextElementSibling.innerText = currque.op4;
     }
}

const handleSubmit = () =>{
  const data = questions[idx];
  let ans = getAnswer();
  console.log(idx);
  console.log(ans,data.correct);
  if(ans == data.correct){
    right++;
  }
  idx++;
  newQuestion();
}

const getAnswer = () =>{
  let answer;
  opt.forEach(
    input => {
      if(input.checked){
        answer = input.value;
      }
    }
  )
  return answer;
}

const reset = () => {
  opt.forEach(
    (input) => {
      input.checked = false;
    }
  )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <div style="text-align : center">
    <h1> Thankyou for playing Quiz </h1>
    <h2>Your Total is ${right} / ${total} </h2>
    </div>
    `;
}
newQuestion();