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

        email: {
            type: dataTypes.STRING,
            allowNUll: false,
        },

        username: {
            type: dataTypes.STRING,
            allowNUll: false,
        },

        contrasena: {
            type: dataTypes.STRING,
            allowNUll: false,
        },

        cumpleanos: {
            type: dataTypes.DATE,
            allowNUll: false,
        },

        fecha_registracion: {
            type: dataTypes.DATE,
            allowNUll: true,
            
            
        },

        lema: {
            type: dataTypes.STRING,
            allowNUll: false,
        },
        
    };
    
    let config = {
        tableName: "users",
        timestamps: false,
        underscored: true,

      };

      const User = sequelize.define(alias, cols, config);

      User.associate = function(models){ //relacionar con otra tabla para pedir esos datos hay que hacer la realacion en ambos modelos
        User.hasMany(models.Post,                   //RELACION DE MUCHOS A MUCHOS. explicamos toda la relacion(1. a quien pertenece, 
         {                                                  //2 mas especifico, a donde va a encontrar SEQUELIZE esa realacion)
            as: 'post',                                           //como vamos a llamar nosotros a esa realacion
            foreignKey:'user_id',                                    //donde esta la clave foranea
        } );
        
        
        
        
        User.belongsToMany(models.Comment, {   //relacion de muchos a muchos
                as: 'comments',
                through: 'comentarios',                       //tabla que esta en medio de esta relacion
                foreignKey: 'user_id',
                otherKey: 'post_id',
                timestamps: false,
            })


    }

    return User;
   
};
 