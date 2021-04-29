const request = require('request');

function getFilesystems(){
  var options = {
    'method': 'GET',
    'url': 'https://cloudvolumesgcp-api.netapp.com/v2/projects/779740114201/locations/us-central1/Volumes',
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiAiSldUIiwgImFsZyI6ICJSUzI1NiIsICJraWQiOiAiZWNjZWU4NzExNTU3MDYzZTQ3OTUxYWI2YWMzMDE4ZGYzNmYxMGFjZiJ9.eyJpc3MiOiAicHJhYnUtdGVzdDFAbmN2LWJldGEtZGVtby5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsICJzdWIiOiAicHJhYnUtdGVzdDFAbmN2LWJldGEtZGVtby5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsICJpYXQiOiAxNjE5NjU0NDc5LCAiZXhwIjogMTYxOTY1ODA3OSwgImF1ZCI6ICJodHRwczovL2Nsb3Vkdm9sdW1lc2djcC1hcGkubmV0YXBwLmNvbSJ9.FszzRFwlCIdE70jCzzXQbAg1emF3sgnSKRJXGxIdGjw6XB0Y78OUI9z7e_TnbvavLwePEsQe5rzcfMP7FbtZK4C4b29g_QZmXd0LniPq1-2a9EWLu-DgFDUMQXFUmPU7JftWa0A4DL86JoIkbPV8ZaSx1o0Ngh5alaVfk7vtO-i5jp5V59iDT4SIoBYXzpNX0Q06wyjfvquW0hr_vFNxDeOWeSt2QcfC9pbJeGo7LNj3y3ePNzBUQD0I5elMklsTrHpRyaey6Q72TgNoSQx92nOSovOhqZoaez4vLIIhJ5Y6TVo2xwg0F_a_U2TD6A__GoKxV9re-LiU21x2T1MScg'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
  
}
getFilesystems()
