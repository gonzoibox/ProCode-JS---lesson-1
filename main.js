
//There is a house
//It has a door and an alarm system
//The door has two states - opened/closed
//let doorIsOpen;// true/false
//The alarm system (general state) is switched ON OR switched OFF
//let alarmSystemIsOn;// true/false
//If the door is opened AND alarm system is switched on, then the alarm bell is ringing
//let alarmIsRinging;// true/false

//These variables can only have one of two boolean meaning: true OR false
// let alarmSystemIsOn = prompt("Включена ли система сигнализации в доме?");
// let doorIsClose      = prompt("Открыта ли дверь в доме?");
let alarmSystemOn    = prompt("Is Alarm System On? - true or false");
let doorIsClose      = prompt("Is Door Is Closed?  - true or false");

//Let`s wrap it into function with if-else
function checkMyHouse() {
	let alarm = alarmSystemOn;
	let door = doorIsClose;
	if(alarm == "false" && door == "false") {
		return alert('Alarm system is OFF and Door Is Opened - The House is under the threat!');
		} else if(alarm == "false" && door == "true") {
			return alert('Alarm system is OFF and Door Is Closed - Check the Alarm System');
		} else if(alarm == "true" && door == "true") {
			return alert('Alarm system is ON and Door Is Closed - Very Good');
		} else if(alarm == "true" && door == "false") {
			return alert('Alarm system is Ringind - The Door Is Opened!');
		}
	}

checkMyHouse();
