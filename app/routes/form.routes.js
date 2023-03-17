// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');
module.exports = function(application){
    application.get("/addnoticia", (req, res)=>{
        const errors = [];
        res.render("admin/form_add_noticia.ejs", {errors: errors})
    });

    application.post("/noticias/salvar",
        body('titulo', 'Título não pode estar vazio!').notEmpty(),
        body('resumo', 'Resumo não pode estar vazio!').notEmpty(),
        body('autor', 'Author não pode estar vazio!').notEmpty(),
        (req, res)=>{

            const noticia = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render("admin/form_add_noticia.ejs", {errors: errors.array()});
                //return res.status(400).json({ errors: errors.array() });
            }

            const conn = application.config.dbConnection();
            const noticiasModel = new application.app.models.NoticiaDAO(conn);

            noticiasModel.salvarNoticias(noticia, function(error, result){
                //res.render("noticias/noticias", {noticias: result});
                res.redirect("/noticias");
            });
        }
    );
}
