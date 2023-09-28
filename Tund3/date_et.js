exports.dateETformatted = function (){

	const monthNamesET =["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	let dateET = dateNow + "." + monthNamesET[monthNow] + "." + yearNow;	
	return dateET;
}

console.log(dateETformatted)