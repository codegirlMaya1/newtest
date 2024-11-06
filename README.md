Description
The SearchComponent App is a React-based application that allows users to search for locations using the LocationIQ API. Users can enter a location name, and the app will display the corresponding location details. The app also supports editing and deleting previous searches, with all search data being stored in the browser’s local storage.
Features
Search Locations: Users can enter a location name in the search input field and click the “Search” button. The app fetches the location details from the LocationIQ API and displays the location name.
Edit Searches: Users can edit previously saved search entries. Clicking the “Edit” button next to a search entry allows users to update the search term and save the changes.
Delete Searches: Users can delete unwanted search entries by clicking the “Delete” button next to the respective entry.
Local Storage: The app saves the search history in the browser’s local storage, ensuring that the search data persists across sessions.
Technologies Used
React: For building the user interface.
Axios: For making API requests.
Jest & React Testing Library: For testing the components.
LocationIQ API: For fetching location data.
Getting Started
Prerequisites
Node.js
npm (Node Package Manager)
Installation
Clone the repository
Navigate to the project directory
Install dependencies:
npm install
Running the App
To start the application, run:
npm start
Running Tests
To run the tests, use the following command:
npm test
