var output = document.getElementById('output');

fetch("https://sayme-whoami.glitch.me/whoami").then(response => response.json()).then(data => output.innerHTML = JSON.stringify(data));