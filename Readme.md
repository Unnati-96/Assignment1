#First Assignment

Step 1: Downloading Node for windows
check whether node is installed or not using "node -v"
if not then goto "https://nodejs.org" and download the LTS version(recommended for users).
Follow the installation process,by clicking on next option. Once done, verify it using "node -v" and also check npm by "npm -v".

Step2: Folder and Files setup
.create a folder and make it a git repo using git init (to track changes).
open terminal move to the root/working directory and run command npm init(intiliazes new nodejs project by creating a package.json file in the current directory).
. run npm i (to install all the packages and dependencies mentioned inthe package.json);it will create a node_modules folder and package.lockjson file.

Step3: install express using "npm i express"
.create server using express,check it using "node .\index.js" 
installing nodemon to prevent refreshing or restarting server on every change("nodemon .\index.js").
.created testing route for this create routes folder(defining the route/path) and controllers folder (defining the action/function mapped with the route) and added it to index.js(using app.use()).
.Downloaded MongoDB Compass

Step3:Connecting to Database
.Install mongoose package and using mongoose.connect() to connect to mongodb database.
(mongodb connection string)

Step4: Creating Model
.creating userSchema and userModel using mongoose.

Step5: CRUD
.Create: used user.create() method of mongoose inthe controller(createUser) to create collection inthe DB and then imported this in it's defined route(with post method) and then added this route to the index.js.
 
.Read: used user.find({}) method of mongoose inthe controller to fetch all the users and then imported this in it's defined route(with get method) and then added it to the index.js.

.Update: used user.findByIdAndUpdate() of mongoose inthe controller(updateUser) to update the user in the DB and then imported this in it's defined route(with put method and dynamic parameter(id)) and then added it to the index.js.

.FindById: used user.findById() of mongoose inthe controller(getUser) to get specific user and then imported it inthe defined route(with get method and dynamic parameter(id)) and then added it to the index.js.

.Delete: used .FindByIdAndDelete() of mongoose inthe controller(delUser) to del the specific user and then imported this in it's defined route(with delete method() and dynamic parameter(id)) and then added it to the index.js.




