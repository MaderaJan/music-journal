import express from 'express';

const expressApp = express();
const portToListenTo = 8000 // TODO: Toto brát z conf. provideru

expressApp.get('/', (req, res) => {
    res.send('Music Journal Boy!')
})

expressApp.listen(portToListenTo, () => {
    console.log(`listening on port ${portToListenTo}`)
})