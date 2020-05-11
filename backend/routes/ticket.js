const TicketController = require('../controllers/ticket')

module.exports = (app) =>{
    app.post('/api/ticket',TicketController.ticketSave)
    app.put('/api/ticket/:ticketid',TicketController.ticketUpdate)
    app.delete('/api/ticket/:ticketid',TicketController.tikcetDelete)
    app.get('/api/ticket',TicketController.ticketAll)
    app.put('/api/ticket/pedir/:idticket',TicketController.pedirTicket)
    app.get('/api/ticketUsuarios',TicketController.usuariosAll)
    app.get('/api/user/:iduser',TicketController.getUserById)
    
}