const express = require('express');
const { json } = require('body-parser');
const bookControl= require ('./controllers/books_controller');
//^object with methods, methods now usable on index.js
const app = express();

app.get('api/books', bookControl.read);
app.post('api/books', bookControl.create);
app.put('api/books/:id', bookControl.update);
app.delete('api/books/:id', bookControl.delete);
app.use(json());
app.use(express.static (`${__dirname}/../public/build`));
const port = 3000;
















app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});