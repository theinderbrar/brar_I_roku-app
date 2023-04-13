# Roku Application

This is a documentation for building a movie streaming website using Vue 3
for the frontend and Node.js with Express for the backend. The frontend is
designed to have different features such as a Signup page, Home page, Movie
Details page, Login page, Download page, Profile page, and Settings page.
The backend provides several API endpoints to handle user login and movie
data retrieval. This documentation provides an overview of the project
structure and functionality, along with instructions on how to set up and run
the frontend and backend servers.

# Frontend

The application's frontend is designed with Vue 3 and has app.js as its entry
point. Every Vue component is rendered on the home page, index.html. The
components folder, which is located inside the js file in the public folder, is
where the components are kept. All of the pages are imported into the
main.js module, which manages Vue routing. Sass is used for styling, with
different Sass files for each component.

# Functionality

The application's offers the following features:
● Signup Page : The Signup page is the first page that newly
registered users will see. It offers a simple form for users to fill out with
their basic details, including their email address and password. The
form also includes a confirmation field for the password. Once a user
submits the form, their information will be saved to the backend server.

● Login Page: The Login page is where already registered users can
log in to the platform. It offers a simple form where users can enter their
email address and password to access their account. The form also
includes an option to remember the user for future logins.

● Home Page: The Home page is the default page that users will see
after registering or logging in. The page lists movies by genre, allowing
users to easily find and choose a movie to watch. Depending on their
user permissions, users will see different movie content on this page. If
the user is a child, they will see movies that are mostly for children,
including animated films. If the user is an adult, they will be able to see
all the content available on the platform.

● Download Page: The Download page is where users can download
movies. This page is currently a dummy page and does not offer any
functionality.

● Profile Page: The Profile page is where users can view their profile
information. This page is currently a dummy page and does not display
any information.

● Settings Page: The Settings page is where users can customize their
account settings. This page is currently a dummy page and does not
offer any options for customization.

# Backend

The server.js file is responsible for setting up the Express server and defining
the routes for handling incoming requests. It listens on a specified port and
uses middleware like express.json() and cors() to handle incoming data in
different formats like JSON or form data. It also includes the routes for the
user management system (/ums) and movie-related routes (/api/movie).
The api.js file contains the implementation for the user management system,
with routes for retrieving all users, retrieving one user by ID, and
authenticating a user via a login route. It uses the mysql package to connect
to a MySQL database and execute SQL queries. It also includes some data
sanitization to remove sensitive information from the retrieved user data.
The urls.js file contains constants that hold API URLs for getting movie-related
data from an external source.
The movie.js file contains the implementation for movie-related routes,
including getting movies by genre, getting all genres, getting single movie
details, searching for a movie, and getting animated movies. It uses functions
defined in the movieController.js file to handle the logic for each route.

# API Endpoints

The backend provides the following API endpoints:

/get-genres (GET): Retrieves all the different genres of movies.

/movie-genre/:genreId (GET): Retrieves a list of movies based on the genre ID.
/single-movie/:movieId (GET): Retrieves detailed information about a single
movie, including basic details, videos, and reviews.
/search/:query (GET): Searches for movies based on a query string.
/animated (GET): Retrieves animated movies for kids.
/ums/login (POST): Handles user login functionality.

# How to Start the Backend

To start the backend, follow these steps:
● Go to the backend directory in the terminal after it is opened.

● To install the dependencies, type npm install into your terminal.

● Start the backend server by typing node server.js

# How to Start the Frontend

To start the frontend, follow these steps:

● Open a terminal and navigate to the frontend directory.

● Run the command npm install to install the dependencies.

● Run the command node app to start the frontend development server.

# Conclusion

The documentation provides a clear overview of the project structure,
functionality, and API endpoints of the backend. It also includes instructions
on how to start both the frontend and backend servers.