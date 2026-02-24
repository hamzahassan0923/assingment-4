let interviewList =[];
let rejectedList =[];
let currentStatus = 'all'

let total = document.getElementById("total");
let interview = document.getElementById("interview-count");
let rejected = document.getElementById("rejected-count");

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')


const allCardsSections = document.getElementById('allcards');
const mainContainer = document.querySelector('main')
const filteredSection = document.getElementById('filtered-section')


function calculateCount(){
 total.innerText = allCardsSections.children.length
 interviewCount.innerText = interviewList.length
 rejectedCount.innerText = rejectedList.length

}
calculateCount();

function toggleStyle(id){
allFilterBtn.classList.remove('bg-[#3B82F6]' ,'text-white')
interviewFilterBtn.classList.remove('bg-[#3B82F6]' ,'text-white')
rejectedFilterBtn.classList.remove('bg-[#3B82F6]' ,'text-white')

allFilterBtn.classList.add('bg-white' ,'text-black')
interviewFilterBtn.classList.add('bg-white' ,'text-black')
rejectedFilterBtn.classList.add('bg-white' ,'text-black')
console.log(id)

const selected = document.getElementById(id)
currentStatus =id


selected.classList.remove('bg-white' ,'text-black')
selected.classList.add('bg-[#3B82F6]' ,'text-white')

if(id =='interview-filter-btn'){
    allCardsSections.classList.add('hidden')
    filteredSection.classList.remove('hidden')
    renderInterview()
}
else if(id =='all-filter-btn'){
    allCardsSections.classList.remove('hidden')
    filteredSection.classList.add('hidden')
}
else if(id =='rejected-filter-btn'){
     allCardsSections.classList.add('hidden')
    filteredSection.classList.remove('hidden')
    renderRejected()
}
}

mainContainer.addEventListener('click', function(event){

if(event.target.classList.contains('interview-btn')){

    const parentNode = event.target.parentNode.parentNode

    const company = parentNode.querySelector('.company').innerText
    const profession = parentNode.querySelector('.profession').innerText
    const salary = parentNode.querySelector('.salary').innerText
    const statuss = parentNode.querySelector('.statuss').innerText
    const notes = parentNode.querySelector('.notes').innerText

    parentNode.querySelector('.statuss').innerText ='interview'
    
    const cardInfo ={
        company,
        profession,
        salary,
        statuss :'interview' ,
        notes
    }
    
    const companyExist =interviewList.find(item => item.company ==cardInfo.company)
    
    if(!companyExist){
        interviewList.push(cardInfo)
    }
    rejectedList = rejectedList.filter(item=>item.company !=cardInfo.company)
     if(currentStatus =="rejected-filter-btn"){
        renderRejected(); 
    }
    
    calculateCount()
    
    
}
else if(event.target.classList.contains('rejected-btn')){

    const parentNode = event.target.parentNode.parentNode

    const company = parentNode.querySelector('.company').innerText
    const profession = parentNode.querySelector('.profession').innerText
    const salary = parentNode.querySelector('.salary').innerText
    const statuss = parentNode.querySelector('.statuss').innerText
    const notes = parentNode.querySelector('.notes').innerText

    parentNode.querySelector('.statuss').innerText ='rejected'
    
    const cardInfo ={
        company,
        profession,
        salary,
        statuss :'rejected' ,
        notes
    }
    
    const companyExist =rejectedList.find(item => item.company ==cardInfo.company)
    
    if(!companyExist){
        rejectedList.push(cardInfo)
    }
    interviewList = interviewList.filter(item=>item.company !=cardInfo.company)

    if(currentStatus =="interview-filter-btn"){
        renderInterview(); 
    }

    calculateCount()
    
   
}

})


function renderInterview (){
    filteredSection.innerHTML=''

    for(const interview of interviewList){
        console.log(interview);
        
        let div =document.createElement('div');
        div.className ='card-container bg-white rounded-xl p-5 relative'
        div.innerHTML =`
        <!-- delete-btn -->
          <div class="absolute py-[34px] right-[24px]">
            <button id="delete-btn" class="btn bg-white rounded-full border border-gray-500/30 opacity-40 p-3 "><i class="fa-regular fa-trash-can "></i></button>
          </div>
          <!-- card-body -->
          <h1 class="company font-bold text-lg mb-1">${interview.company}</h1>
          
          <p class="profession text-gray-500 mb-3">${interview.profession}</p>
          
          <p class="salary text-gray-500 mb-3">${interview.salary}</p>
          
            <p class="statuss btn bg-white mb-2">${interview.statuss}</p>
          
          <p class="notes text-gray-500 mb-3">${interview.notes}</p>
             <!-- btn-sections -->
          <div class="flex gap-2">
               <button class="interview-btn btn border-green-500 text-green-500">interview</button>
               <button class="rejected-btn btn border-red-500 text-red-500">Rejected</button>
          </div>
        `
        filteredSection.appendChild(div)
        
    }
}


function renderRejected (){
    filteredSection.innerHTML=''

    for(const rejected of rejectedList){
        console.log(rejected);
        
        let div =document.createElement('div');
        div.className ='card-container bg-white rounded-xl p-5 relative'
        div.innerHTML =`
        <!-- delete-btn -->
          <div class="absolute py-[34px] right-[24px]">
            <button id="delete-btn" class="btn bg-white rounded-full border border-gray-500/30 opacity-40 p-3 "><i class="fa-regular fa-trash-can "></i></button>
          </div>
          <!-- card-body -->
          <h1 class="company font-bold text-lg mb-1">${rejected.company}</h1>
          
          <p class="profession text-gray-500 mb-3">${rejected.profession}</p>
          
          <p class="salary text-gray-500 mb-3">${rejected.salary}</p>
          
            <p class="statuss btn bg-white mb-2">${rejected.statuss}</p>
          
          <p class="notes text-gray-500 mb-3">${rejected.notes}</p>
             <!-- btn-sections -->
          <div class="flex gap-2">
               <button class="interview-btn btn border-green-500 text-green-500">interview</button>
               <button class="rejected-btn btn border-red-500 text-red-500">Rejected</button>
          </div>
        `
        filteredSection.appendChild(div)
        
    }
}

// delete btn





// document.getElementsById("delete-btn").addEventListener("click", function() {
//     const card = this.closest(".card-container");
//   card.remove();
//   updateTotal();
  
// });

// function updateTotal() {
//     const cards = document.querySelectorAll(".card-container");
//     const totalSpan = document.getElementById("total");
//     totalSpan.textContent = cards.length; 
// }


