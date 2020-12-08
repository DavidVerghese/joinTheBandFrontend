# PROJECT ISSUE TICKET

## Unexpected Behavior

My search bar is mostly functional, but when I search for certain users (Jane, Eminem, Drake, or Doug) the search results display them to the left instead of in the center. This is unusal, as all the other search results are set to display in the center of the page, and I don't see why these four users would be different. None of them are in different classes or have any different CSS style rules than the other musicians.

## Expected Behavior

I expected the search results for Jane, Eminem, Drake, and Doug to display in the center of the page, like the other users.

## Reproduce the Error

```md
1. Clone this repo.
2. Run `npm start`, `npm i`, `npm i axios`, `npm install react-router-dom`
3. Navigate to the landing page.
4. In the search bar, search for 'Doug', 'Eminem' or 'Jane'.
5. See the subsequent error in the page.
```

## Documentation

What it's supposed to look like: 

![alt text](https://github.com/DavidVergheseProgrammer/joinTheBand/blob/main/pics/issueTicket2Normal.png "What it normally looks like")

What it looks like for Drake, Jane, Eminem, and Doug: 

![alt text](https://github.com/DavidVergheseProgrammer/joinTheBand/blob/main/pics/issueTicket2Left.png "Result for Drake")

## Attempted Resolution

```md
1. https://stackoverflow.com/questions/58322693/reactjs-wrong-elements-position
2. https://stackoverflow.com/questions/39847377/wrong-positioning-of-react-material-ui-popover-while-creating-a-component
```
