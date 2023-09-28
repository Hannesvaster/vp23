const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const pageHead = '<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="utf-8">\n\t<title>Hannes. V 2023</title>\n</head>\n<body>';
const pagebanner = '\n\t<img src="banner.png" alt="Kursuse bänner">';
const pageBody = '\n\t<h1>Hannes Väster</h1>\n\t<p>See veebileht on valminud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate instituudi informaatika eriala õppetöö raames. 13.09.2023 edit</p>';
const pageFoot = '\n\t<hr>\n</body>\n</html>';

http.createServer(function(req, res){
	let currentURL = url.parse(req.url, true);
	console.log(currentURL);
	if (currentURL.pathname === "/"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pagebanner);
		res.write(pageBody);
		res.write(pageFoot);
		res.write('\n\t<hr>\n\t<p><a href="addname">Lisa oma nimi!</a>!</p>');
		console.log("Keegi vaatab")
		return res.end();
	}
	
	else if (currentURL.pathname === "/addname"){
	else if (currentURL.pathname === "/banner.png"){
		console.log("Tahame pilti");
		let bannerPath = path.join(__dirname, "public", "banner");
		fs.readFile(bannerPath + currentURL.pathname, (err, data)=>{
		if (err){
			throw err;	
		}
		else {
			res.writeHead(200, {"Content-type": "image/png"});
			res.end(data);
		}
	})
	};

}).listen(5111);