const encomienda_remitenteCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

encomienda_remitenteCtl.mostrar = (req, res) => {
    res.render('encomienda/agregar');
}

//mandar
encomienda_remitenteCtl.mandar = async (req, res) => {
    const id = req.id_encomienda_remitente
    const { nombres_remitente,cedula_remitente,telefono_encomienda_remitente, email_remitente,nombres_destinatario,
        cedula_destinatario,direccion_destinatario,telefono_destinatario,nombres_cooperativa_detalle_encomienda, tamano_detalle_encomienda,fecha_envio_detalle_encomienda, numero_registro_detalle_encomienda} = req.body
    const nuevoEnvio = {
        nombres_remitente,
        cedula_remitente,
        telefono_encomienda_remitente,
        email_remitente,
        nombres_destinatario,
        cedula_destinatario,
        direccion_destinatario,
        telefono_destinatario,
        nombres_cooperativa_detalle_encomienda,
        tamano_detalle_encomienda,
        fecha_envio_detalle_encomienda,
        numero_registro_detalle_encomienda
       
    }
    await orm.encomienda_remitente.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/encomienda/listar/')
}

encomienda_remitenteCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from encomienda_remitentes')
    res.render('encomienda/listar', { lista })
}

//traer datos
encomienda_remitenteCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from encomienda_remitentes where id_encomienda_remitente =?', [ids])
    res.render('encomienda/editar', { lista })
}

encomienda_remitenteCtl.actualizar = async (req, res) => {
    const ids=req.params.id
    const {nombres_remitente,cedula_remitente,telefono_encomienda_remitente, email_remitente,nombres_destinatario,cedula_destinatario,direccion_destinatario,telefono_destinatario,nombres_cooperativa_detalle_encomienda, tamano_detalle_encomienda,fecha_envio_detalle_encomienda, numero_registro_detalle_encomienda} = req.body
    const nuevoEnvio = {
        nombres_remitente,
        cedula_remitente,
        telefono_encomienda_remitente,
        email_remitente,
        nombres_destinatario,
        cedula_destinatario,
        direccion_destinatario,
        telefono_destinatario,
        nombres_cooperativa_detalle_encomienda,
        tamano_detalle_encomienda,
        fecha_envio_detalle_encomienda,
        numero_registro_detalle_encomienda
        
    }
    await orm.encomienda_remitente.findOne({ where: { id_encomienda_remitente: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/encomienda/listar/');
}

encomienda_remitenteCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.encomienda_remitente.destroy({ where: { id_encomienda_remitente: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/encomienda/listar/');
        })
}

module.exports = encomienda_remitenteCtl