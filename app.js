const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.get('/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: "pen"
    },
    {
      id: 2,
      name: "pencil"
    },
    {
      id: 3,
      name: "crayon"
    }
  ];

  res.json(products);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
