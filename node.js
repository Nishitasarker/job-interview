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
    
console.log(event.target.classList.contains('interview-btn'))
    if(event.target.classList.contains('interview-btn')){
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
renderThriving()

 }
})


function renderThriving(){
    filterSection.innerHTML='';


    for(let interview of interviewList){
        console.log(interview);
        
        let div=document.createElement('div');
        div.className=`job-card bg-white pt-4 pl-2 items-start  mb-4 shadow-sm flex justify-between`
        div.innerHTML=`<div>
    <h3 class="job-title  font-bold text-xl mb-4 pt-5">
    Mobile First Corp
   </h3> 
   <p class="job-type text-gray-400 font-bold m-0 py-0">React Native Developer</p>
   <ol class="job-details-list text-gray-400 pt-6 pb-3">
    Remote
    <li>Full-time</li>
    <li>$130,000-$175,000</li>
   </ol>
   <!-- <button class="bg-gray-400 text-blue-100 font-semibold py-2 px-3 rounded-sm shadow">NOT APPLIED</button> -->
   <p class="text pt-3">Build cross-platform mobile applications using React Native.Work on products used by millions of users worldwide.</p>
<div class="flex gap-5 py-3">
     <button class="interview-btn border-2 border-green-500 hover:bg-green-300 py-2 px-3 hover rounded-sm shadow text-green-500">INTERVIEW</button>
   <button class="border-2 border-red-500 hover:bg-red-300 rounded-sm  py-2 px-3 shadow text-red-500">REJECTED</button>
</div>
 </div> 

 <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full ml-4 cursor-pointer mr-8 mt-6">
      <i class="fa-regular fa-trash-can"></i></div>
`
    }
}
