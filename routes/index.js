
//home page with required message

exports.index = function(req, res){
    var message = '';
  res.render('index.ejs',{message: message});
 
};
exports.use = function(req, res){
    var message = '';
  res.render('check.ejs');
 
};

