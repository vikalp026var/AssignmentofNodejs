const express= require('express')
const app=express()
const PORT=process.env.PORT||3000;
let counter=0;
app.use(express.json());
app.get('/',(req,res)=>{
     res.json({counter});
});
app.get('/increment',(req,res)=>{
     counter++;
     res.json({counter});
})
app.get('/decrement',(res,req)=>{
     counter--;
     res.json({counter})
})
app.listen(PORT,()=>{
     console.log(`Server is running on the port ${PORT}`);
})