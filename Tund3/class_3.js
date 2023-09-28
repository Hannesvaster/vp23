const firstName = "Hannes";
const LastName = "Väster";
const datetimeValue = require("./datetime_et");
const fs = require("fs");

fs.readFile("txt/vanasõnad.txt", "utf8", (err, data)=>{
	if(err){
		console.log(err);
		
	}
	else {
		//console.log(data);
		//folkWisdom = data;	
		onScreen(data);
	}
});

const onScreen = function(folkWisdom){
	console.log("Programmi autor on: " + firstName + " " + LastName);	
	console.log("Täna on: " + datetimeValue.dateETformatted);
	//console.log(folkWisdom);
	let folkWisdoms = folkWisdom.split(";");
	//console.log(folkWisdoms);
	//console.log(folkWisdoms.length);
	//console.log("Tänane tarkus: " + folkWisdoms[Math.floor(Math.random() * folkWisdoms.length)]);
	//kõige tavalisem for tsükkel (loop)
	for (let i = 0; i < folkWisdoms.length; i ++) {
		console.log("Vanasõna nr " + (i + 1) + ': "' + folkWisdoms[i] + '"');
	}
	//Math.floor(Math.random() * folkWisdoms.length)
	console.log("Kell on: " + datetimeValue.timeETformatted());
	console.log("Praegu on " + datetimeValue.timeOfDayET() + ".");
	 //console.log(datetimeValue.monthsET);
}


//let dateETNow = dateValue.dateETformatted();

