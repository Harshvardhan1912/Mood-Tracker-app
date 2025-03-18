const body = document.body
const moodButtons = document.querySelectorAll(".emoji-btn") 
const TodayMood =document.getElementById("today-mood")
const moodNote = document.getElementById('mood-note');

const AllMoods = [happy, sad, excited, neutral, angry];
let data = loadData(); // data variable created to store moods
console.log(data);

const loggedMood = localStorage.getItem('mood')
const loggedNote = localStorage.getItem('note')
const loggedDate = localStorage.getItem('date')
// Get today's date in a local format (MM/DD/YYYY or similar, depending on locale)
const Today = new Date().toLocaleDateString();
if (loggedDate === Today){
    if(loggedMood){
        TodayMood.innerText = `YOUR MOOD ${loggedMood}`
    // need attention
    }
if (loggedNote){
    moodNote.value = loggedNote;
}
}

AllMoods.forEach(button => {
    button.addEventListener('click', ()=>{
        userMood = button.dataset.mood;
    })
})