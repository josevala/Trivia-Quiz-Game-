
let answer = "";
let userScore = 0; 
let textArea = document.querySelector("#input");
let category = "";
let questions = [];
let start = document.getElementById("start")
let btn = document.getElementById("check");
let score = document.getElementById("score");
let cat = document.getElementById("categories");
let quest = document.getElementById("question");
let container = document.getElementById("container");
let time = document.getElementById("timer");
time.style.display= "none";


container.style.display = "none";
textArea.style.display = "none";
btn.style.display = "none";
let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");
let oneQuestion = "";
let twoQuestion = "";
let threeQuestion= "";
let category1 = "";
let category2 = "";
let category3 = "";
let answer1 = "";
let answer2 = "";
let answer3 = "";


fetch(`https://opentdb.com/api.php?amount=1`)
  .then ((response) => response.json())
  .then((data)=>{
    data.results.map((dQuestion) => {
       oneQuestion = 
         dQuestion.question
      
       answer1 = dQuestion.correct_answer
         console.log(oneQuestion)
         console.log(answer1)

         category1 = dQuestion.category
    }) 
   console.log(category1);
     
    
});

fetch(`https://opentdb.com/api.php?amount=1`)
  .then ((response) => response.json())
  .then((data)=>{
    data.results.map((dQuestion) => {
       twoQuestion= 
         dQuestion.question
      
       answer2 = dQuestion.correct_answer
         console.log(twoQuestion)
         console.log(answer2)
         category2 = dQuestion.category
         console.log(category2)

    })  
});

fetch(`https://opentdb.com/api.php?amount=1`)
  .then ((response) => response.json())
  .then((data)=>{
    data.results.map((dQuestion) => {
       threeQuestion= 
         dQuestion.question
      
       answer3 = dQuestion.correct_answer
         console.log(threeQuestion)
         console.log(answer3)
         category3 = dQuestion.category
         console.log(category3)

    })  
});


quest.style.display = "none";
start.addEventListener("click",display3);
score.style.display = "none";
score.innerHTML = `Score:0`




question1.addEventListener("click",firstQuestion);
question2.addEventListener("click",secondQuestion);
question3.addEventListener("click",thirdQuestion);

question1.addEventListener("click",getTime);
question2.addEventListener("click",getTime);
question3.addEventListener("click",getTime);

function firstQuestion(){
  time.style.display = "block";
  container.style.display = "none";
  quest.style.display = "block";
  cat.innerHTML= `Category: ${category1}`;
 quest.innerHTML = `Question: ${oneQuestion}`;
 textArea.style.display = "block";
 btn.style.display = "block";
  answer = answer1;
 
}
function secondQuestion(){
  time.style.display = "block";
  container.style.display = "none";
  quest.style.display = "block";
  cat.innerHTML= `Category: ${category2}`;
 quest.innerHTML = `Question: ${twoQuestion}`;
 textArea.style.display = "block";
 btn.style.display = "block";
  answer = answer2;
  
  }

function thirdQuestion(){
  time.style.display = "block";
    container.style.display = "none";
    quest.style.display = "block";
    cat.innerHTML= `Category: ${category3}`;
   quest.innerHTML = `Question: ${threeQuestion}`;
   textArea.style.display = "block";
   btn.style.display = "block";
   answer = answer3;

}

function display3(){
  start.style.display = "none";
container.style.display= "inline-flex";
container.style.alignContent = "center";
question1.innerHTML =`${category1}`;
question2.innerHTML = `${category2}`;
question3.innerHTML = `${category3}`;
cat.innerHTML = "Pick a Category:"
cat.style.color = "white"
cat.style.fontSize = "40px";
cat.style.textShadow = " 3px 3px #546e7a"
topScore.style.display = "block";
btn.style.display = "none";
textArea.style.display = "none";
}
   
btn.addEventListener("click", checkingQuestions);
btn.addEventListener("click",clearInterval(getTime));



let  timeSeconds = 30;
 function getTime(){
time.innerHTML = `Time left: ${timeSeconds}seconds`
const countDown = setInterval(()=>{
timeSeconds -= 1 ;
time.innerHTML = `Time left: ${timeSeconds} seconds`;

if (timeSeconds <= 0 || timeSeconds < 1 ){
  clearInterval(countDown);
  alert("Oops Time is up!")

  cat.innerHTML = "Game Over!";
  quest.innerHTML  = "Click Here to Start A New Game!";
  quest.addEventListener("click", ()=>{  
    location.reload();
   })
  quest.style.display = "block";
  textArea.style.display = "none";
  btn.style.display = "none";
}
if(timeSeconds <= 10  ){
  time.style.color = "red";
}

btn.addEventListener("click", ()=>{
time.style.color = 'white';
clearInterval(countDown);
timeSeconds = 30;
time.innerHTML= `seconds Left:${timeSeconds}`
})

},1000)
}

let topScore =document.getElementById("highScore") 
topScore.style.display = "none"
                
function checkingQuestions(){
       
       userAnswer = textArea.value;
       if( userAnswer.toLocaleLowerCase().trim() == answer.toLocaleLowerCase().trim() ){
        score.style.display = "block";
        score.innerHTML = `Score:${userScore += 1}`;
        textArea.value = "";
        fetch(`https://opentdb.com/api.php?amount=1`)
        .then ((response) => response.json())
        .then((data)=>{
          data.results.map((dQuestion) => {
             oneQuestion = 
               dQuestion.question
            
             answer1 = dQuestion.correct_answer
               console.log(oneQuestion)
               console.log(answer1)
      
               category1 = dQuestion.category
          }) 
         console.log(category1);
           
            question1.innerHTML =`${category1}`;
       });
       
       fetch(`https://opentdb.com/api.php?amount=1`)
       .then ((response) => response.json())
       .then((data)=>{
         data.results.map((dQuestion) => {
            twoQuestion= 
              dQuestion.question
           
            answer2 = dQuestion.correct_answer
              console.log(twoQuestion)
              console.log(answer2)
              category2 = dQuestion.category
              console.log(category2)
     
         })  
            question2.innerHTML = `${category2}`;
       });
       
       fetch(`https://opentdb.com/api.php?amount=1`)
       .then ((response) => response.json())
       .then((data)=>{
         data.results.map((dQuestion) => {
            threeQuestion= 
              dQuestion.question
           
            answer3 = dQuestion.correct_answer
              console.log(threeQuestion)
              console.log(answer3)
              category3 = dQuestion.category
              console.log(category3)
     
         }) 
             question3.innerHTML = `${category3}`;
          });
          quest.style.display = "none";
          start.style.display = "none";
          container.style.display= "inline-flex";
          container.style.alignContent = "center";
          cat.innerHTML = "Pick a Category:"
          cat.style.color = "white"
          cat.style.fontSize = "40px";
          cat.style.textShadow = " 3px 3px #546e7a"
          topScore.style.display = "block";
          btn.style.display = "none";
          textArea.style.display = "none";
       }
       else{
         
        time.style.display = "none";
        quest.style.display= "block";
        cat.innerHTML = "Game Over!";
        quest.innerHTML  = "Click Here to Start A New Game!";
         
         quest.addEventListener("click", ()=>{  
          location.reload();
         })
         
         score.style.display = "none";
         alert("Game over!")
         container.style.display= "none";
         textArea.style.display = "none";
         btn.style.display = "none";
         

       }   
      }

function css(){
time.style.color= "white";
time.style.fontSize = "30px"
time.style.textShadow = "2.5px 2.5px #546e7a";

 cat.style.fontSize= "20px";
 start.style.fontSize = "35px";
 start.style.backgroundColor = "#546e7a";
start.style.display = "flex";
start.style.aligntext = "center";

quest.style.fontSize = "35px";
quest.style.backgroundColor = "#546e7a";
quest.style.display = "none"
quest.style.aligntext = "center";

score.style.fontSize = "45px";
score.style.color = "white";
score.style.textShadow = "3.5px 3.5px black";

btn.style.margin = "10px 10px";
btn.style.padding = "10px 30px";
btn.style.color = "gray";
}
css();
