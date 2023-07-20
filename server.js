const express=require('express')
const app=express()
const PORT=process.env.PORT||8000;
app.get('/',(req,res)=>{
     res.send("I am homepage")
});
app.get('/about',(req,res)=>{
     res.send('I am about Page ')
});
app.get('/contact',(req,res)=>{
     res.send(' <a href="mailto:support@pwskills.com">suppor@pwskills.com</a>')
})
app.listen(PORT,()=>{
     console.log(`Server is running on the PORT ${PORT} `);
})