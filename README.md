# Flatdango Web App
#### Flatdango is a web app that allows a user to purchase movie tickets from the theater, 02/02/2023
#### By **Tamunotonye Briggs**
## Description
Flatdango is a JavaScript web app that allows a user to purchase movie tickets from the theater. When the website loads, the first movie (with id:1) will automatically be displayed as the selected movie. The User can see details about the movie such as its, Poster, Title, Runtime, Showtime, and Available tickets. The available tickets is gotten by subtracting the tickets sold from the theater capacity. When a user buys a ticket by clicking on the Buy Ticket button, the number of available tickets reduces by 1. When there are no more available tickets, the button text changes to Sold Out and it prevents the user from purchasing any more tickets. A user can click on any movie poster so that it shows in the Selected movie section and displays more details about the movie.
## Setup/Installation Requirements
* To access the files in the db.json, run "json-server --watch db.json" in VS Code terminal
* Ensure you are using at least version 12 of Node for it to run
* You will see links to Resources and Home page respectfully
* From here you can access and filter elements in the db.json file
## Known Bugs
The Buy Ticket button has a bug. When a ticket is no longer available, the button changes to "Sold out". When a different movie with available tickets is selected, the Buy Ticket button still says Sold Out and stops the user from purchasing a ticket.
## Technologies Used
This web app was made using HTML, CSS, JavaScipt mainly, and a JSON file.
## Support and contact details
If you have any issues, concerns, questions, or ideas, reach out to me through email: tamunotonye.briggs@student.moringaschool.com. Also feel free to make contributions to the code and ensure you include concise comments.
### License
MIT License

Copyright (c) 2023 TammyBriggs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
