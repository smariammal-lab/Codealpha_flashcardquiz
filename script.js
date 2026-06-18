let activities =
JSON.parse(localStorage.getItem("fitnessData"))
|| [];

function addActivity(){

let exercise =
document.getElementById("exercise").value;

let steps =
parseInt(document.getElementById("steps").value)
|| 0;

let duration =
parseInt(document.getElementById("duration").value)
|| 0;

let calories =
parseInt(document.getElementById("calories").value)
|| 0;

activities.push({
exercise,
steps,
duration,
calories
});

localStorage.setItem(
"fitnessData",
JSON.stringify(activities)
);

updateUI();
}

function deleteActivity(index){

activities.splice(index,1);

localStorage.setItem(
"fitnessData",
JSON.stringify(activities)
);

updateUI();
}

function updateUI(){

let totalSteps = 0;
let totalCalories = 0;

let history =
document.getElementById("history");

history.innerHTML = "";

activities.forEach((item,index)=>{

totalSteps += item.steps;
totalCalories += item.calories;

let li =
document.createElement("li");

li.innerHTML = `
${item.exercise}
- ${item.duration} mins
- ${item.calories} cal

<button class="delete-btn"
onclick="deleteActivity(${index})">
Delete
</button>
`;

history.appendChild(li);

});

document.getElementById("totalSteps")
.innerText = totalSteps;

document.getElementById("totalCalories")
.innerText = totalCalories;

let goal = 10000;

let percentage =
Math.min((totalSteps/goal)*100,100);

document.getElementById("progressBar")
.style.width = percentage + "%";

document.getElementById("progressBar")
.innerText =
Math.round(percentage) + "%";
}

function calculateBMI(){

let weight =
document.getElementById("weight").value;

let height =
document.getElementById("height").value/100;

if(weight && height){

let bmi =
(weight/(height*height))
.toFixed(1);

document.getElementById("bmiResult")
.innerText =
"Your BMI: " + bmi;
}
}

function saveWater(){

let water =
document.getElementById("water").value;

localStorage.setItem(
"water",
water
);

document.getElementById("waterCount")
.innerText =
water + " Glasses";
}

function toggleDarkMode(){
document.body.classList.toggle("dark");
}

document.getElementById("waterCount")
.innerText =
(localStorage.getItem("water") || 0)
+ " Glasses";

const ctx =
document.getElementById("myChart");

new Chart(ctx,{
type:"line",
data:{
labels:[
"Mon","Tue","Wed",
"Thu","Fri","Sat","Sun"
],
datasets:[{
label:"Steps",
data:[
4000,5000,6000,
7000,8000,9000,10000
],
borderWidth:3
}]
}
});

updateUI();