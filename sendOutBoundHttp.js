const http = require('http');

class SendOutBoundHttp {
    constructor() {}
    
    getHttpCall(url) {
        return new Promise((resolve, reject) => {
           let request = http.get(url, response => {
              const { statusCode } = response;
              const contentType = response.headers['content-type'];
              console.log({statusCode, contentType});
              if (statusCode > 200) return reject(new Error(`Internal server error`));
              return resolve(response);
           });
        });
    }
}

module.exports = SendOutBoundHttp;