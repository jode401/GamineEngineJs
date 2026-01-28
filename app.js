const express = require('express')
const app = express()
app.listen('3000', () => {
})
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('', (req, res) => {
    res.render('index')
})