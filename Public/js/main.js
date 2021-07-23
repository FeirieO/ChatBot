const socket = io();

const chatForm = document.getElementById('chat-form');


//Message from server
socket.on("message", message => {
    console.log(message);
    outputMessage(message);
    
});

//mesage submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

//Get message text
const msg = e.target.elements.msg.value;

// Emit message to server
socket.emit('chatMessage', msg);


//clear input
e.target.elements.msg.value = '';
});

//Output message to DOM
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">Brad <span>9:12pm</span></p>
    <p class="text">
            ${message}
    </p>`;
    
}