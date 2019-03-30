const fs = require("fs");
var money = fs.readFileSync("./money.json", "utf8");

function record(proj, bal) {
	money[parseInt(proj)] += parseInt(bal);
	fs.writeFile("./money.json", JSON.stringify(money), "utf8", (e, d) => {});
}