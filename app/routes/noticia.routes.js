module.exports = function(application){
        application.get("/noticia", (req, res)=>{
            //res.render("noticias/noticias.ejs")
            const conn = application.config.dbConnection();
            const noticiasModel = new application.app.models.NoticiaDAO(conn);
            noticiasModel.getNoticia((error, result)=>{
                res.render("noticias/noticia.ejs", {noticia: result})
                conn.destroy();
            })
            /*con.query("select * from noticias where id_noticia = 2", (error, result)=>{
                res.render("noticias/noticia.ejs", {noticia: result});
                con.destroy();
            });*/
        });
    }
