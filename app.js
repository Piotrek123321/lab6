const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const errorRoutes = require('./routes/error');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
);

app.use('*', errorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});