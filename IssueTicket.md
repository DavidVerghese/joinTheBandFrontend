# PROJECT ISSUE TICKET

## Unexpected Behavior

> In my table, I have the fields "Name" and "Instrument" (my app is an app for musicians). I have created two search functions. One searches for entries in the Airtable based on name, the other searches for entries based on the instrument. When you hit the submit button, it renders the entries it finds. For example, I created a profile for Drake. If you search 'Drake' or 'Rapper', you will get his profile. Since the syntax for the two search functions is basically the same, I want to see if it would be possible to condense the two functions into one reusable function with parameters. However, I am having problems adding parameters into my search function.

## Expected Behavior

> I want the function 'searchByAnything' on line 32 in App.js to be a substitute for 'searchByName' on line 19 and 'searchByInstrument' on line 25.

## Reproduce the Error

> 
1. Clone this repo.
2. Run `npm start`, `npm i`, `npm i axios`, `npm install react-router-dom`
3. Navigate to the landing page.
4. Uncomment lines 34-39,86-89, then comment out lines 92-95 in App.js.
5. The error message should be there already.


## Documentation


```md
src/App.js
  Line 84:75:  'e' is not defined  no-undef
  Line 86:82:  'e' is not defined  no-undef

Search for the keywords to learn more about each error.
```

## Attempted Resolution


```md
1. https://stackoverflow.com/questions/45082651/e-undefined-in-react-js-component
2. https://stackoverflow.com/questions/40223137/referenceerror-e-is-not-defined-in-react-app
```