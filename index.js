const express= require('express')
const app = express()

const port= 5000;

app.get('/', (req, res)=>{
   res.send('REport Rise is live')
})
app.listen(port, (req, res)=>{
    console.log(`runnng at ${port} `)
})