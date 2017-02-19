var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:'alma',
  database: 'bookstore',
});

con.connect(function(err){
  if(err){
    console.log("JAAAAJ");
  } else {
  console.log("SIKERULT");
  }
});

/*con.query("SELECT book_name FROM book_mast;",function(err,rows){
  //console.log("Data received from Db:\n");
  for ( var i = 0; i < rows.length; i++){
    console.log(rows[i].book_name);
  }
});*/

// con.query("SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author, publisher, category ON book_mast.aut_id = author.aut_id AND book_mast.pub_id = publisher.pub_id AND book_mast.cate_id = category.cate_id;",function(err,rows){
//   //console.log("Data received from Db:\n");
//   // for ( var i = 0; i < rows.length; i++){
//   //   console.log(rows[i].book_name);
//   // }
//   console.log(rows, err);
// });

con.query("SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast \
INNER JOIN author ON book_mast.aut_id = author.aut_id \
INNER JOIN category ON book_mast.cate_id = category.cate_id \
INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;",function(err,rows){
  //console.log("Data received from Db:\n");
  for ( var i = 0; i < rows.length; i++){
    console.log('Title: '+rows[i].book_name+', Author: '+rows[i].aut_name+', Category: '+rows[i].cate_descript+', Publisher: '+rows[i].pub_name+', Price: '+rows[i].book_price+'$');
  }
  //console.log(rows, err);
});

con.end();
