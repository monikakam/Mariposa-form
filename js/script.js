'use strict';

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

const phoneNumber = document.getElementById('phone').value;
const btn = document.getElementById('buttonSent');

function buttonClicked(btn){
    console.log(btn + 'zostal klikniety');
}
