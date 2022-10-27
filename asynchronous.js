//for asynchronous
const fs = require('fs');
//create txt file
fs.writeFile("read-asynchronous.txt", "Hello", (err) => {
    console.log("write file with asynchrous")
})
//overrite
fs.writeFile("read-asynchronous.txt", "This is the asynchronous file", (err) => {
    console.log("overrite file with asynchronous")
})
//append
fs.appendFile("read-asynchronous.txt", "  This require callback function", (err) => {
    console.log("append asynchronous file")
})
//read with buffer data
const buffer = fs.readFile("read-asynchronous.txt", (err, data) => {
    console.log(data)
})
//read without buffer data
const noBufferData = fs.readFile("read-asynchronous.txt", "utf-8", (err, data1) => {
    console.log(data1)
})
//rename
fs.rename("read-asynchronous.txt", "asynchronous.txt", (err) => {
    console.log("Rename the file")
})
//delete
fs.unlink("asynchronous.txt", (err) => {
    console.log("delete the file")
})