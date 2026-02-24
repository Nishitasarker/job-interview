// document.addEventListener("DOMContentLoaded", function() {

// const interviewBtn = document.querySelectorAll(".interview-btn");
// // for (const interview of interviewBtn){
// //    interview.addEventListener('click',function(event){
// //     // console.log("add interview")
// //    event.target.parentNode.removeChild(event.target);
// //    })

//  interviewBtn.forEach(btn => {
//         btn.addEventListener("click", function(event) {
//             const card = event.target.closest(".job-card");
//             let totalJob = 0;
//             if(card){
//                 card.remove();
//                 for 
//             } 


//         });

// })

// })


const total = document.getElementById("total");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
let interviewList =[];
let rejectedList =[];


const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("all-cards");
const mainContainer = document.querySelector('main');


function allCardCount(){
    total.innerText=allCardSection.children.length;
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerText=rejectedList.length;
}
allCardCount();


function toggleStyle(id){
    allFilterBtn.classList.remove('bg')
}
