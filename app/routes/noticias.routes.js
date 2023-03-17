//var conn = require('../../config/dbConnection');
module.exports = function(application){

//var con = conn();
    application.get("/noticias", (req, res)=>{

        const conn = application.config.dbConnection();
        const noticiasModel = new application.app.models.NoticiaDAO(conn);

        noticiasModel.getNoticias((error, result)=>{
            res.render("noticias/noticias.ejs", {noticias: result});
            conn.destroy();
        });
        /*con.query("select * from noticias", (error, result)=>{
            res.render("noticias/noticias.ejs", {noticias: result});
            con.destroy();
        });*/

    });
}
