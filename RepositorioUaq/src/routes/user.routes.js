import { Router } from 'express'
const router = Router()
const upload = require('../libs/storage')

import *as userCtrl from '../controllers/user.controller'
import {authjwt, verifySignup} from '../middlewares'

router.get('/',[
    //authjwt.verifyToken, 
    //authjwt.isAdmin,
    //verifySignup.checkRolesExisted
], userCtrl.getUsers)

router.get('/:usersId',[
    //authjwt.verifyToken, 
    //authjwt.isAdmin,
    verifySignup.checkRolesExisted
], userCtrl.getUsersById)



router.post('/', [
    upload.single('image'),
    verifySignup.checkRolesExisted
], userCtrl.createUser)

router.put('/:usersId',[
    //authjwt.verifyToken, 
    //authjwt.isAdmin,
    verifySignup.checkRolesExisted
], userCtrl.updateUsersById)

router.delete('/:usersId',[
    //authjwt.verifyToken, 
    //authjwt.isAdmin,
    verifySignup.checkRolesExisted
], userCtrl.deleteUsersById)



export default router;