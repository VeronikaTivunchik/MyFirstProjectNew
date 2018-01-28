var fs = require("fs");

function day1(response) {
    console.log("Request handler 'day1' was called.");
    fs.readFile("./text1.html", "binary", function(error, file) {
        if(error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write(file, "binary");
            response.end();
        }
    });

}

function month1(response) {
    console.log("Request handler 'month1' was called.");
    fs.readFile("./text1.html", "binary", function(error, file) {
        if(error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write(file, "binary");
            response.end();
        }
    });
}

function day2(response) {
    console.log("Request handler 'day2' was called.");
    fs.readFile("./text1.html", "binary", function(error, file) {
        if(error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write(file, "binary");
            response.end();
        }
    });
}

function month2(response) {
    console.log("Request handler 'month2' was called.");
    fs.readFile("./text1.html", "binary", function(error, file) {
        if(error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.day1 = day1;
exports.month1 = month1;
exports.day2 = day2;
exports.month2 = month2;