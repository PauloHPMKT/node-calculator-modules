//importing libraries
const express = require('express')
const path = require('path')

const app = express()

//definindo template engine
app.set('view engine', 'ejs')


//is not necessary to define a middleware static folder when you are using template engine
//middleware public folder
app.use(express.static(path.join(__dirname, 'public')))

//rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Blog do Dev++ - Home' //adding title's page dinamicaly
    })
})

app.get('/posts', (req, res) => {
    res.render('posts', {
        title: 'Blog do Dev++ - Posts'
    })
})

app.use((req, res) => res.send(console.log('Pagina não encontrada')))




//defining server conection
const port = process.env.port || 8080
app.listen(port, () => console.log(`Server is running on port ${port}`))