var fs   = require('fs');
var path = require('path');

var newDir = path.join(__dirname,'temp');
var sourceFile = __filename;
var targetFile = path.join(newDir,'target');

fs.mkdir(newDir,function(err){
	if(err){
		console.log(err);
	}else{
		fs.readFile(sourceFile,{encoding:'utf8'},function(err,contents){
			if(err){
				console.log(err);
			}else{
				fs.writeFile(targetFile,contents,function(err){
					if(err){
						console.log(err);
					}else{
						console.log('All done');
					}
				});
			}
		});
	}
});

