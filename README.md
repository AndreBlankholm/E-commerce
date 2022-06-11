


# <ins>E-Commerce</ins>
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)![](https://img.shields.io/badge/-Sequelize-d3d3d3?style=for-the-badge&logo=sequelize&logoColor=52B0E7)![](https://img.shields.io/badge/-Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white)
#
## <ins>User Story</ins>
A manager at an internet retail company wants a back end for a e-commerce website that uses the latest technologies so that his/her company can compete with other e-commerce companies.

## <ins>Installation</ins>
Type `npm i` or `npm install` in the integrated terminal to install all depencies for this program.

This Application is utilizing a .env file. You will notice a file named ".env.EXAMPLE". Rename the file ".env" and fill in the `DB_USER` and `DB_PASSWORD` with your mysql login information. 

Open mysql with command `mysql -u root -p` in order to log in to your mysql. Run the schema with `source db/schema.sql` 

`Exit` your sequal and return to your integrated terminal where you will run the seeds with `node seeds` and run the server with `node server.js`

Installation Example:

![instructions](https://user-images.githubusercontent.com/85041715/132648756-1adc308c-6c0f-4b38-bcdb-d44e8d373aae.gif)

Open Insomnia and import the template.json file inside of the insomnia file, by selecting create and importing from file.

![](./images/insomnia_import.png)

## <ins>Usage</ins>
 
Insomnia allows you to run different methods on different routes, and for this application we are testing the databases capabilities. The database is capable of handling a POST, GET, PUT and DELETE route for Categories, Tags and Products. The template.json allows you to have the preset functions as well as the appropriate structure for the json for each item. Simply change the values in order to Create, Read, Update or Delete any of the items.

Example of application:
 
![demo](https://user-images.githubusercontent.com/85041715/132649582-ab7dce9b-0a1f-4ab6-9b2b-6a352a9709eb.gif)

## <ins>License</ins>
![](https://img.shields.io/badge/License-MIT%20-blue?style=flat-square)

This project is covered under MIT


## <ins>Links</ins>
Github: https://github.com/AndreBlankholm/E-commerce     
Video: https://drive.google.com/file/d/1CZHThVqiunvk0ZOcL9g-YAM0gmR2TW9L/view?usp=sharing