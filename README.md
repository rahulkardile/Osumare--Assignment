# Osumare--Assignment

**# Frontend Assignment link**
url: https://osumare-assignment.vercel.app

**Backend
Installation**

# Clone the repository 
git clone https://github.com/rahulkardile/Osumare--Assignment.git

Navigate to the project directory
cd server

**Scripts**
start: Runs the application in production mode.
npm start

build: Installs dependencies and compiles TypeScript to JavaScript.

bash
Copy code
npm run build

watch: Compiles TypeScript files in watch mode.

bash
Copy code
npm run watch

dev: Runs the application with nodemon for development.

bash
Copy code
npm run dev

**api endpoints**
get /api/get: fetch data with pagination.

url: http://localhost:3300/api/get?page=1
get /api/get/
: fetch a specific item by id.

url: http://localhost:3300/api/get/:id
post /api/create: create a new item.

url: http://localhost:3300/api/create
put /api/update/
: update an existing item by id.

url: http://localhost:3300/api/update/:id
delete /api/delete/
: delete an item by id.

url: http://localhost:3300/api/delete/:id