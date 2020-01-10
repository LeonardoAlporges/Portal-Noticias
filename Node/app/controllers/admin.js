module.exports.formulario = function (application, req, res){
    res.render("admin/form_add_noticia", {validacao : {}, noticia : {} });
}

module.exports.noticias_salvar = function(application ,req ,res){
    var noticia = req.body;

        console.log(noticia);
        req.assert('titulo','Titulo é Obrigatorio').notEmpty();
        req.assert('resumo','Resumo Obrigatorio').notEmpty();
        req.assert('resumo','Resumo deve conter 10 a 100 caracteres').len(10,100);
        req.assert('autor','Autor Obrigatorio').notEmpty();
        req.assert('data_noticia','Data é Obrigatorio').notEmpty().isDate({format : 'YYYY-MM-DD'});
        req.assert('noticia','Noticia é Obrigatorio').notEmpty();
        
        var erros = req.validationErrors();
        console.log(erros)
        if(erros){
            res.render("admin/form_add_noticia", {validacao : erros, noticia: noticia });
            return;
        }

        var connection = application.config.dbConnection();

        var noticiasModel = new application.app.models.NoticiasDAO(connection);
        
        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
        
}