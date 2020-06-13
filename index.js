const fs = require('fs');
const sendOutBoundHttp = require('./sendOutBoundHttp');

exports.handler = async (event) => {
    // TODO implement
    try {
        const response = {
            statusCode: 200,
            body: JSON.stringify('Hello from Lambda!'),
        };
        let dummyArray = [];
        for (let i = 0; i < 2000; i++) {
            // console.log(`start: ${i}`);
            // fs.readFileSync('./config.json');
            // console.log(`end ${i}`);
            dummyArray.push(i);
            // console.log(`making get request no: ${i}`);
            // let http = new sendOutBoundHttp();
            // await http.getHttpCall(`http://dummy.restapiexample.com/api/v1/employees`);
            // console.log(`finished get request no ${i}`);
            // console.log(`Memory used: ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
        }

        return Promise.all(
            dummyArray.map(item => {
                console.log(`making get request no: ${item}`);
                let http = new sendOutBoundHttp();
                console.log(`Memory used: ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
                return http.getHttpCall(`http://dummy.restapiexample.com/api/v1/employees`);
            })
        )
        .then(() => response)
        .catch(error => Promise.reject(error));
    }
    catch(error) {
        console.log(`Error`);
        console.error(error);
        const response = {
            statusCode: 500,
            body: JSON.stringify('Error from lambda'),
        };
        return response;
    }
    
};