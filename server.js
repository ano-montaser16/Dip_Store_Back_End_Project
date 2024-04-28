const app = require('./app');
const connectDb = require('./config/db');

connectDb();

app.listen(3000 , () =>{
  console.log("Server is running on port 3000");
  })