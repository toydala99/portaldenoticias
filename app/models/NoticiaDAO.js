/*module.exports = () =>{
    this.getNoticias = (conn, callback)=>{
        conn.query("select * from noticias", callback)
    };
    this.getNoticia = (conn, callback)=>{
        conn.query("select * from noticias where id_noticia=2", callback)
    };
    this.salvarNoticias = (noticia, conn, callback)=>{
        conn.query("insert into noticias set ?",noticia, callback)
    };
    //return this;
    return this;
}*/
class NoticiasDAO {
    constructor(conection) {
        this._conection = conection;
    }
    getNoticias(callback) {
        this._conection.query("select * from noticias", callback);
    }
    getNoticia(callback) {
        this._conection.query("select * from noticias where id_noticia=2", callback);
    }
    salvarNoticias(noticia, callback) {
        this._conection.query('insert into noticias set ?', noticia, callback);
    }
}

module.exports = ()=>{
    return NoticiasDAO;
}
