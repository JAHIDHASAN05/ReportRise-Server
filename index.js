const express= require('express')
const app = express()

const port= 5000;
const category= require('./Data/category.json')
const news= require('./Data/news.json')

const cors=require('cors')
app.use(cors())

app.get('/', (req, res)=>{
   res.send('REport Rise is live')
})

app.get('/category', (req, res)=>{
    res.send(category)
})

app.get('/category/:id', (req, res)=>{
    const id =req.params.id
    const categoryNews= news.filter(n=> n.category_id=== id)
    res.send(categoryNews)
})

app.listen(port, (req, res)=>{
    console.log(`runnng at ${port} `)
})