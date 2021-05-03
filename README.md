# ntap-CVS-GCP-API-nodejs
The example node js scripts to use GCP - NetApp Cloud volumes service API to dynamically change the service level on the fly.

# Set common variables
Python interpreter : 3.7\
service_account_file = '/Users/arjunan/Downloads/project-beta-demo-xxxxxxxxxxxx.json' #Give your file path for json\
project_number = 123456789                                                            #Give your  project number\
location = "us-central1"                                                              #Enter your region here\
volumeIDdetails = "EnteryourVolumeIDhere"                                             #Enter your volume ID here

In this nodejs get bearer token, I am using the python code to get the token. The get requests are written using nodejs. 

Change the payload variable in the “updateServiceLevel” definition in the python script\
In def updateServiceLevel(): change the payload based on the change required.\
payloadbasic = "{\n    \"serviceLevel\": \"basic\"\n}"\
payloadstandard = "{\n    \"serviceLevel\": \"standard\"\n}"\
payloadExtreme = "{\n    \"serviceLevel\": \"extreme\"\n}"

