const encomienda_remitente = (sequelize, type) => {
    return sequelize.define('encomienda_remitentes', {
        id_encomienda_remitente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres_remitente: type.STRING,
        cedula_remitente: type.STRING,
        telefono_encomienda_remitente: type.STRING,
        email_remitente: type.STRING,
        nombres_destinatario: type.STRING,
        cedula_destinatario: type.STRING,
        direccion_destinatario: type.STRING,
        telefono_destinatario: type.STRING,
       nombres_cooperativa_detalle_encomienda: type.STRING,
       tamano_detalle_encomienda: type.STRING,
       fecha_envio_detalle_encomienda: type.STRING,
       numero_registro_detalle_encomienda: type.STRING,
    
        crearEncomienda_remitente: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarEncomienda_remitente: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = encomienda_remitente