const TicketModel = require('../models').Ticket
const UsuarioModel = require('../models').Usuario
//const Model = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports ={
    getUserById(req,res){
        console.log(req.params.iduser)
        TicketModel.findAll({
            where:{
                UsuarioId:req.params.iduser
            }
        })
        .then(user=> res.status(200).send(user))
        .catch(err=>{
            res.status(500).send({
                message:`ocurrio un error ${err}`
            })
        })
    },
    usuariosAll(req,res){
        UsuarioModel.findAll({
            order: [["id", "DESC"]],
            where: {
                id: {
                  [Op.not]: '1'
                }
            }
        }).then(resul=>res.status(200).send(resul))
        .catch(err =>{
            res.status(500).send({
                message:err
            })
        })
    },
    ticketAll(req,res){
        TicketModel.findAll({
            include:[{
                model:UsuarioModel
            }
            ]
        }).then(resul=>res.status(200).send(resul))
        .catch(err=>{
            res.status(500).send({
                message:err
            })
        })
    },
    ticketSave(req,res){
        const {idUsuario,ticket}  = req.body

        UsuarioModel.findByPk(idUsuario).then(user=>{
            return TicketModel.create({
                ticket_string:ticket,
                ticket_status:0,
                UsuarioId:user.id
            }).then(ticket=>{
                return res.status(201).send({
                    ticket
                })
            }).catch(err=>{
                res.status(500).send({
                    message:err
                })
            })
        }).catch(err=>{
            res.status(500).send({
                message:err
            })
        })
    },
    pedirTicket(req,res){
        TicketModel.findByPk(req.params.idticket).then(_ticket=>{
            
            return _ticket.update({
                ticket_status:1
            }).then(ticket=> res.status(200).send(ticket))
            .catch(err=>{
                res.status(500).send({
                    message:`ocurrio un erro al pedir el ticket ${err}`
                })
            })
        }).catch(err =>{
            res.status(500).send({
                message:`El ticket solicitado no exite ${err}`
            })
        })
    },
    ticketUpdate(req,res){
        const {idUsuario,ticket}  = req.body
        TicketModel.findByPk(req.params.ticketid).then(_ticket=>{
           return _ticket.update({
                UsuarioId:idUsuario,
                ticket_string:ticket
            }).then(ticket=>{
                res.status(200).send({
                    ticket
                })
            }).catch(err=>{
                res.status(500).send({
                    message:`ocurrio un erro registro ${err}`
                })
            })
        }).catch(err =>{
            res.status(500).send({
                message:`ocurrio un erro 2 ${err}`
            })
        })
    },
    
    tikcetDelete(req,res){
        return TicketModel.findByPk(req.params.ticketid)
            .then(ticket=>{
            if(ticket){
               return ticket.destroy()
                .then(()=> res.status(200).send({
                    message:'Registro eliminado'
                })).catch(err=>{
                    res.status(500).send({
                        message:err
                    })
                })
            }
        }).catch(err=>{
            res.status(500).send({
                message:err
            })
        })
    }

}