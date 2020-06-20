const https = require("https");
const fs = require("fs");
const url = 'https://restcountries.eu/rest/v2/all'

var searchString = process.argv.slice(2)


//1..The result of this API will return only contry name, capital and flag. 
//Also replaced the flag URL’s https with sftp
https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  let result = []
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
  
	for (var i = 0; i < body.length; i++) {
		
		const county_name = body[i].name

		const county_capital = body[i].capital
		
		const county_flag = body[i].flag
		var sftpFlag = county_flag.replace("https", "sftp");

		const obj = {
			'country': county_name,
			'capital' : county_capital,
			'flag' : sftpFlag
		}

		result.push(obj)
	}
	console.log(result)
  });

});



//2. The result of this API will return only contry name, capital and flag. Also replaces the flag
//URL’s https with sftp and saves the result to a json file with timestamp.
const data = JSON.stringify({
    name: 'county_name',
    capital: 'county_capital',
    flag: 'county_flag'
});


const options = {
    hostname: 'restcountries.eu',
    path: `/rest/v2/name/${searchString}`,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(options, (res) => {
    let data = '';
     let result = []
    console.log('Status Code:', res.statusCode);

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        var body = JSON.parse(data)
        for (var i = 0; i < body.length; i++) {
		
		const county_name = body[i].name

		const county_capital = body[i].capital
		
		const county_flag = body[i].flag
		var sftpFlag = county_flag.replace("https", "sftp");

		const obj = {
			'country': county_name,
			'capital' : county_capital,
			'flag' : sftpFlag
		}

		result.push(obj)
	}

	var timeStamp = Date.now()
	var timeNow = new Date(timeStamp)

	var writeObj = {
		'result' : result,
		'time': timeNow
		
	}

//To write the data into json file with timeStamp
	fs.appendFile('countryDetails.json', JSON.stringify(writeObj, null , 4), function (err) {
		  if (err) throw err;
		  console.log('Saved!');
		});

    });

}).on("error", (err) => {
    console.log("Error: ", err.message);
});

req.write(data);
req.end();