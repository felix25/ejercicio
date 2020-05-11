const TicketModel = require('../models').Ticket
const UsuarioModel = require('../models').Usuario
module.exports ={
    authenticate(req,res){
       // console.log(req.body)
        const {email,password}  = req.body
        if (!email || !password) {
            return res
              .status(400)
              .send({ message: "Por favor, llene todos los campos.", status: res.statusCode });
        }
        UsuarioModel.findOne({
            where: {
                email: email,
                pass: password
              }
        }).then(user=>{
            if(!user){
                return res.status(400).send({
                    status: res.statusCode,
                    message:res.statusCode
                })
            }
            res.status(200).send({
                status: res.statusCode,
                user:user,
                id:user.id,
                nombre:user.nombre
            })
        }) .catch(err =>{
            res.status(500).send({
                message:err,
                status:res.statusCode
            })
        })
    }
}