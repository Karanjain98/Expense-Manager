
exports.signup = function(req, res){
   message = '';
   if(req.method == "POST"){
 
      var post  = req.body;
      var name= post.username;
      var pass= post.password;
      var pass2=post.password2;
      var email=post.email;
if(pass!=pass2)
{
   message="Passwords do not match";
   res.render('index.ejs',{message: message});
}
if(name=='')
{  
   message="Username cannot be empty";
   if(pass=="")
   message=message+" , Password cannot be empty"; 

   res.render('index.ejs',{message: message});
}
if(pass=="")
{
   message=message+" , Password cannot be empty";
    res.render('index.ejs',{message: message});
}


   else{
      var sql = "INSERT INTO users(username,email,password) VALUES('"+name+"','"+email+"','"+pass+"')";
      var query = db.query(sql, function(err, result) {
         message = "Succesfull! Your account has been created.";
         res.render('signin.ejs',{message: message});
      });

   }} else {
      res.render('index');
   }
};
exports.signin =function(req,res){
  // res.render('signin');
   message='';
   if(req.method=="POST")
   {
      var post=req.body;
      var username=post.username;
      var pass=post.password;
     
      var sql="SELECT * FROM users WHERE username='"+username+"' and password='"+pass+"'";

      var query=db.query(sql,function(err,results){
         if(results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            req.session.method="post";
            res.redirect('/home/dashboard');
         }
         else{
            message = 'Wrong Credentials.';
            res.render('signin.ejs',{message: message});
         }
                 
      });
      
   }
   else
      res.render('signin.ejs',{message:message});

};

exports.logout=function(req,res)
{  
   req.session.destroy(function(err){  
          
         res.redirect('/login');

     } );
};
exports.dashboard=function(req,res,next)
{ 
    if(logout===1)
    {
      re.redirect("/login");
      return;
    }

   var user=req.session.user,
   userId=req.session.userId;
   if(userId==null)
   {
      res.redirect("/login");
      return;

   }
   var total=" ";
   var sql="select * from 'users' where id = '"+userId+"'";
   var total=db.query("select sum(amount) as sum from expense_detail where id ='"+userId+"'",function(err,results)
   {
   var list=(JSON.parse(JSON.stringify(results)));
    total=list[0].sum;});
   db.query(sql,function(err,results){
    db.query("select * from expense_detail where id ='"+userId+"'",function(err,results)
   {var list=JSON.parse(JSON.stringify(results));
      res.render('dashboard1.ejs',{user:user,list:list,total:total});
   });
   
})};

exports.add=function(req,res)
{
   var post=req.body;
   var userId=post.userId;  
   if(userId==null)
   {
      res.redirect("/login");
      return;
   }
   var flag=0;
   var date="";
   date=post.date;
   var name="";
   name=post.username;
   var detail="";
   detail=post.detail;
   var amount="";
   amount=post.amount;
   var total=" ";
 
   if(post.check)
   {
      flag=1;
   }
if(amount!=""||flag)
 {var user={
   id:userId,
   username:name
   };
   if((amount!=""&&date!="")||(flag))
   {
      if(flag!=1&&post.action!="delete")
      {var sql="INSERT INTO expense_detail VALUES ("+userId+",'"+name+"',"+amount+",'"+detail+"','"+date+"')";
       req.body.amount="";}
     else if(flag==1)
       {var sql="delete from expense_detail where time ='"+post.time+"' and amount="+post.amount+" and expense_detail='"+post.detail+"'";
}
else
var sql="select * from expense_detail";
   db.query(sql,function(err,results){
   db.query("select sum(amount) as sum from expense_detail where id ='"+userId+"'",function(err,results)
   {
    var list=(JSON.parse(JSON.stringify(results)));
    total=list[0].sum;

   });

   db.query("select * from expense_detail where id ='"+userId+"'",function(err,results)
   {var list=JSON.parse(JSON.stringify(results));
      res.render('dashboard1.ejs',{user:user,list:list,total:total});
   });
   
});}}
   else
   {
      res.render('dashboard1.ejs',{user:user,list:list,total:total});
   }
};




