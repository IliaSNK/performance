const express = require('express');
const cors = require('cors');
const performanceRouter = require('./routes/performance.routes');
const PORT = 3000;
const HOST = '192.168.1.98';


const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', performanceRouter);


app.listen(PORT, HOST, () => {
    console.log(`Server has been started by ${PORT} port`);
})