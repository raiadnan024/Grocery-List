const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveData();
    }
    inputbox.value = '';
}

listcontainer.addEventListener("click", function(e) {
    const tagName = e.target.tagName.toLowerCase();
    if (tagName === "li") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (tagName === "span") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listcontainer.innerHTML = savedData;
    }
}
showTask();




// const inputbox = document.getElementById("input-box");
// const listcontainer = document.getElementById("list-container");

// function addTask()
// {
//      if (inputbox.value === ''){
//         alert("You must write something");
//      } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputbox.value;
//         listcontainer.appendChild(li);
//         // span tag use and add cross icon
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//         saveData();
//     }
//     inputbox.value= '';
  
// }
// listcontainer.addEventListener("click", function(e) {
//     const tagName = e.target.tagName.toLowerCase();
//     if (tagName === "li") {
//         e.target.classList.toggle("checked");
//         saveData();
//     } else if (tagName === "span") {
//         e.target.parentElement.remove();
//         saveData();
//     }
// });

// function saveData(){
//      localStorage.setItem("data", listcontainer.innerHTML);
// }
//  function showTask(){
//      listcontainer.innerHTML = localStorage.getItem("data");
// }
// showTask();