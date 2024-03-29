# Rick and Morty's LAB

![Image Description](https://i.pinimg.com/originals/29/bd/26/29bd261d201e956588ee777d37d26800.gif)

## Introduction
In this lab you will be using the Rick and Morty API to create a simple web application that displays information about the characters of the show.

## Iteration 1 - Install react-router-dom
First of all, we need to install the react-router-dom package. This package will allow us to create routes in our application.

```bash
npm install react-router-dom
```
## Iteration 2 - Create the Home page
Create a new component called `HomePage.jsx` in the `src/pages` folder (create also the folder 🫡). This component will be the home page of our application.
Display a welcome message and a link to the characters page `/characters`.
Remember how to create a link in react using the react-router-dom? 🤔

## Iteration 3 - Create the Characters and CharacterDetails pages
Create two new components called `CharactersPage.jsx` and `CharacterDetailsPage.jsx` in the `src/pages` folder. This components will have functionality to display the characters and the details of a single character, respectively. For now, let's just display a title:

```jsx
// src/pages/CharactersList.jsx
function CharactersList() {
  return (
    <div>
      <h1>Characters</h1>
    </div>
  );
}

// src/pages/CharacterDetailsPage.jsx
function CharacterDetailsPage() {
  return (
    <div>
      <h1>Character Details</h1>
    </div>
  );
}
```

## Iteration 4 - Create the routes
In the App.js file, create the routes for the following paths:

- `/` - Home page
- `/characters` - Characters page with the element of the `CharactersPage` component
- `/characters/:id` - Character detail page with the element of the `CharacterDetailsPage` page component.

Now we should be able to navigate between the different pages of our application.
Let's create a navbar!

## Iteration 5 - Create the Navbar
Create a new component called `Navbar.jsx` in the `src/components` folder. This component will be the navbar of our application. It will contain a link to the home page and a link to the characters page.

Use the ```<NavLink>``` component from react-router-dom to create the links. Maybe we can add some styles to the navbar to make it look pretty 🤩


## Iteration 6 - Display the characters
Now that we have the routes and the navbar, let's display the characters on the characters page.

In the `CharacterList` component, create a state variable called `characters` and initialize it with an empty array. Then, create a `useEffect` hook that fetches the characters from the API and updates the state variable.

Remeber how to fetch data from an API? Here's a little reminder:

```jsx
useEffect(() => {
  fetch('https://example.com/api')
    .then((response) => response.json()) // Transform the data into json
    .then((data) => {
      setCharacters(data); 
    });
}, []);
```

You can also use axios to fetch the data, but remember to install it first.

<details>
  <summary>API info</summary>
  <p>Check the API documentation to get the info of all characters.</p>
  <p><a href="https://rickandmortyapi.com/documentation">Rick and Morty API docs</a></p>
  <p>The endpoint to get all characters is <code>https://rickandmortyapi.com/api/character</code></p>

</details>
<details>
  <summary>Preview</summary>
    <img src="./src/assets/characterspage.png">
</details>
<br>

Each character should be displayed in a card. The card should contain the following information:

- Image
- Name
- Button to go to the character detail page `/characters/:id`

## Iteration 7 - Display the character details
Now that we have the characters page, let's display the character details on the character detail page.

In the `CharacterDetails` component, create a state variable called `character` and initialize it with an empty object. Then, create a `useEffect` hook that fetches the character from the API and updates the state variable.

<details>
  <summary>API info</summary>
  <p>Check the API documentation to get the info of a single character.</p>
  <p><a href="https://rickandmortyapi.com/documentation">Rick and Morty API docs</a></p>
  <p>The endpoint to get a single character is <code>https://rickandmortyapi.com/api/character/:id</code></p>
</details>

<details>
  <summary>Preview</summary>
    <img src="./src/assets/details.png">
</details>
<br>

The character detail page should contain the following information:

- Image
- Name
- Status (Alive, Dead or unknown)
- Species
- Origin planet
- Number of episodes where the character appears

## BONUS 1 - Add styles
Add some styles to your application to make it look pretty. For this lab let's practice with plain CSS. Create a css file for each component and import it in the component file.
Remember to use the `className` attribute to apply the styles to the elements.
Keep in mind that all the styles you apply to the components will be global in the application. So, try to use unique class names for each component.

More general styles can be applied in the `index.css` file.

## BONUS 2 - Create the SearchBar
Create a new component called `SearchBar.jsx` in the `src/components` folder. This component will be the search bar of our application. It will contain an input.

The searchBar should be displayed in the CharacterList page. When the user types a name in the input the results should be filtered and displayed in the CharacterList page without reloading the page or making a new request to the API. (like we did in the nutrition lab). 

Remember what `lifting state up` means? We need pass the state as a prop to the SearchBar component. We also need to pass a function to the SearchBar component that will update the state in the CharacterList component. 

<details>
  <summary>Hint</summary>
  <p>Use the <code>filter</code> method to filter the characters array.</p>
  <p>Don't forget to use <code>toLowerCase()</code> to compare the names.</p>
  <p>Create a copy of the characters array before filtering it!</p>
</details>
