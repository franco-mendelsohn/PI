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
            allowNUll: false,
            
        },
    }
    
    let config = {
        tableName: "comentarios",
        timestamps: false,
        underscored: true,
      };
      
    const Comment = sequelize.define(alias, cols, config);

    return Comment;
}