const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

const app = express();


app.use(cors({

  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()); 


app.use('/api/posts', postsRouter);
app.use('/api/users', usersRouter);

mongoose.connect(
  'mongodb+srv://elsayedmohamed01065813602:drUimful719CFgwZ@cluster0.wzvepiy.mongodb.net/nti?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => console.log(" MongoDB Connected"))
.catch((err) => console.error(" MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
