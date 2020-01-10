function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function( callback){
    this._connection.query('select * from noticias ORDER BY data_criacao DESC LIMIT 5',callback);
};

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    console.log(id_noticia.id_noticia);
    this._connection.query('select * from noticias where id_noticias = ' +id_noticia.id_noticia,callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia,callback){
    console.log(noticia);
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback);
}


module.exports = function(app){
    
    return NoticiasDAO;

};