# Application Autos

## Server app

This is a Node.js server app that provides a REST API for managing a list of autos. The app uses Express and MongoDB for the server and database, respectively.

### Prerequisites:
* Node.js
* MongoDB

### Installation:

1. Clone the repository:
```
git clone https://github.com/Alekseyshing/Autos.git
```
2. Install the dependencies:
```
cd auto-project-server
npm install
```

### Running the app:
1. Start the MongoDB server:
```
mongod
```
2. Start the app:
```
npm start
```

The app will be running at http://localhost:3000.

## API

The following endpoints are available:
* `GET /autos`: Get a list of autos
* `POST /autos`: Add a new auto
* `DELETE /autos/:id`: Delete an auto

## Client app 

This is a Node.js command line interpreter that can work with the server app to perform REST API operations.

### Prerequisites
* Node.js

### Installation: 
1. Clone the repository:
```
git clone https://github.com/Alekseyshing/Autos.git
```
NOTE: If you cloned already do not repeat 1st point 
2. Install the dependencies:
```
cd auto-project-client
npm install
```
3. Run the app 
```
npm start
```
4. To perform an action, pass the action and the arguments as command line arguments.
```
node dist/app.js [action] [arguments]
```
The following actions are available:

get: Get a list of autos
***
add: Add a new auto
***
delete: Delete an auto

#### Examples:
##### Get a list of autos
```
node dist/app.js get
```

##### Add a new auto
```
node dist/app.js add 123 Civic Honda 2020 350000 Japan
```

##### Delete an auto
```
node dist/app.js delete 123
```