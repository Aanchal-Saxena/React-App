# React Assignment

## Overview

This project is a To-Do App with added functionality for selecting a country and state. The application allows users to:

- Manage their To-Dos: Add, update, delete, and toggle the completion status of tasks. The tasks are stored locally and persist on page reload using `localStorage`.
- Select a Country and State: Users can select a country from a dropdown, and based on the selected country, a list of available states will be shown. If the selected country doesn't have states, an appropriate message is displayed.
- Post Details: Users can select a post from a dropdown to view its details.


---

## Table of Contents

- [Pre-requisites](#pre-requisites)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Key Learnings](#key-learnings)
- [Technologies Used](#technologies-used)
- [Error Handling](#error-handling)
- [Conclusion](#conclusion)


---

## Pre-requisites

Before you begin, ensure you have met the following requirements:

- **npm** (v6.0 or above) or **Yarn** (v1.22 or above)
- **Git** (v2.0 or above) - Download from [Git official site](https://git-scm.com/)
- **Code Editor** - e.g., [Visual Studio Code](https://code.visualstudio.com/)
- **Browser** - e.g., [Google Chrome](https://www.google.com/chrome/)


## Setup Instructions

Follow these steps to set up the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/Aanchal-Saxena/React-App.git
    ```

2. Navigate to the project folder:
    ```bash
    cd react-web
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    npm run dev
    ```
    Alternatively, if you are using yarn, you can start it using:
    ```bash
    yarn dev
    ```

---

## API Endpoints

The project leverages `Axios` to interact with external APIs for fetching country details, states, and posts. All the API endpoints are configured centrally in the `utils/api-urls` file for maintainability and easy updates.

### How to Find and Update API URLs

- The API URLs are stored in the `utils/api-urls` file as a centralized configuration object.
- Each API is grouped into logical categories (`countryDetails` and `postsUrl`) with a `baseURL` and corresponding `subUrls` for specific endpoints.

### Example Structure of the `api-urls` File

- `countryDetails.baseURL`: Contains the base API URL for country-related data.
- `countryDetails.subUrls.getCountries`: Points to the endpoint for fetching country and state details.
- `postsUrl.baseURL`: Holds the base API URL for fetching posts.
- `postsUrl.subUrls.fetchPosts`: Defines the endpoint to retrieve the list of posts.

To update or replace the API URLs, simply modify the `baseURL` or `subUrls` in this file as needed.

---

## Key Learnings

1. **State Management in React:**
   - Using React hooks such as `useState`, `useEffect`, and custom contexts to manage and share state across components.
   - Implemented a global state management approach with `TodoContext` to manage todos and their state.

2. **LocalStorage for Persistence:**
   - Leveraged `localStorage` to persist data (such as todos) even after a page refresh.
   - Used `useEffect` to fetch data from `localStorage` on component mount and to save updated data back to `localStorage`.

3. **API Integration:**
   - Integrated `Axios` for making API calls to fetch country, state, and post data.
   - Handled errors during API requests to improve user experience.

4. **Dynamic Dropdowns:**
   - Built dynamic dropdowns for country and state selection, with state options based on the selected country.
   - Incorporated logic to handle cases where countries have no states, and displaying appropriate messages.

5. **Conditional Rendering:**
   - Applied conditional rendering to display content based on the state of the application, such as showing the "state selection" message when no states are available or displaying the selected post details.

---

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces. (v18.3.1)
- **Axios**: Promise-based HTTP client for the browser and Node.js. (v1.7.8)
- **Bootstrap**: Popular front-end framework for building responsive, mobile-first websites. (v5.3.3)
- **React Router DOM**: A library for handling routing in React applications. (v7.0.2)
- **UUID**: Library to generate unique IDs for tasks. (v11.0.3)

---

## Error Handling

The application includes robust error-handling mechanisms to ensure a smooth user experience:

- **Wrong API URL or Network Issues:**  
  - `Axios` interceptors handle API errors, logging the issue and displaying a user-friendly message like "Something went wrong with the API."

- **Invalid or Unexpected API Responses:**  
  - Hooks like `useCountry` and `usePosts` validate API responses. Errors such as unexpected formats or missing data trigger error messages for the user.

- **Invalid User Input:**  
  - Forms (e.g., task input) validate user entries, preventing submission of empty or invalid data and displaying appropriate warnings.

- **Non-Existent Page (404):**  
  - A "Page Not Found" component is rendered for invalid routes, allowing users to navigate back to the homepage easily.

---

### Conclusion

This project demonstrates a modular approach to building a robust React application with efficient API handling, dynamic state management, and user-friendly error handling. By combining reusable components, hooks, and clear navigation, the application ensures a seamless and responsive user experience.

---
