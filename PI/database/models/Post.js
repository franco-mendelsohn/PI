module.exports = function (sequelize, dataTypes) {
    
    let alias = "Post";

    let cols =  {
        id: {
            autoIncrement: true,
            primeryKey: true,
            type: dataTypes.INTEGER,
        },

        user_id: {
            type: dataTypes.INTER,
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
    
    const config = {
        tableName: "posts",
        timestamps: true,
        underscored: true,
      };

    const Post = sequelize.define(alias, cols, config);

    return Post;
}