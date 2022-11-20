const express = require('express')
const app = express()

// this is a generic method of getting all items
// app.get('/', (req,res) => {
//     res.send('Hello World')
// }) 
app.use(express.json()) 
app.use(express.urlencoded({extended: false}))
app.use('/api/routes',require('./router/route'))
app.listen(3000, ()=>{
    console.log('server runing on port 3000')
})
// on app.use('/api/routes, even if i put '/api/route, i still get results. According to my understanding,its because the file route has that variable of routes in it and it required every element in the Users file,but also the file itself is under a folder router which is the one we exported,so basically everything is under the control of the folder).


