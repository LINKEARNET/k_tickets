const cooperativaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

cooperativaCtl.mostrar = (req, res) => {
    res.render('cooperativa/agregar');
}

//mandar
cooperativaCtl.mandar = async (req, res) => {
    const id = req.id_cooperativa
    const { nombres_cooperativa,numero_identificacion_cooperativa,numero_transporte_cooperativa,horario_cooperativa,contactos_cooperativa,nombres_encargado,cedula_encargado,sexo_encargado,celular_encargado,telefono_encargado,email_encargado} = req.body
    const nuevoEnvio = {
        nombres_cooperativa,
        numero_identificacion_cooperativa,
        numero_transporte_cooperativa,
        horario_cooperativa,
        contactos_cooperativa,
        nombres_encargado,
        cedula_encargado,
        sexo_encargado,
       celular_encargado,
       telefono_encargado,
       email_encargado
    }
    await orm.cooperativa.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/cooperativa/listar/')
}

cooperativaCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from cooperativas')
    res.render('cooperativa/listar', { lista })
}

//traer datos
cooperativaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from cooperativas where id_cooperativa =?', [ids])
    res.render('cooperativa/editar', { lista })
}

cooperativaCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { nombres_cooperativa,numero_identificacion_cooperativa,numero_transporte_cooperativa,horario_cooperativa,contactos_cooperativa,nombres_encargado,cedula_encargado,sexo_encargado,celular_encargado,telefono_encargado,email_encargado} = req.body
    const nuevoEnvio = {
        nombres_cooperativa,
        numero_identificacion_cooperativa,
        numero_transporte_cooperativa,
        horario_cooperativa,
        contactos_cooperativa,
        nombres_encargado,
        cedula_encargado,
        sexo_encargado,
       celular_encargado,
       telefono_encargado,
       email_encargado
    }
    await orm.cooperativa.findOne({ where: { id_cooperativa: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/cooperativa/listar/');
}
cooperativaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.cooperativa.destroy({ where: { id_cooperativa: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/cooperativa/listar/');
        })
}


module.exports = cooperativaCtl