var fs   = require('fs');
var path = require('path');

var newDir = path.join(__dirname,'temp');
var sourceFile = __filename;
var targetFile = path.join(newDir,'target');

fs.mkdir(newDir,handlingError(makedir));

function makedir(err){
	fs.readFile(sourceFile,{encoding:'utf8'},handlingError(readContent));
}

function readContent(contents){
	fs.writeFile(targetFile,contents,handlingError(wroteFile));
}

function wroteFile(err){
	console.log('All done');
}

function handlingError(cb){
	return function(err,result){
		if(err){
			console.log(err);
		}else{
			cb(result);
		}
	}
}

