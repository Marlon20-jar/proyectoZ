import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import { createRoles } from './libs/initialSetup'

import documentosRoutes from './routes/documentos.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/user.routes'

require('dotenv').config();

const app = express()
const cors = require('cors');
const puerto = process.env.PORT;
//SETTINGS
app.set('port', puerto || 4000);
createRoles();
app.set('pkg', pkg);
app.use('/public', express.static(`${__dirname}/storage/imgs`))
//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  })
})
//ROUTES
app.use('/api/documentos', documentosRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

export default app;