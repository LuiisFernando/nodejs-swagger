const initializeRoutes = (app) => {
    app.post('/users', (req, res) => {
        console.log(`post ${req.body}`)
        res.json('ok')
    })

    app.get('/users/:id', (req, res) => {
        console.log(`get ${req.params.id}`)
        res.json(req.params.id)
    })

    app.delete('/users/:id', (req, res) => {
        console.log(`delete ${req.params.id}`)
        res.json(req.params.id)
    })

    app.put('/pet/:id', (req, res) => {
        console.log(`put ${req.params.id}`)
        res.json('ok')
    })

    app.get('/pet/:id', (req, res) => {
        console.log(`get ${req.params.id}`)
        res.json('ok')
    })
}

module.exports = initializeRoutes