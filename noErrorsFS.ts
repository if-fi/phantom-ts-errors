import * as fs from "fs";

// 0 errors
fs.createReadStream("file.txt", "binary");
fs.createReadStream("file.txt", {});
