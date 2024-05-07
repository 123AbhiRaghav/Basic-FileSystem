const fs = require("fs");

const timedate = new Date();

//current date-time code:
const time = timedate.toLocaleTimeString("en-US", {timeZone: 'Asia/kolkata', hour12:false});
const ttime = time.split(":").join("_");

const date = timedate.toLocaleDateString();
const tdate = date.split("-").join("");

const filename = tdate + "/" + ttime;

//Question 1: 
fs.writeFile("./files/date-time.txt", time, (err) => {
 if(err){
    console.log('error')
 } else {
    console.log('File Created')
 }
});

//Question 2:
fs.readdir("./files", (err, files) => {
    if(err){
        console.log('error')
    } else {
        files.forEach((file) => {
            console.log(file);
        })
    }
})


