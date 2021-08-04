const express = require('express') //express 가져오기
const app = express() // express를 이용해서 app을 만든다. 
const port = 3000 // 

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://uzennkss:uzennkss@reactt.wobs8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify : false
}).then(()=> console.log('MongoDB Connected....'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})