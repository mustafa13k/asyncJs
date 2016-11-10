var operation = require('./cbhell');

operation({ some : 'args'} , function(err,result){
	if(err){
		console.log(err);
	}else{
		console.log(result);
	}
});