// console.log("This is my profile page");

const myName = document.createElement("h1");
myName.innerText = "Ryan Summerlin";
myName.setAttribute("id", "ryan");
myName.setAttribute("class", "name");
document.body.appendChild(myName);

const aboutMe = document.createElement("h2");
aboutMe.innerText = "About Me:";
aboutMe.setAttribute("id", "about-me");
document.body.appendChild(aboutMe);

const personalDetails = document.createElement("ul");
personalDetails.innerText = "Personal Details";
personalDetails.setAttribute("class", "my-details");
aboutMe.appendChild(personalDetails);

const hobbies = ["play basketball", "read books", "go hiking", "lift weights"];
for (let i = 0; i < hobbies.length; i++) {
    let hobby = document.createElement("li");
    hobby.innerText = `I like to ${hobbies[i]}.`;
    hobby.setAttribute("class", "detail");
    personalDetails.appendChild(hobby);
}

let currentTime = Date();
const updateTime = function() {
    currentTime = Date();
    clock.innerText = `I live in Lafayette, California, and it's currently ${currentTime} here.`;
}

setInterval(updateTime, 1000);
const clock = document.createElement("li");
clock.innerText = `I live in Lafayette, California, and it's currently ${currentTime} here.`;
clock.setAttribute("class", "detail");
personalDetails.appendChild(clock);
