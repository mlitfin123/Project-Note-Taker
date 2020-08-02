# Note-Taker

## Video of the working application
https://drive.google.com/file/d/15VUrs_7Hoxj66msO2_7DNbeHctK0JWWi/view

## Description 
This application uses Node.js to create a local server which allows the application to be viewed in the browser. The user can then manually enter notes, save the notes, and delete the notes as needed. The notes are stored as a JSON in the db.json file and displayed in the browser for the user to view.

Personally this application was very challenging to complete. I was able to connect to the proper port fairly quickly before adding the instructions to store the notes in the JSON file. However I hit a roadblock when attempting to display the stored notes for the user. I ended up separating the routes into their own files rather than on the server.js file in order to better organize and separate everything to get an idea of what the issue was.

The application is now successufully functioning and ready for use.

## Table of Contents 
* [Installation](#installation) 
* [Usage](#usage) 
* [License](#license) 
 
## Installation 
1. Open terminal.
2. Type the command 'npm i'.
3. Type the command 'node server.js'.
4. The application is now listening on the port.
 
## Usage 
1. Open your preferred browser.  
2. Enter localhost:8080 into the search bar and press enter.
3. Select the option 'Get Started'.
4. Enter a Note Title and Note Description and select the Save option on the upper right side of the screen.
5. The note can be viewed by selecting it on the left side of the screen.
6. To Delete the note, select the trashcan icon next to the note.
 
## License 
There is not a license for this application. 
