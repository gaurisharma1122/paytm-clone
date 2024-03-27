const express=require('express');
const cors= require('cors');
const app= express();
const rootRouter= require('./router/index');
const { PORT } = require('./config');

app.use(cors());
app.use(express.json());
app.use('/api/v1', rootRouter);

app.listen(PORT, ()=>{
    console.log('App listening on port: 3000');
})