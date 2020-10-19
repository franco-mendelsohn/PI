module.exports = function (sequelize, dataTypes) {
    
    let alias = "Comment";

    let cols =  {
        id: {
            autoIncrement: true,
            primeryKey: true,
            type: dataTypes.INTEGER,
        },

        post_id: {
            type: dataTypes.INTER,
            allowNUll: false,
        },

        user_id: {
            type: dataTypes.INTER,
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
    
    const config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: true,
      };

    const Comment = sequelize.define(alias, cols, config);

    return Comment;
}