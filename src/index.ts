import express, { Request, Response } from 'express'
const app = express()
const port = 3000

// Define a route
app.get('/', (req: Request, res: Response) => {
    res.send('bank transactions will be here soon')
})

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
