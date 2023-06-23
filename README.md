# The Hogwarts House Sorting Quiz
The Hogwarts House Sorting Quiz is a quiz that determines the Hogwarts house the site user sorts into depending upon the choices they select for each question. Specifically, it is designed with 'Potterheads' in mind to provide a morsel of the experiences in the wizarding world for us 'muggles'. 

<!-- Add Am I Responsive? completed site image here -->

<!-- Add GitHub Pages link once deployed -->
---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

### User Stories

- #### First Time Visitors
    - As a First Time Visitor, I want to be able to identify the purpose of the quiz. 
    - As a First Time Visitor, I want to understand how to participate in the quiz.
    - As a First Time Visitor, I want to be able to navigate through the questions with ease. 
    - As a First Time Visitor, I want to be able to understand what it is that the question is asking with complete clarity. 

- #### Returning Visitors
    - As a Returning Visitor, I want to be able to access and begin the quiz swiftly and with ease. 
    - As a Returning Visitor, I want to have a complete understanding of the questions & complete them quickly and effectively. 

- #### Frequent Visitors
    - As a Frequent Visitor, I want to be able to carry out the quiz numerous times confidently. 

## Design

👩🏻‍💻 View an example of a completed design section [here](https://github.com/kera-cudmore/earth-day-hackathon-2022#Design)

### Colour Scheme

Due to the Home Page consisting of imagery, I decided to incorporate a colour scheme tailoring to the colours displayed within the images; for instance, the grey tones compliment the 'silver metal' that adorns the outside of each house crest. 

- I used `#0000` & `#fff` as the background color & text color of the submit/restart button.
- I used `#6c6c6c`as the border color of my start button.
- I used `##d0d0d0` as the background color of my start button. 

![Color Palette](/documentation/images/color-scheme-palette.png)

### Typography
[CDN Fonts](https://www.cdnfonts.com/) were used to import the following fonts:
- [HarryPotter7](https://www.cdnfonts.com/harrypotter7.font)
- [SPQR](https://www.cdnfonts.com/spqr.font)
 

The `'HarryPotter7'` font was selected as it's a calligraphic font which appears similar to that of the handwriting style used within the: magic textbooks, letters & Diagon Alley signage. 

!['Start' button typography](/documentation/images/start-button-typography.png)

Similarly, the `'SPQR'` font was utilised as the calligraphic style mimics the handwriting seen in the invitation letter to Hogwarts, generating the ambience of preparing for Hogwarts as a 1st-year student. 

![Answer button typography](/documentation/images/answers-typography.png)

### Imagery

As the quiz is based on the wizarding world of Harry Potter, I have selected the background image of Diagon Alley because it recreates the atmosphere of being a first-year student gathering school supplies and readying for September when the Sorting Hat would determine your Hogwarts House.

### Wireframes

- ### Main Page Wireframes

![Main Page](/documentation/wireframes/main-page-wireframe.png)

- ### Quiz Page Wireframes

![Quiz Page](/documentation/wireframes/quiz-page-wireframe.png)

- ### Results Wireframes

![Results](/documentation/wireframes/results-wireframe.png)

## Features

### General features on each page

 The site contains of two pages the home page & the quiz page
 All the pages consist of:
 - A favicon in the browser tab. 

 ![Favicon](/documentation/images/favicon-features.png)

 - The Harry Potter logo at the top of each site page which, in turn, is a link back to the home page. 

 ![Harry Potter logo](/documentation/images/hp-logo-features.png)

### The Home Page

The Home Page exhibits the Harry Potter logo as its title since it is easily recognisable, ensuring the site users are informed of the theme behind the website; following that, a row of the house crests is displayed underneath to relate to the purpose of the quiz which is to determine which Hogwarts house the site user is more tailored towards. What's more, there are audio controls in which the user can optionally play the sound of entering the Great Hall which, in turn, contributes to providing the site user with the atmosphere of Hogwarts & the wizarding world. Finally, there is a 'Start' button granting the user access to participate in the quiz. 

![Home Page](/documentation/images/home-page.png)

### The Quiz Page

Similarly, the Harry Potter logo displayed at the head of the page acts as a link to return to the home page. The container is set with the background image of parchment paper since it ties in with the Marauder's Map and the initial Hogwarts letter; the container holds four answer options each, correlating back to a House (e.g. Option A = Gryffindor). Once the user has selected their answer and prepares to submit it, hovering over the submit button will change the background colour to white and the text colour to black before progressing to the next question once clicked. Based upon the answer the user submits, each house's score will increase if their answer is selected; the user will be 'sorted' into the house with the highest score at the end of the quiz. 

![Quiz Page](/documentation/images/quiz-page.png)

### The Results

The results display the Harry Potter logo at the head of the page which acts as a link to return to the home page. Depending upon the user's majority answer choices, the message 'You Are...' at the end of the quiz will contain the Hogwarts house the user sorts into based on their choices; if the user wishes to reload the quiz, by clicking 'restart' they will be redirected back to the first question. 

![Results](/documentation/images/the-results.png)

## Technologies Used

### Languages Used

- HTML
- CSS
- JavaScript

### Frameworks, Libraries & Programs Used

- [Balsamiq:](https://balsamiq.com/) was used to develop the wireframes during the design process. 
- [GitHub:](https://github.com/) created the repository in which the project's code is pushed to from Git. 
- [Git:](https://git-scm.com/) was used within the GitPod Terminal in order to add, commit & push to GitHub. 
- [Favicon.io](https://favicon.io/) was used to convert the Sorting Hat PNG into a Favicon. 
- [Google Developer Tools](https://developers.google.com/web/tools) was used to test and resolve issues with style codes. 

## Deployment & Local Development

### Deployment

This site is deployed using GitHub pages - ![The Hogwarts House Sorting Quiz](https://lucynowland.github.io/hogwarts-house-sorting/)

In order to deploy the site you must carry out the following steps:
- SignUp/Login to GitHub.
- Head to the repository ![lucynowland/hogwarts-house-sorting](https://github.com/lucynowland/hogwarts-house-sorting).
- Select settings.
- Click 'Pages' on the left-hand navigation menu.
- On the 'Branch' dropdown menu select save then press save.
- The site has now been deployed successfully.

### Local Development

#### How to Fork

In order to fork the repository you must carry out the following steps:
- SignUp/Login to GitHub.
- Head to the repository ![lucynowland/hogwarts-house-sorting](https://github.com/lucynowland/hogwarts-house-sorting).
- Click the 'fork' button in the top right corner. 

#### How to Clone

In order to clone the repository you must carry out the following steps:
- SignUp/Login to GitHub.
- Head to the repository ![lucynowland/hogwarts-house-sorting](https://github.com/lucynowland/hogwarts-house-sorting).
- Click the clone button and select either: HTTPS, SSH or GitHub CLI on the 'local' section then copy the link provided. 
- Open the terminal in your chosen code editor and change the current working directory to the location you would like to use for your cloned directory.
- Type 'git clone' in the terminal and paste the link provided from the 'local' section before pressing Enter. 


## Testing

Start as you mean to go on - and get used to writing a TESTING.md file from the very first project!

Testing requirements aren't massive for your first project, however if you start using a TESTING.md file from your first project you will thank yourself later when completing your later projects, which will contain much more information.
  
Use this part of the README to link to your TESTING.md file - you can view the example TESTING.md file [here](milestone1-testing.md)

## Credits

### Code Used
- [Coding With Nick:](https://www.youtube.com/watch?v=CqddbIrEM5I)

[W3Schools](https://www.w3schools.com/)  was used to include the following code:
-  [Favicon](https://www.w3schools.com/howto/howto_html_favicon.asp)
-  [Alignment of images](https://www.w3schools.com/howto/howto_css_images_side_by_side.asp)
-  [Center alignment of button](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_center-flex_btn)
-  [Shadow buttons](https://www.w3schools.com/css/css3_buttons.asp)
    

If you have used some code in your project that you didn't write, this is the place to make note of it. Credit the author of the code and if possible a link to where you found the code. You could also add in a brief description of what the code does, or what you are using it for here.

### Content

- The structure and sections of content are taken from the README.md exemplar file developed by [Kera Cudmore](https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md).

Who wrote the content for the website? Was it yourself - or have you made the site for someone and they specified what the site was to say? This is the best place to put this information.

###  Media
[PNGEgg](https://www.pngegg.com/) was used to source the following images:

 - [Harry Potter Logo](https://www.pngegg.com/en/png-kdysu)
 - [Sorting Hat Favicon](https://www.pngegg.com/en/png-cwcjr#google_vignette)
 - [Gryffindor Crest](https://www.pngegg.com/en/png-nqglz)
 - [Slytherin Crest](https://www.pngegg.com/en/png-nerxh)
 - [Ravenclaw Crest](https://www.pngegg.com/en/png-owiqf)
 - [Hufflepuff Crest](https://www.pngegg.com/en/png-bttpu)
 - [Parchment Paper](https://www.pngegg.com/en/png-nkqry)

[Conde Nast Traveler:](https://www.cntraveler.com/activities/orlando/the-wizarding-world-of-harry-potter-diagon-alley) This site was used to download the background image of Diagon Alley. 
  
###  Acknowledgments

I would like to acknowledge the following people:
- Alan (CI Tutor Support) : A massive thank you for taking the time to resolve the cropping of an image canvas to ensure all the images are of equal size. 
- Holly (CI Tutor Support): A massive thank you for taking the time to explain storing data 



