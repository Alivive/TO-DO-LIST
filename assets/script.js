const inputBox= document.getElementById("input-box");
const Container= document.getElementById("container");

function addTask(){
    if(inputBox.value === ''){
         alert("You have not made any entry dearest user!");
    }
   else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    Container.appendChild(li);
    let span= document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
       }
    inputBox.value ="";
    saveData();
   }
 
   Container.addEventListener("click", function(e){
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
     }
     else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove();
         saveData();
     }
   }, false);

   function saveData(){
      localStorage.setItem("data", Container.innerHTML );
   }
   function showTask(){
      Container.innerHTML = localStorage.getItem("data");
   }
   showTask();

 document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "Having Challenges???",
    "Let's Fix it Now!!!",
    "Achieve More!!"
  ];
  let i = 0;

  const animatedText = document.getElementById("animated-text");
  if(!animatedText){
    console.error("Animated text element not found!");
    return;
  }

  setInterval(() => {
    console.log("Changing text to:", messages[i]); // debug
    animatedText.textContent = messages[i];
    i = (i + 1) % messages.length;
  }, 3000);
});
   