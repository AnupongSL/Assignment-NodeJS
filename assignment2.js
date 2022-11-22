const express = require('express');

const app = express();


app.use('/user', (req, res, next) => {
  console.log('URL === /user');
  res.send('Hello User!');
})
app.use('/', (req, res, next) => {
  console.log('URL === /');
  res.send('Hello My home page!');
});


app.listen(3000);