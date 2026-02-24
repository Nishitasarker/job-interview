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
const filterSection = document.getElementById('filter-section');

function allCardCount(){
    total.innerText=allCardSection.children.length;
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerText=rejectedList.length;
}
allCardCount();


function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-800','text-white');
    interviewFilterBtn.classList.remove('bg-blue-800','text-white');
    rejectedFilterBtn.classList.remove('bg-blue-800','text-white');


    allFilterBtn.classList.add('bg-gray-300','text-black');
    interviewFilterBtn.classList.add('bg-gray-300','text-black');
    rejectedFilterBtn.classList.add('bg-gray-300','text-black');


    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-300','text-black');
selected.classList.add('bg-blue-800','text-white');
}


mainContainer.addEventListener('click', function(event){
                       event.target.closest('.job-card');
    const parentNode = event.target.parentNode.parentNode;
    const jobTitle = parentNode.querySelector('.job-title').innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const jobDetailsList = parentNode.querySelector('.job-details-list').innerText;
    const text = parentNode.querySelector('.text').innerText;
    
const cardInfo={
    jobTitle,
    jobType,
    jobDetailsList,
    text
};

const jobTitleExist = interviewList.find(item=> item.jobTitle == cardInfo.jobTitle)

if(!jobTitleExist){
    interviewList.push(cardInfo);
}
})


function renderThriving(){
    filterSection.innerHTML='';


    for(let Thrive of renderThriving){
        let div=document.createElement('div');
        div.className=``
        div.innerHTML=``
    }
}
