const express=require('express');
const app=express();
const port=8000;
const db=require('./config');
app.use('/api',require('./routes'));

app.listen(port,function(req,res){
    console.log(`Server is running at port:${port}`);
})
