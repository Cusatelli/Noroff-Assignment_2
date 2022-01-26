<div id="top"></div>

<div align="center">
  <img src="/resources/TriviaGameLogo.png" alt="Trivia Game Logo" width="250" height="250">
  <h3 align="center">Assignment 2</h3>
  <p align="center">
    Noroff
    <br />
    <a href="https://vue-3-heroku-deploy.herokuapp.com/">View Demo</a>
  </p>
</div>

# Table of Contents
1. [Instructions](#instructions)
2. [Appendix A](#appendix-a)
3. [Demo](#demo)
4. [Install](#install)
5. [Usage](#usage)
6. [Maintainers](#maintainers)
7. [Contributing](#contributing)
8. [Conventions](#conventions)
9. [License](#license)
10. [Contact](#contact)

# Instructions
### The Trivia Game
<p>
  Build an online trivia game as a Single Page Application using the Vue.js framework (version 3.x).
  You have freedom to be as creative as you wish, as long as it meets the minimum requirements described in Appendix A.
</p>
<ol>
  <li>
    <p>Set up the development environment.</p>
    <p>Make sure you have the following tools available:</p>
    <ul>
      <li>Figma</li>
      <li>NPM/Node.js (LTS – Long Term Support version)</li>
      <li>Vite CLI or Vue CLI</li>
      <li>Visual Studio Code Text Editor / IntelliJ</li>
      <li>Browser Developer Tools for testing and debugging o Vue Dev Tools</li>
      <li>Git</li>
      <li>Rest API: https://github.com/dewald-els/noroff-assignment-api</li>
      <li>Heroku</li>
    </ul>
  </li>
  <li>
    <p>Recommended: Design a component tree</p>
    <p>
      Use Figma to create a component tree of the application.
      The component tree should show the pages and feature components you plan to create in your application.
      This will count towards the overall grade for the application. It should be done BEFORE a single line of code is written.
    </p>
    <img src="/resources/Component Diagram.png" alt="Example Component Diagram: Trivia Game">
  </li>
  <li>
    <p>Write HTML & CSS as needed</p>
    <ul>
      <li>Colours: If you have trouble choosing colours, use a free resource like https://coolors.co to browse and experiment with colour combinations.</li>
      <li>Animations: If you want to use animations to bring your design to life, use https://animate.style/.</li>
      <li>Free graphics for your web applications: https://www.justinmind.com/blog/35-places-to-get-free-vectorimages-for-your-designs/</li>
    </ul>
  </li>
  <li>
    <p>Use the Vue.js framework to build the following screens into your trivia game  (See Appendix A for detailed specs):</p>
    <ul>
      <li>The start screen</li>
      <li>The question screen</li>
      <li>The result screen</li>
    </ul>
  </li>
  <li>
    <p>Submit</p>
    <ul>
      <li>Export the component tree to PDF, upload the file to your Git repository and submit a link to your file.</li>
      <li>
        Publish your Single Page Application on Heroku and submit a link to your game and the source code on your Git repository.
        Use https://gitlab.com/javascript-project-examples/heroku-deployment-guides to learn how to deploy Vue apps to Heroku.
      </li>
    </ul>
  </li>
</ol>

<p align="right">(<a href="#top">back to top</a>)</p>

# Appendix A
### Requirements for the Trivia Game
1. API Configuration (OpenDB and Trivia API)
    <ul>
      <li>Use the website https://opentdb.com/api_config.php to generate an API link for your questions.</li>
      <li>Use the documentation to figure out how to set the difficulty, number of questions and category.</li>
      <li>Setup and deploy the “Trivia API” provided in setup environment to store the username and high score for that user.</li>
    </ul>
  
2. Start Screen
    <ul>
      <li>Your app should start on a “Start Screen.”</li>
      <li>Capture a username using an input</li>
      <li>The user must be able to select the difficulty, number of questions and category.</li>
      <li>The user must click a button or anywhere on the screen to start playing.</li>
      <li>The user should be saved to the Trivia API database</li>
    </ul>

```
User Constraint: 
1.  Remember to check if the username already exists in the API’s database 2.
    Consult the provided docs for guidance (Section 1 of the document)
```

3. Question Screen
    <ul>
      <li>Once the game starts, the app must fetch the questions from the API setup in the previous step. The app must ONLY display ONE question at a time.</li>
      <li>If it is multiple choice, have 4 buttons with each answer as the text. If it is a True/False question, only display 2 buttons, one for True and one for False.</li>
      <li>Once a question is answered the app must move on to the next question.</li>
      <li>When all the questions have been answered the user must be presented with the result screen.</li>
    </ul>
4. Result Screen
    <ul>
      <li>The result screen must show all the questions along with the correct and user’s answers.</li>
      <li>Display the total score.</li>
      <li>Display a button to take the user back to the start screen or replay with different questions, but at the current difficulty level and category.</li>
      <li>Save the score to the API, if it is higher than the existing score for the current user</li>
    </ul>

```
Scoring Constraint:
1.	Each correctly answered question should count 10 points. 
2.	Only update the score on the API if it is higher than the previous score 
```

<p align="right">(<a href="#top">back to top</a>)</p>

# Demo
The demo linked to heroku is a copy of this repository which is why you see FAILURE under Environments.
We had trouble linking this repository to the Heroku CLI so we resorted to making a clone which worked.
On the other hand we do not have access to the /trivia db.json file in our demo so you will be greeted with an error when trying to log in, therefore we recommend you try the app in your local environment.

If you want to use the demo make sure you have `user | {"username":"John Doe"}` in your local storage.
Lastly you will be greeted by another error when trying to read highscore from the API. However your local score should still be recorded with right and wrong answers highlighted. Thank you for your patience!

<a href="https://vue-3-heroku-deploy.herokuapp.com/">View Demo</a>

# Install
```
cd app
npm install
```

# Usage
```
npm run dev
```

<p align="right">(<a href="#top">back to top</a>)</p>

# Maintainers
[@Cusatelli](https://github.com/Cusatelli)

[@OmarAbdiAli](https://github.com/OmarAbdiAli)

# Contributing
[@OmarAbdiAli](https://github.com/OmarAbdiAli)

<p align="right">(<a href="#top">back to top</a>)</p>

# Conventions
`fix: <description>` a commit of the type fix patches a bug in your codebase (this correlates with `PATCH` in Semantic Versioning).<br/>
`feat: <description>` a commit of the type feat introduces a new feature to the codebase (this correlates with `MINOR` in Semantic Versioning).<br/>
`BREAKING CHANGE: <description>` a commit that has a footer `BREAKING CHANGE:`, or appends a ! after the type/scope, introduces a breaking API change (correlating with `MAJOR` in Semantic Versioning). A `BREAKING CHANGE` can be part of commits of any type.

Read more: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) v1.0.0

<p align="right">(<a href="#top">back to top</a>)</p>

# License
No active license.

<p align="right">(<a href="#top">back to top</a>)</p>

# Contact
Email: <a href="mailto:github.cusatelli@gmail.com">github.cusatelli@gmail.com</a>

<p align="right">(<a href="#top">back to top</a>)</p>
