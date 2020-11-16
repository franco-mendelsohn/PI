module.exports = function (sequelize, dataTypes) {
    
    let alias = "Post";

    let cols =  {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },

        user_id: {
           type: dataTypes.INTEGER,
            allowNUll: false,
        },

        url_imagen: {
            type: dataTypes.STRING,
            allowNUll: false,
        },

        texto: {
            type: dataTypes.STRING,
            allowNUll: false,
        },

        fecha_creacion: {
            type: dataTypes.DATE, 
            allowNUll: true,
            
        },

        fecha_cambio: {
            type: dataTypes.DATE, 
            allowNUll: true,
            
        },
    }
    
    let config = {
        tableName: "posts",
        timestamps: false,
        underscored: true,
      };

    const Post = sequelize.define(alias, cols, config);

    Post.associate = function(models){ //relacionar con otra tabla para pedir esos datos hay que hacer la realacion en ambos modelos
        Post.belongsTo(models.User,                   //RELACION DE UNO A MUCHOS explicamos toda la relacion(1. a quien pertenece, 
         {                                                  //2 mas especifico, a donde va a encontrar SEQUELIZE esa realacion)
            as: 'user',                                           //como vamos a llamar nosotros a esa realacion
            foreignKey:'user_id',                                    //donde esta la clave foranea
        } );
        
        Post.belongsToMany(models.Comment, {   //relacion de muchos a muchos
            as: 'comments',
            through: 'comentarios',                       //tabla que esta en medio de esta relacion
            foreignKey: 'post_id',
            otherKey: 'user_id',
            timestamps: false,
        });
    }

    

    return Post;
}