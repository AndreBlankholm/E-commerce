const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection'); 


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {  //configuration parameter ({force: true}) means that the databases must sync with the model definitions and associations or they recreate!
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});