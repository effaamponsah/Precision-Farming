---
id: api
title: API
sidebar_label: API
---
This section seeks to explain some to the commandline commands used, how some funtions work under the hood for the sensors.

### Functions found in landingpage.py

`read()` <br />
Fetching data from the database should be modularised for easier resuse and was achieved using this function. It reads the current(last) records from the database and displays it ti the user. 

### Function found in generator.py

`generate()` <br />
**CSV** files need to be generated and filled with data from the database and this generate function takes the name of the table and the number to fill the file with. It then creates a file if it doesnt exist and overwrite it if it does. The read data from the database is then fed into the file.

### Function found in selection.py

`select()` <br />
To reduce code length and add reusability, the select function is used almost anywhere in the project where the data needs to fetched from the db. It takes 2 arguments. The table name and the number of data to select and returns the data fetched. <br>

### Function found in landingpage.py

`read()` <br />
Current data is needed at any point in time this read function just does that. It takes no argument,but selects the last records from the database and displays it to the user.

### Functions found in the app.py

- `answer_call()` <br />
This function serves as the callback function when the twilio client is triggered. It serves as a function found under a route for the answer route for ```flask```. It takes no argument and returs a text to speech of the current situations of the farm. <br /><br />

- `index()`<br />
Every web application has a landing page and this is the one for our web application. This function takes no argument but returns the landing page template and feeds it with the data read from the db. <br /><br />

- `atmtemp()` <br />
Users need to a detailed view of all the data gathered. When the each card is pressed, users navigate to each detailed route and this is the one for the atmospherica temperature. It takes the time as an argument which is passed as a parameter to the route and based on the parameter, data is fetched. The arguments is the **1h**, **24h**, **1w**, **1m**, **1y** <br />

- `ph()` <br />
This functions is called when the ph card is pressed. It works like the atmospheric temperature. <br/>

- `soilmoist()` <br />
Similar to the **atmospheric temperature** but for the soil moisture.<br/>

- `soiltemp()` <br />
Similar to the **atmospheric temperature** but for the soil temperature.<br/>

- `humid()` <br />
Similar to the **atmospheric temperature** but for the himidity.<br/>

- `download()` <br />
This function handles the download feture of the web application.
It gets triggered when the button from the templates get pressed. This function takes the name of the table from the database to get the information from or/and the extend to which it should download files. It calls the **generate** function which genenrates a file and **[Response](flask.org/Response)** API which allows files streaming to clients.