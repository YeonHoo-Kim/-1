const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 8000

var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

var date = moment().format('YYYY-MM-DD HH:mm:ss');

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
        extended: true
}))

app.get('/',function(req,res){
        var obj = {};
        for(let [key, value] of Object.entries(req.query)){
                obj[key] = value;
        }
        var ip = req.ip;
        if(ip.substr(0,7)=="::ffff:"){
                ip = ip.substr(7);
        }
        obj['ip'] = ip;
        obj['time'] = date;
        obj['email'] = 'kywho0915@naver.com';
        obj['stuno'] = '20141515';
        res.send(obj)
})

app.post('/',(req,res) => {
        var obj = {};
        var ip = req.ip;
        if(ip.substr(0,7)=="::ffff:"){
                ip = ip.substr(7);
        }
        var data = {
                'ip' : ip,
                'time' : date,
                'email' : 'kywho0915@naver.com',
		'stuno' : '20141515'
	};
	Object.assign(obj, req.body);
        Object.assign(obj, data);
        res.send(obj)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
