var express = require("express");
var router  = express.Router() ;
var url = require('url') ;
var mongojs=require('mongojs') ;
var monDB = mongojs('mongodb://name:password@ds031641.mlab.com:31641/vadavai', ['loc']) ; 
var mongoose = require("mongoose");
var jsonfile  = require('jsonfile');
var randomId  = require('random-id-generator') ;

mongoose.connect('Shamina:27017/hr')
var MonSchema = mongoose.Schema ;



module.exports = router ; 



router.post('/mysql/locs', function(req,resp, next) {
  console.log('Insert from Rest') ;   
  try{
     var reqObj = req.body ; 
     console.log(reqObj) ; 
     req.getConnection( function(err, conn) {
         if (err) {
             console.error("Sql Connection Error: ", err) ; 
             return next(err) ;
         }else {
             var insertSql = "INSERT INTO LOC SET ? " ;
             var insertValues = {
                 "name" : reqObj.name ,
                 "refid": reqObj.refid, 
                 "type":  reqObj.type
             };
             var query = conn.query(insertSql,insertValues, function(err, result) {
                 if (err) {
                     console.error("Sql Insert Error: ", err) ; 
                     return next(err) ;
                 } 
                 console.log("insert success")
                 console.log(result) ;
                 var id = result.insertId ; 
                 resp.json({"_id":id}) ; 
                 
             } )  ;
         } 
     }) ; 
   } catch(ex){
       console.log("internal error ", ex);
       return next(ex);
   }
}    
) ; 


router.get('/mysql/locs', function(req, res, next) {
    console.log('Select from Rest') ; 
    try {
    	/*var roleId = req.param('roleId');
  		var deptId = req.param('deptId');*/
  		var query = url.parse(req.url,true).query;
  		console.log(query);
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query('SELECT _id, name, refid, type FROM loc', function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resLoc = [];
                    for (var indx in rows) {
                        var obj = rows[indx];
                        resLoc.push(obj);
                    }
                    res.json(resLoc);
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});




router.put('/mysql/locs/' , function(req, resp, next){
 console.log('Update from Rest') ; 
 var input = JSON.parse(JSON.stringify(req.body)) ; 
 console.log(input) ;
 var id = input._id ;
 console.log('update id '+ id) ; 
 
 if (id == null) {
     console.log("Id not found : ") ; 
 }
 try{
     req.getConnection( function(err, conn) {
         if (err) {
             console.error("Sql Connection Error: ", err) ; 
             return next(err) ;
         }else {
             var updSql = "UPDATE LOC SET ? WHERE _ID = ? " ;
             var updateValues = {
                 "name" : input.name ,
                 "refid": input.refid, 
                 "type":  input.type
             };
             var query = conn.query(updSql,[updateValues, id], function(err, result) {
                 if (err) {
                     console.error("Sql update Error: ", err) ; 
                     return next(err) ;
                 } 
                 console.log("Update success") ; 
                 console.log(result) ;
                 resp.json(result) ; 
             } 
             )  ;
         } 
     }) ; 
   } catch(ex){
       console.log("internal error ", ex);
       return next(ex);
   }
} ) ;



router.delete ('/mysql/locs/:id' , function(req, resp, next){
 console.log('Update from Rest') ; 
 var id = req.params.id ;
 if (id == null|| id =="" || id==undefined) {
     console.log("Id not found : ") ; 
 }
 console.log("Id  found : " + id) ;
 try{
         req.getConnection( function(err, conn) {
         if (err) {
             console.error("Sql Connection Error: ", err) ; 
             return next(err) ;
         }else {
             var delSql = "DELETE FROM LOC WHERE _ID = ? " ;
             var query = conn.query(delSql,[ id], function(err, result) {
                 if (err) {
                     console.error("Sql delete Error: ", err) ; 
                     return next(err) ;
                 } 
                 console.log(result) ;
                 resp.json(result) ;
             } )  ;
         } 
     }) ; 
   } catch(ex){
       console.log("internal error ", ex);
       return next(ex);
   }
} ) ;


/* ---------------------------------- MongoDB MLAB ------------------------*/


router.get('/mlab/locs', function(req, resp, next) {
    console.log('Sele9ct from mlab Rest') ; 
    try {

        monDB.loc.find( function (err, data){
          if (err){
             resp.send(err) ; 
          }else {
              resp.json(data) ; 
          }
        } ) ;

    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


router.post('/mlab/locs', function(req, resp, next) {
    console.log('Insert from mlab Rest') ; 
    try {
        let data = req.body ;
         
        if ((!data.name) || (data.name == null) ) {
           resp.status(400) ;
           resp.json({"error":"Name not found"}) ;
        } else {
          monDB.loc.save(data, function (err, datas){
            if (err){
               resp.send(err) ; 
            }else {
              resp.json(datas) ; 
            }
          } ) ;
       }

    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});



router.delete('/mlab/locs/:id', function(req, resp, next) {
    console.log('delete from mlab Rest ' + req.params.id) ; 
    try {
       monDB.loc.remove({_id:mongojs.ObjectId(req.params.id) } , function (err, datas) {
              if (err){
               resp.send(err) ; 
            }else {
              resp.json(datas) ; 
            }
       }
       
        ) ; 
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


router.put('/mlab/locs', function(req, resp, next) {
    console.log('updatye from mlab Rest') ; 
    try {
        let data = req.body ; 
        let id   = data._id ;
        delete data._id ; 
        if ((!id) || (id == null) ) {
           resp.status(400) ;
           resp.json({"error":"Id not found"}) ;
        } else {
          console.log('updating id : '+id ) ; 
          let updData = {} ;  
          monDB.loc.update({_id:id}, updData, {}, function (err, datas){
            if (err){
               resp.send(err) ; 
            }else {
              resp.json(datas) ; 
            }
          } ) ;
       }

    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


/* ---------------------------------- MongoDB Local DataBase ------------------------*/


var locDBSchema = new MonSchema({
    name:String, 
    refid:String,
    type:String
   } , 
   {collection:"loc"}
 ) ;

var loc = mongoose.model('loc', locDBSchema )


router.get('/mong/locs', function(req, resp, next) {
    console.log('Select from mongo Rest') ; 
    try {
     
      loc.find()
         .then(function(doc){
            console.log( doc) ;
            resp.json(doc) ; 
         }) ; 
 
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


router.post('/mong/locs', function(req, resp, next) {
    console.log('Insert from mongo Rest') ; 
    try {
        let data = req.body ;
        delete data._id ; 
        let mongData = new loc(data) ;  
        mongData.save()
            .then(function(doc){
            console.log( doc) ;
            resp.json(doc) ; 
         }) ; 
     
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});



router.delete('/mong/locs/:id', function(req, resp, next) {
    console.log('delete from mongo Rest ' + req.params.id) ; 
    try {
        id =  req.params.id;
        loc.findByIdAndRemove(id).exec() ; 
        resp.json({"deleted":true})


    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


router.put('/mong/locs', function(req, resp, next) {
    console.log('update from mongo Rest') ; 
    try {
        let data = req.body ; 
        let id   = data._id ;
        delete data._id ;
        loc.findById(id, function(err, doc){
            if (err){
                console.log('error on finding id '+id);
                resp.send(err);               
            }else {
               doc.name = data.name ; 
               doc.refid = data.refid ; 
               doc.type  = data.type ; 
               doc.save() ; 
               resp.json(doc)              
            }
        }) ; 
     

    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


/*------- Json File --------------------------------*/

var locFile = './data/loc.json' ;

router.get('/file/locs', function(req, resp, next) {
    console.log('Select from json Rest') ; 
    try {
     
      jsonfile.readFile(locFile, function(err, obj){
          if (err){
              //console.log(err);
              resp.send(err) ;
          } else {
             //console.log(obj) ;
             resp.json(obj) ; 
              
          }

      }) ;
 
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});





router.post('/file/locs', function(req, resp, next) {
    console.log('Insert from json Rest') ; 
    try {
        let data = req.body ;
        data._id = randomId() ; 

         jsonfile.readFile(locFile, function(err, obj){
          if (err){
              //console.log(err);
              resp.send(err) ;
          } else {
              let doc =  obj ;
              //JSON.parse(obj) ;
              //console.log(data) ;
              doc.push(data) ; 
              //console.log('After Insert ') ;
              //console.log(doc) ;
              jsonfile.writeFileSync(locFile,doc) ;
              resp.json(data) ;  
          }
         }
         );
     
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});




router.put('/file/locs', function(req, resp, next) {
    console.log('update from jason Rest') ; 
    try {
        let data = req.body ; 
        let id   = data._id ;
    
         jsonfile.readFile(locFile, function(err, obj){
          if (err){
              //console.log(err);
              resp.send(err) ;
          } else {
              //console.log("id "+ id) ;
              let index = obj.findIndex(date => data._id == id)
              if (index) {
      
                // console.log("index "+ idex) ;
                 obj[index] = data ;
              }
              //console.log(obj) ;
              jsonfile.writeFileSync(locFile, obj) ; 
              resp.json(data) ;  
            }
          }
     );
 
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});



router.delete('/file/locs/:id', function(req, resp, next) {
    console.log('delete from Json Rest ' + req.params.id) ; 
    try {
        id =  req.params.id;
        jsonfile.readFile(locFile, function(err, obj){
        if (err){
            //console.log(err);
            resp.send(err) ;
        } else {
             // console.log("id "+ id) ;
              let index = obj.findIndex(data => data._id == id)
              if (index) {
                // console.log("index "+ index) ;
                 obj.splice(index,1) ;
              }
              //console.log(obj) ;
              jsonfile.writeFileSync(locFile, obj) ;
              resp.json({"deleted":true})   
            }
          }
     );
 
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});



