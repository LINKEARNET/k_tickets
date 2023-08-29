const busCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

busCtl.mostrar = (req, res) => {
    res.render('buses/agregar');
}

//mandar
busCtl.mandar = async (req, res) => {
    const id =req.id_bus  //ojo
    const { conductor_encargado_bus,capacidad_bus,placa_bus,nombres_cooperativa_bus,nombre_copiloto_bus,partida_ruta,destina_ruta } = req.body
    const nuevoEnvio = {
        conductor_encargado_bus,
        capacidad_bus,
        placa_bus,
        nombres_cooperativa_bus,
        nombre_copiloto_bus,
        partida_ruta,
        destina_ruta
    }
    await orm.bus.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/buses/listar/')
}

busCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from buses')
    res.render('buses/listar', { lista })
}

//traer datos
busCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from buses where id_bus =?', [ids])
    res.render('buses/editar', { lista })
}

busCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { conductor_encargado_bus,capacidad_bus,placa_bus,nombres_cooperativa_bus,nombre_copiloto_bus,partida_ruta,destina_ruta } = req.body
    const nuevoEnvio = {
        conductor_encargado_bus,
        capacidad_bus,
        placa_bus,
        nombres_cooperativa_bus,
        nombre_copiloto_bus,
        partida_ruta,
        destina_ruta
    }
    await orm.bus.findOne({ where: { id_bus: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/buses/listar/');
}
busCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.bus.destroy({ where: { id_bus: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/buses/listar/');
        })
}


module.exports = busCtl