
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// app.post('/users', (req, res) => {
//     console.log('POST API Called');
//     const user = req.body;
//     user.id = user.length + 1; // User er Sathe new data add kora
//     users.push(user);
//     // console.log(user);
//     console.log(req.body);
//     res.send(user);
// })

app.get('/', async (req, res) => {
    res.send(' Social Media Running Server');
})
app.listen(port, () => console.log(`Social Media Running ${port}`));
