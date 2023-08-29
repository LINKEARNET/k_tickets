const cooperativa = (sequelize, type) => {
    return sequelize.define('cooperativas', {
        id_cooperativa: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres_cooperativa: type.STRING,
        numero_identificacion_cooperativa: type.STRING,
        numero_transporte_cooperativa: type.STRING,
        horario_cooperativa: type.STRING,
        contactos_cooperativa: type.STRING,
        nombres_encargado: type.STRING,
        cedula_encargado: type.STRING,
        sexo_encargado: type.STRING,
       celular_encargado: type.STRING,
       telefono_encargado: type.STRING,
       email_encargado: type.STRING,
    

        crearCooperativa: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarCooperativa: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = cooperativa