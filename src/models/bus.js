const bus = (sequelize, type) => {
    return sequelize.define('buses', {
        id_bus: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        conductor_encargado_bus: type.STRING,
        capacidad_bus: type.STRING,
        placa_bus: type.STRING,
        nombres_cooperativa_bus: type.STRING,
        nombre_copiloto_bus: type.STRING,
        partida_ruta: type.STRING,
        destina_ruta: type.STRING,

        crearBus: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarBus: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = bus