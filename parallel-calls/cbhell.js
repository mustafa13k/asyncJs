module.exports = function(args,cb){
	call1(args,handlingError(function(result1){
		call2(args,handlingError(function(result2){
			call3(args,handlingError(function(result3){
				cb(null,[result1,result2,result3]);
			}));
		}));
	}));
};


function handlingError(fn){
	return function (err,result){
		if(err){
			cb(err);
		}else{
			fn(result);
		}
	};
}




function call1(args,cb){
	console.log("in call 1");
	setTimeout(cb,randomTime(),null, randomValue());
}

function call2(args,cb){
	console.log("in call 2");
	setTimeout(cb,randomTime(),null, randomValue());
}

function call3(args,cb){
	console.log("in call 3");
	setTimeout(cb,randomTime(),null, randomValue());
}

function randomTime(){
	return Math.floor(Math.random() * 1e3);
}

function randomValue(){
	return Math.floor(Math.random() * 1e10)
}