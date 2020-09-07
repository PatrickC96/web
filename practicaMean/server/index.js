const express = require('express')
const morgan = require('morgan')

const app = express()


const { mongoose } = require('./database');

app.use('/api/employees',require('./routes/employee.routes'))
//settings
app.set('port',process.env.PORT || 3000)

// process.env.PORT para el puerto de la nuve



//middlewares
app.use(morgan('dev'))
app.use(express.json())


// app.use(express.json())
// app.use(logger)
// req.body constate

//reutes

//starting the server
app.listen(app.get('port'),()=>{
    console.log("Server on port ",app.get('port'))
})


// const express = require('express');
// const cors = require('cors');
// const app = express();

// const { mongoose } = require('./database');

// // Settings
// app.set('port', process.env.PORT || 3000);

// // Middlewares
// app.use(cors({origin: 'http://localhost:4200'}));
// app.use(express.json());

// // Routes
// app.use('/api/employees', require('./routes/employee.routes'));

// // starting the server
// app.listen(app.get('port'), () => {
//     console.log(`server on port ${app.get('port')}`);
// });