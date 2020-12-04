# Project Overview

## Project Name

Join The Band!

## Project Description

I would like to create an app for musicians looking to join a band or collaborate with other musicians. Musicians would be able to post on this website, and describe what kind of musician they are, and what kind of musician they are looking to work with (eg, if their band needs a bass player, or if they are a producer looking for a rapper, etc), as well as additional relevant information, such as their social media links. Some examples of similar sites include r/FindABand, [(link)](https://www.reddit.com/r/FindABand/)(which I’ve used in the past), join-the-band.com, [(link)](https://www.join-a-band.com/) etc. 

## Wireframes

Wireframe for Desktop:

![alt text](https://github.com/DavidVergheseProgrammer/joinTheBand/blob/main/pics/wireframeDesktop.png "Wireframe for Desktop")

Wireframe for Tablet

![alt text](https://github.com/DavidVergheseProgrammer/joinTheBand/blob/main/pics/wireframeTablet3.png "Wireframe for Tablet")

Wireframe for Phone

![alt text](https://github.com/DavidVergheseProgrammer/joinTheBand/blob/main/pics/wireframePhone.png "Wireframe for Phone")

## Component Hierarchy

In the App.js file, you make a call to the API. You pass this data to the Result, Social Media, and Contact components, similar to how the App.js file passed props to the Birds component in the Audubon-Website. In the Post component, you store the user's input as a property of state, then push this to the Airtable API. 

![alt text](https://github.com/DavidVergheseProgrammer/joinTheBand/blob/main/pics/componentheirarchy3.png "Component Heirarchy")

## API and Data Sample

Airtable: 

![alt text](https://github.com/DavidVergheseProgrammer/joinTheBand/blob/main/pics/Airtable.png "Airtable")

Postman:

![alt text](https://github.com/DavidVergheseProgrammer/joinTheBand/blob/main/pics/Postman.png "Postman")
 

### MVP/PostMVP

#### MVP 

- Homepage with user-submitted info.
- 'Post' page where users can submit info through a form.
- Get and post musician's profiles from Airtable.
- Have sound effects... eg a guitar riff when they click 'Post', or an airhorn.
- Have a working searchbar where users can search for profiles based on a certain filter (eg #guitarists). 

#### PostMVP  

- Get my friends who are musicians to create profiles
- Add a comments feature, so people can comment on profiles.
- Add an endorsement feature, so other users can endorse a musician's skills, similar to how you can endorse people's skills on LinkedIn.
 
## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Dec 3 | Prompt / Wireframes / Priority Matrix / Timeframes | 
|Dec 4| Project Approval | Incomplete
|Dec 7| Getting data from Airtable | Incomplete
|July 14| Core Application Structure (HTML, CSS, etc.)| Incomplete
|July 15| Working on Search Bar  | Incomplete
|July 16| MVP, Getting feedback from friends. | Incomplete
|July 17| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with Airtable | H | 3hrs| | |
| Graphic Design | Moderate | 3hrs| |  |
| Setting Up React| H | 3hrs| |  |
| Research | Moderate | 3hrs| |  |
| Writing Text | Moderate | 3hrs| |  |
| Feedback | Moderate | 3hrs|  | |
| Incorporating Suggestions | Moderate | 3hrs|  ||
| Debugging the code | H | 3hrs| | |
| Testing | H | 3hrs|  |  |
| Cleaning up the code | Moderate | 2hrs| | |
| Pseudocode | Low | 1hr| | |
| Preparing for presentation | Moderate | 1hr| | |
| Total | H | 31rs|  |  |

## SWOT Analysis

### Strengths:

Designing interface, basic React syntax, incorporating sound, graphic design.

### Weaknesses:

Flexbox, getting info from Airbase, more complicated React syntax.

### Opportunities:

Reaching out to musician friends to get their input, learning to add pictures and sound with Airtable.

### Threats:
Not being able to get data to display. Having too many parameters in Airtable.
