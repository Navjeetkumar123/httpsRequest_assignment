# httpsRequest_assignment
Steps:
  1. go to directory wthere getCountry-app.js file exist.
  2. run command : node getCountry-app.js <search String>
    exapmle : /Desktop/JavaScript$ node getCountry-app.js Australia
  3. output sample: 
      Status Code: 200
      Saved!
    [ { country: 'Afghanistan',
        capital: 'Kabul',
        flag: 'sftp://restcountries.eu/data/afg.svg' },
      { country: 'Åland Islands',
        capital: 'Mariehamn',
        flag: 'sftp://restcountries.eu/data/ala.svg' },
      { country: 'Albania',
        capital: 'Tirana',
        flag: 'sftp://restcountries.eu/data/alb.svg' }]    
       ......
   4. Json file will be created with timepstamp and required response data in it in same path.
    sample:
            {
          "result": [
              {
                  "country": "Australia",
                  "capital": "Canberra",
                  "flag": "sftp://restcountries.eu/data/aus.svg"
              }
          ],
          "time": "2020-06-20T13:31:14.521Z"
      }{
          "result": [
              {
                  "country": "Pakistan",
                  "capital": "Islamabad",
                  "flag": "sftp://restcountries.eu/data/pak.svg"
              }
          ],
          "time": "2020-06-20T13:32:11.828Z"
      }

  
