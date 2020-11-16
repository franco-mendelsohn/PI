module.exports = function (sequelize, dataTypes) {
    
    let alias = "Comment";

    let cols =  {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER,
        },

        post_id: {
            type: dataTypes.INTEGER,
            allowNUll: false,
        },

        user_id: {
            type: dataTypes.INTEGER,
            allowNUll: false,
        },

        comentario: {
            type: dataTypes.STRING,
            allowNUll: false,
        },

        fecha_creacion: {
            type: dataTypes.DATE,
            allowNUll: true,
            
        },
    }
    
    let config = {
        tableName: "comentarios",
        timestamps: false,
        underscored: true,
      };
      
    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function(models){ //relacionar con otra tabla para pedir esos datos hay que hacer la realacion en ambos modelos
        Comment.belongsTo(models.User,                   //RELACION DE UNO A MUCHOS explicamos toda la relacion(1. a quien pertenece, 
         {                                                  //2 mas especifico, a donde va a encontrar SEQUELIZE esa realacion)
            as: 'user',                                           //como vamos a llamar nosotros a esa realacion
            foreignKey:'user_id',                                    //donde esta la clave foranea
        } );
    }
    
    
    return Comment;
}