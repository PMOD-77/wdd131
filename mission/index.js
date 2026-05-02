let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    console.log("Value is: " + current);
    if (current == 'dark') {
        document.body.style.backgroundColor = "#1a1a1a";
        document.querySelector('#content').style.backgroundColor = "#2b2b2b";
        document.querySelector('#content').style.border = "1px solid #444";
        document.querySelector('h1').style.color = "#ffffff";
        document.querySelector('h2').style.color = "#7ab8e8";
        document.querySelector('hr').style.borderTop = "1px solid #555";
        document.querySelectorAll('p').forEach(p => p.style.color = "#ffffff");
        document.querySelectorAll('li').forEach(li => li.style.color = "#ffffff");
        logo.src = "images/byui-logo-white.png";
        logo.style.width = "200px";
    } else {
        document.body.style.backgroundColor = "#e8e8e8";
        document.querySelector('#content').style.backgroundColor = "white";
        document.querySelector('#content').style.border = "1px solid #999";
        document.querySelector('h1').style.color = "#000000";
        document.querySelector('h2').style.color = "#035f9c";
        document.querySelector('hr').style.borderTop = "1px solid #ccc";
        document.querySelectorAll('p').forEach(p => p.style.color = "#000000");
        document.querySelectorAll('li').forEach(li => li.style.color = "#000000");
        logo.src = "images/byui-logo-blue.webp";
        logo.style.width = "250px";
    }
    console.log("content div:", document.querySelector('#content'));
    console.log("h1:", document.querySelector('h1'));
}