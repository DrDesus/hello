const express = require('express');
const app=express();

app.get('*',(req,res,next)=>{
    console.log('new req');
    next();
})

app.get('/hello',(req,res)=>{
    res.send('pisos');
});

app.post('/hello',(req,res)=>{
    let arr=[1,2,3];
    res.send(arr);
})

app.post('/users/:id',(req,res)=>{
    let user={
        name:20,
        age:15,
        pisos:16
    }
    const { params } = req;
    console.log(`id:${params.id}`);
    if(params.id==12){
        res.send(user);
    }
    else res.send('con')
})

app.listen(8080,()=>{
    console.log('server started');
});