#First Assignment
=> Day 1:
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

Step4: Created Model
.created userSchema and userModel using mongoose.
  

=> Day 2: 
Step5: CRUD
.Create: [API: "localhost:3000/task/create"] with POST method and passing the data in the req.body;
used user.create() method of mongoose inthe controller(createUser) to create collection inthe DB and then imported this in it's defined route(with post method) and then added this route to the index.js.
 
.Read:  [API: "localhost:3000/task/read"] with GET method 
used user.find({}) method of mongoose inthe controller to fetch all the users and then imported this in it's defined route(with get method) and then added it to the index.js.

.Update: [API: "localhost:3000/task/update/:id"] with PUT method and passing the data in the req.body;
 used user.findByIdAndUpdate() of mongoose inthe controller(updateUser) to update the user in the DB and then imported this in it's defined route(with put method and dynamic parameter(id)) and then added it to the index.js.

.FindById:  [API: "localhost:3000/getuser/:id"] with get method and passing the id in the parameter(req.params for accessing id)
 used user.findById() of mongoose inthe controller(getUser) to get specific user and then imported it inthe defined route(with get method and dynamic parameter(id)) and then added it to the index.js.

.Delete:  [API: "localhost:3000/task/deluser/:id"] with del method and passing the id in the parameter(req.params for accessing id)
used .FindByIdAndDelete() of mongoose inthe controller(delUser) to del the specific user and then imported this in it's defined route(with delete method() and dynamic parameter(id)) and then added it to the index.js.

=> Day 3:
Step 6:
.fetched user using their name/id using the concept of req.params. [API: "localhost:3000/task/getuser/Anita/30" OR "localhost:3000/task/Anita"]
.search [API:"localhost:3000/task/getuser?name=Anita&age=30" OR "localhost:3000/task/getuser?age=30"] : used user.find(Filter), Here, Filter: an empty object Filter and added properties to this Filter obj if they fulfilled the specified conditions and used req.query for destructuring query parameters,to search users based on their id/name/age/email ,imported this controller in its defined route  (get method). 

#made changes in the previous CRUD operations by replacing .then()/.catch() with try/catch blocks.
#created separate file for mongodb configuration 
#added dotenv package for storing and accessing environment variables(sensitive data or credentials).
#Applied the concept of regex (for name and email(added one more field))


=> Day 4:
Learned Concept of Aggregation Pipeline: aggregate method
.How many users have age 20? (used $match and $count operators)
.What is the average age of all users? (used $group and $avg opeartors or stages )
.List the top 2 most common favFruits among the users.(used $group,$sum,$sort,$limit operators or stages)
.Find the total no. of males and females(used $group and $sum operators )
.List unique favFruits(used $group operator)
.What is the avg no. of hobbies per user? (used $unwind,$group,$sum and $avg operators or stages)
.How many users have "m" as one of their hobby? (used $match and $count operators)
.What are the names and age of users who have "m" as their hobby and apple as favFruit? (used $match operators and , for both fields)
.how many users have "@gmail" intheir email? ($match operator, $count operator and regex "/@gmail\.com$/").




.created a service folder for adding new fields to the database 
.Also created separate routes  and controller files for each aggregate operation





 

