const request = require('request');

module.exports = {
    getCommodities: (req, res) => {
        let options = {
            url: 'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list'
        };
        
        function callback(error, response, body) {
            if (error) {
                console.log(error);
                return res.status(400).json({
                    message: "failed call api"
                });
            }
            if (response.statusCode == 200) {
                return res.status(200).json(
                    JSON.parse(body)
                );
            }
        }
        request(options, callback);
    }
}