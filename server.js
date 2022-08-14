
let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/elect-btp-project2'));

app.get('/*',(req,res)=>{
   res.sendFile(__dirname+'/dist/elect-btp-project2/index.html');
});

app.listen(process.env.PORT || 8080);
