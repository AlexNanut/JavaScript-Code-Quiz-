var start_btn = document.querySelector(".start_btn button");
var quiz_box = document.getElementById("quiz_box");
var result_box = document.querySelector(".result_box");
var option_list = document.querySelector(".option_list");
var time_line = document.querySelector("header .time_line");
var timeText = document.querySelector(".timer .time_left_txt");
var timeCount = document.getElementById("timer_sec");

var timeValue =  15;
var que_count = 0;
var que_numb = 1;
var userScore = 0;
var counter;
var counterLine;
var  widthValue = 0;

start_btn.onclick =()=>{
    // time_line.classTimer.add("activateTimer"); 
    console.log("startTimer")
    setInterval(()=>{
       if (timeValue >=0) {
        timeCount.innerHTML=timeValue
        timeValue--
    }
    },1000)
    quiz_box.removeAttribute("hidden");
    start_btn.setAttribute("hidden",true)
    showQuestions(que_count)
}



function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    
    var que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    var option_tag = '<div class="option">'+ questions[index].options[0] +'</div>'
    + '<div class="option">'+ questions[index].options[1] +'</div>'
    + '<div class="option">'+ questions[index].options[2] +'</div>'
    + '<div class="option">'+ questions[index].options[3] +'</div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    var options = option_list.querySelectorAll(".option");
    console.log(options)
    for(let i=0; i < options.length; i++){
        console.log(options[i])
        options[i].addEventListener("click", e=>{
            console.log(questions[index].answer, e.target.innerHTML)
            if(questions[index].answer== e.target.innerHTML){
                console.log("correct")
                
            }
            else{
                timeValue-=2
            }
            index++
            if (index<questions.length){
                showQuestions(index)

            
            }
            else {
                console.log("endQuiz")
            }
            
        });
    }
}
function optionSelected (e){
    console.log(e)
}
var next_btn = document.querySelector("footer .next_btn");
var bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuestions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
}

}




