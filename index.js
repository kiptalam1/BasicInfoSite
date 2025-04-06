import http from "http";
import fs from "fs";

// create server
const server = http.createServer((req, res) => {
	let filePath = "";
	let contentType = "text/html";

	//check for css request first
	if (req.url === "/styles/index.css") {
		filePath = "./styles/index.css";
		contentType = "text/css";
	} else {
		filePath = "./views/";
		switch (req.url) {
			case "/":
				filePath += "index.html";
				break;
			case "/about":
				filePath += "about.html";
				break;
			case "/contact-us":
				filePath += "contact-us.html";
				break;
			default:
				filePath += "404.html";
				break;
		}
	}
	fs.readFile(filePath, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			res.end(data);
		}
	});
});

server.listen(3000, "localhost", () => {
	console.log("listening at port 3000");
});
