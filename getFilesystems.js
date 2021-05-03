//Import express.js module and create its variable.
const express=require('express');
const app=express();
const request = require('request');
var server = "https://cloudvolumesgcp-api.netapp.com"
//const service_account_file = '/Users/arjunan/Downloads/ncv-beta-demo-eccee8711557.json'
const project_number = 779740114201
const location = "us-central1"
var baseURL = server + "/v2/projects/"

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
    //console.log (token)
    getFilesystems(token)
	});
});

//Creates the server on default port 8000 and can be accessed through localhost:8000
const PORT=8000;

//const HOST = 'localhost';

//app.listen(PORT, HOST, ()=>console.log(`Server connected to http://${HOST}:${PORT}`));
app.listen(PORT, ()=>console.log(`Server connected to ${PORT}`));

function getFilesystems(token){
  //console.log (token)
  var options = {
    'method': 'GET',
    'url': String(baseURL) + String(project_number) + "/locations/" + location + "/Volumes",
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
