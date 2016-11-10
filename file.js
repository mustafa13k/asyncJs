var path = require('path');
var fs   = require('fs');


var dir = path.join(__dirname,'temp');


fs.readFile(__filename, { encoding : 'utf8'},function(err,contents){
	if(err){
		console.log(err);
	}else{
		console.log(contents);
	}
});


//console.log(path.join(__dirname));