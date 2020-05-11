const app = require('./app')

const port = process.env.PORT || 9000
app.listen(port,()=>{
    console.log(`Serving on port ${port}`)
})