Simple File Management Tool

A basic Node.js file management tool built using core modules. Allows you to create, read, and delete files via HTTP requests.

Features include creating files with custom content, reading file contents, deleting files, and it uses only Node.js core modules (fs, path, http, events).

To install, clone the repository with:

git clone https://github.com/dhruv00712/file-manager.git

Navigate into the folder using:

cd file-manager

Run the server with:

node server.js

(Replace server.js with your actual server filename.)

The server runs at http://localhost:3000.

Endpoints include:

Create a file via  
GET /create?filename=yourfile.txt&content=yourtext  
Example:  
http://localhost:3000/create?filename=test.txt&content=HelloWorld

Read a file via  
GET /read?filename=yourfile.txt  
Example:  
http://localhost:3000/read?filename=test.txt

Delete a file via  
GET /delete?filename=yourfile.txt  
Example:  
http://localhost:3000/delete?filename=test.txt

Note that all operations use HTTP GET for simplicity, but ideally POST and DELETE methods should be used.

Files are stored in the project directory.

Ensure Node.js is installed on your system.

For testing, you can use a browser, curl, or Postman.

Example curl commands:

Create a file:

curl "http://localhost:3000/create?filename=example.txt&content=HelloWorld"

Read a file:

curl "http://localhost:3000/read?filename=example.txt"

Delete a file:

curl "http://localhost:3000/delete?filename=example.txt"

License: MIT © Dhruv
