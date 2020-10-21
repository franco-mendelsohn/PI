module.exports = function (sequelize, dataTypes) {
    
    let alias = "User";

    let cols =  {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },

        nombre: {
            type: dataTypes.STRING,
            allowNUll: false,
        },

        apellido: {
            type: dataTypes.STRING,
            allowNUll: false,
        },

        apodo: {
            type: dataTypes.STRING,
            allowNUll: false,
        },

        edad: {
            type: dataTypes.DECIMAL,
            allowNUll: false,
        },

        cumpleaños: {
            type: dataTypes.DATE,
            allowNUll: false,
        },

        fecha_registracion: {
            type: dataTypes.DATE,
            allowNUll: false,
            
        },

        lema: {
            type: dataTypes.STRING,
            allowNUll: false,
        },
    };
    
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true,

      };

      const User = sequelize.define(alias, cols, config);

    return User;
   
};
 