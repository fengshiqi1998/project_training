const db = require('./database.js');

class TodoNoteData{
  getAll(callback){
    const sql = 'select notes.*,count(clickid) clickCount,count(commentid) commentCount,count(collectionid) collectionCount from (select note.*,user.avatar,user.username,anthology.anthologyname from note,user,anthology where anthology.userid = user.userid and note.anthologyid = anthology.anthologyid) as notes left join click on notes.noteid = click.noteid left join comment on notes.noteid = comment.noteid left join collection on notes.noteid = collection.cocontent group by (noteid);';
    var datas = [];

    db.query(sql, (err,results)=>{
      if (err) {
        callback(true);
        return;
      }

      results.forEach((e)=>{ datas.push(e); });
      callback(false, datas);
    });
  };

  getCount(notecategory, callback){
    console.log(notecategory)
    console.log(typeof notecategory)
    if(notecategory == '全部'){
      var sql = 'SELECT count(noteid) count from note';
      console.log(sql)
    }else{
      var sql = 'SELECT count(noteid) count from note where notecategory = "' + notecategory +' "'
      console.log(sql)
    }
    
    var count = 0;
    db.query(sql, (err,results)=>{
      if(err) {
        callback(true);
        return ; 
      }
      count = results;
      callback(false, count);
    })
  }

  getNoteCategory(notecategory, callback){
    const sql = 'select * from note where notecategory = ?';
    db.query(sql,[notecategory], (err,results)=>{
      if(err) {
        callback(true);
        return ;
      }
      callback(false,results);
    })
  }
  //获取文集
  getAnthologyDetail(name, callback){
    const sql = 'select * from anthology where userid = (select userid from user where username = ?)'
      db.query(sql, [name], (err,results)=>{
        if(err){
          callback(true);
          return ;
        }
        callback(false,results);
      })
  }
  //创建文集
  createAnthology(name, Aname, callback) {
    const sql = 'insert into anthology(userid , anthologyname) values ((select userid from user where username = ?),?)';
    db.query(sql, [name, Aname], (err, results) => {
      if(err) {
        callback(true);
        return ;
      }
      callback(false, results);
    });
  }
  deleteone(id, callback) {
    const sql = 'DELETE from note where noteid = ?';

    db.query(sql, [id], (err, results)=>{
      if (err){
        callback(true);
        return;
      }
      callback(false, results);
    });
  }
  //创建Note
  insertOneNote(datas, callback) {
    console.log('up to insertOnePhoto');
    const sql = 'INSERT INTO note(anthologyid, notecategory, notecontent, isnoteoriginal, isnoteprivate, noteimg, notemusic) VALUES ((SELECT anthologyid FROM anthology WHERE anthologyname = ? AND userid = (SELECT userid FROM user WHERE username = ?)),?,?,?,?,?,?)';
    db.query(sql, [datas.anthologyname, datas.username, datas.notecategory, datas.content, datas.isOriginal, datas.isPrivate, datas.imgPath, datas.musicPath], (err, results) => {
      if (err){
        callback(true);
        return;
      }
      callback(false, results);
    });
  } 
};

module.exports = TodoNoteData;
