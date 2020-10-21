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
            allowNUll: false,
            
        },
    }
    
    let config = {
        tableName: "posts",
        timestamps: false,
        underscored: true,
      };

    const Post = sequelize.define(alias, cols, config);

    return Post;
}