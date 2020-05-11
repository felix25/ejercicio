const UsuarioController = require('../controllers/usuario')

module.exports = (app) =>{
    app.post('/api/users/authenticate',UsuarioController.authenticate)

}