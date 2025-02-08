const express = require('express');
const path = require('path');

const fs = require("fs")
// Initialize Express
const app = express();
app.use(express.urlencoded())
app.set('view .engine', 'html')
// Serve static files (like HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('./index.html', (req, res) => {
  res.sendFile('/index.html')
})
app.get('./sign.html', (req, res) => {
  res.sendFile('/sign.html')
})

app.post('/', (req, res) => {
  name = req.body.name
  email = req.body.email
  age = req.body.age
  password = req.body.password


  let outputTowrite = `NAME::${name},/n Email::${email},/n AGE::${age},/n PASSWORD::${password}`
  fs.writeFileSync('output.txt', outputTowrite)
  const params = { "message": "from has submited" }
  res.status(200).render('./sign.html', params)

})

app.post('/', (req, res) => {
  email = req.body.email


  let outputTowrite = `SUBSCRIBE::${email}`
  fs.writeFileSync('subscribe.txt', outputTowrite)
  const params = { "message": "Subsbribe now" }
  res.status(200).render('./index.js', params)
})




// app.get('/about.html',(req,res)=>{
//   res.sendFile('/about.html')
// })
// Set the port for the server to listen on
const PORT = 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});





