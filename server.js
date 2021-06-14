const express = require('express')
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const app = express()
const PORT = process.env.PORT || 3000



// app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.listen(PORT , () => {
    console.log(`Server Start http://localhost:${PORT}/`)
})

app.get('/', (req, res) => {
    return res.render('home')
})