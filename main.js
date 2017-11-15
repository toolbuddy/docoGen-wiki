var docogen = require('docogen'),
	path = require('path');

docogen.generate_latexpdf(path.join(__dirname,'docoGen-script'),path.join(__dirname,"doc"),{ output: "docogen-latex-new" },(err,msg)=>{
    console.log(msg);
});
