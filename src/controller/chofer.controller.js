const choferCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

choferCtl.mostrar = (req, res) => {
    res.render('chofer/agregar');
}

//mandar
choferCtl.mandar = async (req, res) => {
    const id =req.id_chofer
    const { cedula_chofer, nombres_chofer, apellidos_chofer, sexo_chofer, estado_civil_chofer, fecha_nacimiento_chofer, direccion_chofer, email_chofer, celular_chofer, tipo_licencia,fecha_emision_licencia,fecha_vencimiento_licencia  } = req.body
    const nuevoEnvio = {
        cedula_chofer, 
        nombres_chofer, 
        apellidos_chofer, 
        sexo_chofer, 
        estado_civil_chofer, 
        fecha_nacimiento_chofer, 
        direccion_chofer, 
        email_chofer, 
        celular_chofer,
        tipo_licencia,
        fecha_emision_licencia,
        fecha_vencimiento_licencia
    }
    await orm.chofer.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/chofer/listar/')
}

choferCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from choferes')
    res.render('chofer/listar', { lista })
}

//traer datos
choferCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from choferes where id_chofer =?', [ids])
    res.render('chofer/editar', { lista })
}

choferCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { cedula_chofer, nombres_chofer, apellidos_chofer, sexo_chofer, estado_civil_chofer, fecha_nacimiento_chofer, direccion_chofer, email_chofer, celular_chofer,tipo_licencia,fecha_emision_licencia,fecha_vencimiento_licencia  } = req.body
    const nuevoEnvio = {
        cedula_chofer, 
        nombres_chofer, 
        apellidos_chofer, 
        sexo_chofer, 
        estado_civil_chofer, 
        fecha_nacimiento_chofer, 
        direccion_chofer, 
        email_chofer, 
        celular_chofer,
        tipo_licencia,
        fecha_emision_licencia,
        fecha_vencimiento_licencia
    }
    await orm.chofer.findOne({ where: { id_chofer: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/chofer/listar/');
}
choferCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.chofer.destroy({ where: { id_chofer: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/chofer/listar/');
        })
}


module.exports = choferCtl