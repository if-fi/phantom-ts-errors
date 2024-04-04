import * as fs from "fs";

//2 errors
fs.createReadStream("file.txt", {
    encoding: "binary",
    highWaterMark: 7296,
});
