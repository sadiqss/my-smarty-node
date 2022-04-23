const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look! I can code Node now!! with auto restart !!!! ')
});
const users = [
    { id: 1, name: 'David', email: 'david@gmail.com', phone: '01245' },
    { id: 2, name: 'Vicky', email: 'Vicky@gmail.com', phone: '012345' },
    { id: 3, name: 'mike', email: 'Mike@gmail.com', phone: '012345' },
    { id: 4, name: 'Richard', email: 'Richard@gmail.com', phone: '012345' },
    { id: 5, name: 'Einestain', email: 'Einestain@gmail.com', phone: '012345' },
    { id: 6, name: 'miker', email: 'Newton@gmail.com', phone: '012345' },
    { id: 7, name: 'shakespear', email: 'shakespear@gmail.com', phone: '012345' },
]

app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }


});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'apple'])
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle flavour')
})

app.listen(port, () => {
    console.log('Listening to port', port);
})