const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const realvalue = (tempval, orgval) => {
  let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
  temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max);
  temperature = temperature.replace("{%tempmin%}", orgval.main.temp_min);
  temperature = temperature.replace("{%location%}", orgval.sys.country);
  temperature = temperature.replace("{%country%}", orgval.name);

  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=a2b6ba712d6cb1d70893b6b195312c3d"
    )
      .on("data", (chunk) => {
        const obj = JSON.parse(chunk);
        const arr = [obj];

        const realTimeData = arr
          .map((val) => realvalue(homeFile, val))
          .join("");
        res.write(realTimeData);
        console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("Connection closed due to : ", err);
        res.end();
      });
  } else {
    res.end("File Not Found");
  }
});
server.listen(8000, "127.0.0.1");
