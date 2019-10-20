var express = require('express');
var app = express();
var path = require('path');

const mockData = require('./data/mockData')

let port = 4000;

app.set('view engine', 'ejs');
app.set('json spaces', 2);
app.use('/public', express.static(path.join(__dirname, '/public/')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data', (req, res) => {
    console.log("GET /data", '| referrer: ' + req['rawHeaders'][1])
    res.json(mockData.getData)
  }
);

app.get('/profile/:isAuth', (req, res) => {
    let mockLogin = req.params.isAuth == 'true' ? true : false;
    console.log("GET /profile", '| referrer: ' + req['rawHeaders'][1])
    res.json({
      ...mockData.profile,
      isAuthenticated: mockLogin
    })
  }
);

app.get('/data-wait', (req, res) => {
  setTimeout(() => {
      console.log("GET /profile - simulate long async", '| referrer: ' + req['rawHeaders'][1])
      res.json(mockData.getData)
    }, 1500);
  }
);

app.get('/profile-wait/:isAuth', (req, res) => {
  setTimeout(() => {
    let mockLogin = req.params.isAuth == 'true' ? true : false;
    console.log("GET /profile - simulate long async", '| referrer: ' + req['rawHeaders'][1])
    res.json({
        ...mockData.profile,
        isAuthenticated: mockLogin
      })  
    }, 1500);
  }
);





app.listen(port, function() { 
  console.log(`Listening on port ${port}!`);
});