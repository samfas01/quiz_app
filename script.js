// Declare the UI elements
var ul = document.getElementById('ul');
var nextButton = document.getElementById('btnNext');
var previousButton = document.getElementById('btnPrvs');
var restartButton = document.getElementById('btnRestart');
var scoreCard = document.getElementById('scoreCard');
var quizbox = document.getElementById('questionBox');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
// Declare the Question(array inside object)
var app={
        questions:[
            {
                q:'What is the name of the river',
                options: ['Danube', 'Niger', 'Congo', 'Limpopo'],
                answer:1
            },
            {
                q:'What is the name of the Deadly virus',
                options: ['Antrax', 'Killvi', 'Corona', 'Wuhanvi'],
                answer:3
            },        
            {
                q:'In which part of your body would you find the cruciate ligament?',
                options: ['Knee', 'Head', 'Nose', 'fingers'],
                answer:1
            },         
            {
                q:' What is the name of the main antagonist in the Shakespeare play Othello?',
                options: ['Iago', 'Thomas', 'Toafeek', 'Stephen'],
                answer:1
            },       
            {
                q:'What element is denoted by the chemical symbol Sn in the periodic table?',
                options: ['Zinc', 'Tin', 'Iron', 'Carbon'],
                answer:2
            },       
            {
                q:'What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman?',
                options: ['All the President’s Men', 'SpiderMan', 'Tom & Jerry', 'Game of Throne'],
                answer:1
            },       
            {
                q:'How many of Henry VIII’s wives were called Catherine?',
                options: ['3', '4', '10','8'],
                answer:1
            },           
        ],
        index:0,
        // Load the question and answer and also the index+1 is to add 1 to index:), 
        // declare to show as 1 and wen next is pressed it will show 2
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
        // Shows at the end screen after all the questions are answered this should happen the options(ul and next button)
        // should not show
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
                previousButton.style.display="none";
                restartButton.style.marginLeft="10px";
                restartButton.style.marginTop="10px";
                scoreCard.style.marginTop="60px";
            }
        },
        // wen next is pressed it will increase the index and load up the next question
        next: function(){
            this.index++;
            this.load();
        },
        previous: function(){
            this.index--;
            this.load();
        },
        // to check if the option is correct or wrong it is going to check the option that was picked
        // and split it into an array and extract the last item of the array   
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                // class name of correct from css
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        // prevent click will look through the children li element and prevent click
        //disable options once user selects on option
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        //  this do the reverse of the prevent click
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        // once the question is answered correctly the score will increase where we apply score++
        //  score card is where the score will display below the form 
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML= this.score + "/"+ this.questions.length;
        }
}
// we call the app here to work
window.load=app.load();
//  this function is called when option is called
function button(ele){
    app.check(ele);
    app.preventClick();
}
// calling the next function and increase the index
function next(){
    app.next();
    app.allowClick();
}
function restart(){
    location.reload();
}
function previous(){
    app.previous();
    app.allowClick();
}

