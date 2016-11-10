var fs   = require('fs');
var path = require('path');

var newDir = path.join(__dirname,'temp');
var sourceFile = __filename;
var targetFile = path.join(newDir,'target');

fs.mkdir(newDir,makedir);

function makedir(err){
	if(err){
		console.log(err);
	}else{
		fs.readFile(sourceFile,{encoding:'utf8'},readContent);
	}
}

function readContent(err,contents){
	if(err){
		console.log(err);
	}else{
		fs.writeFile(targetFile,contents,wroteFile);
	}
}

function wroteFile(err){
	if(err){
		console.log(err);
	}else{
		console.log('All done');
	}
}

