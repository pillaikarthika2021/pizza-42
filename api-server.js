const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const authConfig = require('./auth_config.json');
const { promise } = require('selenium-webdriver');
var https = require('https');
var fs = require('fs');

function sleep(time, callback) {
  var stop = new Date().getTime();
  while(new Date().getTime() < stop + time) {
      ;
  }
  callback();
}

// var privateKey  = fs.readFileSync('/etc/letsencrypt/live/pizza.centralus.cloudapp.azure.com/fullchain.pem', 'utf8');
// var certificate = fs.readFileSync('/etc/letsencrypt/live/pizza.centralus.cloudapp.azure.com/privkey.pem', 'utf8');
// var credentials = {key: privateKey, cert: certificate};
const app = express();
app.use(cors());
returnbody = null;

app.use(morgan('dev'));
app.use(helmet());
//app.use(
//  cors({
//    origin: authConfig.appUri,
//  })
//);

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ['RS256'],
});

const getManagementAPIJWT = () =>{
  var request = require("request");
  return new promise(function (resolve,reject){
    var options = { method: 'POST',
    url: 'https://pizza42-kp.us.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: '{"client_id":"aLuSbmxQzYAhyZR2PHps9GGnu5ZvUmWZ","client_secret":"JPe9Ujb6cQSSlGQB52VczkhY6uo4NSpnNZ6T65oD8728EXaYmrgAOkMS38III2RR","audience":"https://pizza42-kp.us.auth0.com/api/v2/","grant_type":"client_credentials"}' };
  
  request(options, function (error, response, body) {
    if (error) {reject(error);}
    else{
      resolve(JSON.parse(body))
    }
    
  });
  })
}

app.get('/api/external', checkJwt, (req, res) => {
  res.send({
    msg: 'Your order has been placed!',
  });
});

app.get('/api/placeorder', checkJwt, (req, res) => {
  console.log('here');
  pizzaname = req.query.pizza;
  var newtogo;
  var datatoinsert;
  var request = require("request");
  var options2 = {
    method: 'GET',
    url: 'https://pizza42-kp.us.auth0.com/api/v2/users/' + req.user.sub,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRTbldOM1ZjTndwU0xkTnNiS0tCSiJ9.eyJpc3MiOiJodHRwczovL3BpenphNDIta3AudXMuYXV0aDAuY29tLyIsInN1YiI6Im05NEJVNlVYMGRTbjgwaFVZa1RSbG03UkFzZzNYSXFRQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3BpenphNDIta3AudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE2MjI5NTQwMDQsImV4cCI6MTYyNTU0NjAwNCwiYXpwIjoibTk0QlU2VVgwZFNuODBoVVlrVFJsbTdSQXNnM1hJcVEiLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIHJlYWQ6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgZGVsZXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl90aWNrZXRzIHJlYWQ6Y2xpZW50cyB1cGRhdGU6Y2xpZW50cyBkZWxldGU6Y2xpZW50cyBjcmVhdGU6Y2xpZW50cyByZWFkOmNsaWVudF9rZXlzIHVwZGF0ZTpjbGllbnRfa2V5cyBkZWxldGU6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6Y29ubmVjdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zIGRlbGV0ZTpjb25uZWN0aW9ucyBjcmVhdGU6Y29ubmVjdGlvbnMgcmVhZDpyZXNvdXJjZV9zZXJ2ZXJzIHVwZGF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGRlbGV0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGNyZWF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIHJlYWQ6ZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmRldmljZV9jcmVkZW50aWFscyBjcmVhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIHJlYWQ6cnVsZXMgdXBkYXRlOnJ1bGVzIGRlbGV0ZTpydWxlcyBjcmVhdGU6cnVsZXMgcmVhZDpydWxlc19jb25maWdzIHVwZGF0ZTpydWxlc19jb25maWdzIGRlbGV0ZTpydWxlc19jb25maWdzIHJlYWQ6aG9va3MgdXBkYXRlOmhvb2tzIGRlbGV0ZTpob29rcyBjcmVhdGU6aG9va3MgcmVhZDphY3Rpb25zIHVwZGF0ZTphY3Rpb25zIGRlbGV0ZTphY3Rpb25zIGNyZWF0ZTphY3Rpb25zIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6aW5zaWdodHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpsb2dzX3VzZXJzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyB1cGRhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyByZWFkOmFub21hbHlfYmxvY2tzIGRlbGV0ZTphbm9tYWx5X2Jsb2NrcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIGNyZWF0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIGRlbGV0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIHJlYWQ6Y3VzdG9tX2RvbWFpbnMgZGVsZXRlOmN1c3RvbV9kb21haW5zIGNyZWF0ZTpjdXN0b21fZG9tYWlucyB1cGRhdGU6Y3VzdG9tX2RvbWFpbnMgcmVhZDplbWFpbF90ZW1wbGF0ZXMgY3JlYXRlOmVtYWlsX3RlbXBsYXRlcyB1cGRhdGU6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6bWZhX3BvbGljaWVzIHVwZGF0ZTptZmFfcG9saWNpZXMgcmVhZDpyb2xlcyBjcmVhdGU6cm9sZXMgZGVsZXRlOnJvbGVzIHVwZGF0ZTpyb2xlcyByZWFkOnByb21wdHMgdXBkYXRlOnByb21wdHMgcmVhZDpicmFuZGluZyB1cGRhdGU6YnJhbmRpbmcgZGVsZXRlOmJyYW5kaW5nIHJlYWQ6bG9nX3N0cmVhbXMgY3JlYXRlOmxvZ19zdHJlYW1zIGRlbGV0ZTpsb2dfc3RyZWFtcyB1cGRhdGU6bG9nX3N0cmVhbXMgY3JlYXRlOnNpZ25pbmdfa2V5cyByZWFkOnNpZ25pbmdfa2V5cyB1cGRhdGU6c2lnbmluZ19rZXlzIHJlYWQ6bGltaXRzIHVwZGF0ZTpsaW1pdHMgY3JlYXRlOnJvbGVfbWVtYmVycyByZWFkOnJvbGVfbWVtYmVycyBkZWxldGU6cm9sZV9tZW1iZXJzIHJlYWQ6ZW50aXRsZW1lbnRzIHJlYWQ6YXR0YWNrX3Byb3RlY3Rpb24gdXBkYXRlOmF0dGFja19wcm90ZWN0aW9uIHJlYWQ6b3JnYW5pemF0aW9ucyB1cGRhdGU6b3JnYW5pemF0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcnMgcmVhZDpvcmdhbml6YXRpb25fbWVtYmVycyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyB1cGRhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgcmVhZDpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIGNyZWF0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMgcmVhZDpvcmdhbml6YXRpb25faW52aXRhdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.d7tItSuEDaAs3cIp1VIFfdIIoUf8nMjjUkTcXEFZaHVDRWqoLPEUGysksmlj8bFVJf4cb__y7cKDYUVw9Iw5Rr_05KTuHy86iHzmWBTaI7yrxSJHM90E48UIv6GMe5bp_AkJdXdtvT01SD1Is-7JuvEB_aDnwVKmE4cR5nBHBTE5GvtEBqJgvocoZBuVcJUwywBPPE4wrqVcagmKzEWYxb5XL5hfgqkOWuQxFIUK5jh_alKTJ54w329jzBRYnYUZ3_z73Ibi7hGKqHWFFKvcTyB_ulRY5ZG9Fhw2UpMyYp3hTPzRHK--13lrMwmrPfZcnorPsnWrdoNPjsWIjAx9TA`
    },
  };
  request(options2, function (error, response, body) {
    if (error) throw new Error(error);
    var newp = JSON.parse(body)
    console.log(newp.user_metadata.orders);
    var obj = newp.user_metadata;
    

    if (newp.user_metadata.orders == undefined) {
      console.log('in unidentified');
      datatoinsert = [{'pizza': pizzaname}]
      console.log(datatoinsert)
    } else {
      console.log('in found');
      obj.orders.push({
        "pizza": pizzaname
      })

      console.log(obj.orders);
      datatoinsert = obj.orders;
    }
      var options1 = {
        method: 'POST',
        url: 'https://pizza42-kp.us.auth0.com/oauth/token',
        headers: {
          'content-type': 'application/json'
        },
        body: '{"client_id":"aLuSbmxQzYAhyZR2PHps9GGnu5ZvUmWZ","client_secret":"JPe9Ujb6cQSSlGQB52VczkhY6uo4NSpnNZ6T65oD8728EXaYmrgAOkMS38III2RR","audience":"https://pizza42-kp.us.auth0.com/api/v2/","grant_type":"client_credentials"}'
      };

      request(options1, function (error, response, body1) {
        if (error) {
          throw new Error(error);
        } else {
          headandbody = JSON.parse(body1)
          var options = {
            method: 'PATCH',
            url: 'https://pizza42-kp.us.auth0.com/api/v2/users/' + req.user.sub,
            headers: {
              'authorization': 'Bearer ' + headandbody.access_token,
              'content-type': 'application/json'
            },
            body: {
              user_metadata: {
                orders: datatoinsert
              }
            },
            json: true
          };

          request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
          });

        }

      });
      res.send({
        msg: 'ok',
      });

    
  });

});

app.get('/api/placeorders', checkJwt, (req, res) => {
  pizzaname=req.query.pizza;
  var request = require("request");
  var options1 = { method: 'POST',
  url: 'https://pizza42-kp.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"aLuSbmxQzYAhyZR2PHps9GGnu5ZvUmWZ","client_secret":"JPe9Ujb6cQSSlGQB52VczkhY6uo4NSpnNZ6T65oD8728EXaYmrgAOkMS38III2RR","audience":"https://pizza42-kp.us.auth0.com/api/v2/","grant_type":"client_credentials"}' };

  request(options1, function (error, response, body1) {
    if (error) {throw new Error(error);}
    else{
      headandbody=JSON.parse(body1)
      var options = { method: 'PATCH',
      url: 'https://pizza42-kp.us.auth0.com/api/v2/users/'+ req.user.sub,
      headers: { 'authorization':'Bearer ' + headandbody.access_token,'content-type': 'application/json' },
      body: { user_metadata: {
        order: pizzaname
      } },
      json: true
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
    
    }
    
  });
  res.send({
    msg: 'ok',
  });
});

app.get('/alive', (req, res) => {
  res.send({
    msg: 'ok',
  });
});


const port = process.env.API_SERVER_PORT || 3001;
var httpsServer = https.createServer({
    key: fs.readFileSync('./pk.pem'),
    cert: fs.readFileSync('./fc.pem')
}, app);

//var httpServer = http.createServer(app);
//var httpsServer = https.createServer({
//    key: fs.readFileSync('./key.pem'),
//    cert: fs.readFileSync('./cert.pem'),
//    passphrase: 'password'
//}, app);

// httpServer.listen(8080);
httpsServer.listen(port, () => console.log(`Api started on port ${port}`));

//app.listen(port, () => console.log(`Api started on port ${port}`));
