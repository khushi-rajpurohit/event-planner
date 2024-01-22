const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '949003',
    database: 'event_management',
    host: 'localhost',
    port: 5432
});

app.use(express.json());

// Register a new user
app.post('/adduser', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const hash_password = await bcrypt.hash(password, 10);

        const create = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hash_password]);

        res.status(201).send('Data uploaded successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

// Authenticate a user
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            return res.status(401).send('Invalid email or password');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).send('Invalid email or password');
        }

        
        const token = jwt.sign({ userId: user.id }, '2358C749753D5', { expiresIn: '1h' });

        res.json({ message: 'login successful',
    status:'succes'});
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

const port = 9000;
app.listen(port, () => {
    console.log(`Server is running on the port: ${port}`);
});
