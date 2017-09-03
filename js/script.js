function name() {
	var personName = prompt("Enter name:","Petro");
	if(personName==='') {
		alert("Name can't be empty!");
		personName = prompt("Enter name:","Petro");
	}
	if (!isNaN(personName)) {
		alert("Auch, can't be a number!! Please, write only words, smth like : Petro ");
		personName = prompt("Enter name:","Petro");
	}

	return personName;
}

personName=name();

function time() {
	var sometime = prompt("Enter time in true format as example shows:","00:00");
	if(sometime==='') {
		alert("Time can't be empty and please write in true format 00:00 !");
		sometime = prompt("Enter time in true format as example shows:","00:00");
	}

	if(!isNaN(sometime)){
    	alert("Auch, can't be a number!! Please, write smth like : 00:00 ");
        sometime = prompt("Enter time in true format as example shows:","00:00");
    }

	// regular expression to match required time format
    re = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

    if(!sometime.match(re)) {
      alert("Invalid time format: " + sometime + ", please write in true format 00:00 or 0:00 !!!");
      sometime = prompt("Enter time in true format as example shows:","00:00");
    }

	return sometime;
}


sometime=time();

function place() {
	var somePlace = prompt("Enter place:","Ukraine");
	if(somePlace==='') {
		alert("Whoa..Whoa..Please write a place not empty!");
		somePlace = prompt("Enter place:","Ukraine");
	}

	if (!isNaN(somePlace)) {
		alert("Auch, can't be a number!! Please, write only words, smth like : Ukraine ");
		somePlace = prompt("Enter place:","Ukraine");
	}
	return somePlace;
}

somePlace=place();

function eventTest() {
	var event = prompt("Enter event:","meeting");
	if(event==='') {
		alert("Event can't be empty. Please write some event below!");
		event = prompt("Enter event:","meeting");
	}
	if (!isNaN(event)) {
		alert("Auch, can't be a number!! Please, write only words, smth like : meeting ");
		event = prompt("Enter event:","meeting");
	}
	return event;
}

event=eventTest();

alert("Go to console!!!");

console.log(personName + " " +"has a"+ " "+ event + " "+ "today at"+ " "+sometime+ " "+"somewhere in" +" "+somePlace+".");
