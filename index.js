var url = "https://www.google.com/";

function log(message)
{
	//send a HTTP request
	console.log(message);
}

module.exports.log = log;
module.exports.endpoint = url;