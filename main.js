
let question = document.querySelectorAll(".title"); //array questions
let arrows = document.querySelectorAll(".arrow"); //array arrows images
let answer = document.querySelectorAll(".answer"); // array replies




for (let i = 0; i < question.length ; i++) {                      //button iteraction
    
    question[i].addEventListener("click", ()=> { //click event on button
       
        answer[i].classList.toggle("hidden");
                
        arrows[i].classList.toggle("rotate");
    
        question[i].classList.toggle("bold");
       
    })

};

 



