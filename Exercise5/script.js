document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', () => {
        const audio = new Audio(button.getAttribute('data-audio'));
        audio.play();/*this is for the audio that plays when you click*/
    });
});

document.getElementById('speakButton').addEventListener('click', () => {
    const text = document.getElementById('speechInput').value;
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);/*this is for the text to speech*/
});
