function getCode ()
{
    var request = require('request');
    var options = {
        'method': 'GET',
        'url': 'https://cloudvolumesgcp-api.netapp.com/v2/projects/779740114201/locations/-/Volumes',
        'headers': {
          'Content-Type': 'application/json'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
      });
} 
getCode();