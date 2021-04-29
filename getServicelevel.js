
//Import express.js module and create its variable.
const express=require('express');
const app=express();
const request = require('request');
const str = require('str');


//Import PythonShell module.
const {PythonShell} =require('python-shell');

//Router to handle the incoming request.
app.get("/", (req, res, next)=>{
	//Here are the option object in which arguments can be passed for the python_test.js.
	let options = {
		mode: 'text',
		pythonOptions: ['-u'], // get print results in real-time
		scriptPath: '/Users/arjunan/PycharmProjects/ntap-CVS-GCP-API', //If you are having get_token.py script in same folder, then it's optional.
    args: ['id_token1'] //An argument which can be accessed in the script using sys.argv[1]
  };
  
	PythonShell.run('get_token.py', options, function (err, result){
		if (err) throw err;
		// result is an array consisting of messages collected
		//during execution of script.
		//console.log('result: ', result.toString());
    //res.send(result.toString())
    //token = result.toString("utf8");
    var str = result.toString('utf8');
    var token = str.substring(9, str.length - 1);
    console.log (token)
    getServicelevel(token)
	});
});

//Creates the server on default port 8000 and can be accessed through localhost:8000
const port=8000;
app.listen(port, ()=>console.log(`Server connected to ${port}`));

function getServicelevel(token){
  //console.log (token)
  var options = {
    'method': 'GET',
    'url': 'https://cloudvolumesgcp-api.netapp.com/v2/projects/779740114201/locations/us-central1/Storage/ServiceLevels',
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
  
}
