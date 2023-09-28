const http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Hannes. V 2023</title></head><body>');
	res.write('<h1>Hannes Väster</h1><p>See veebileht on valminud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate instituudi informaatika eriala õppetöö raames. 13.09.2023 edit</p>');
	res.write('<hr></body></html>');
	return res.end();
	console.log("Keegi vaatab")
}).listen(5111);