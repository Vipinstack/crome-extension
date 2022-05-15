fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(JokesData =>{
    const jokesText = JokesData.attachments[0].text;
    const jokes = document.getElementById("jokesElement").innerHTML= jokesText;

})