# Web App-SF places where movies been filmed.

There are steps to serve locally and serve production build.

### Access Locally

Pulldown a local copy of the Github repository created for you, with the name you specified in the previous step
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn / npm install
$ put google api key in .env file
$ yarn start / npm run start
```

### you'll need to run a production build in production so you can test locally too

```
$ yarn build / npm run build
```


## Code Challenge terms

### `Problem`
 Creating a service that shows on a map where movies have been filmed in San Francisco. The user should be able to filter the view using autocompletion search.

### `Solution`
 In a given map we show marker of each places where movies had filmed. With the help of collections of movies and selecting each movie name, we can see marker of movie filmed in map. In addition to marker, we can see the extra information in side card with title, location and released year.

### Front-end-track
  My solution is focused on front-end. I'm trying to provide much information to users and trying to manipulate data as required to show in frontend. 

  Techincal aspects for this projects was influenced by the earlier experience. Simple Architecture is my motto in any projects. 

  Beside the including features, there are lost of feature I was trying to include. 
  1. Filter by release year.
  2. Data visualization for movies by release year.
  3. Show extra information of movies in side card.
  4. Clickable location on side card which gives exact location to map.

  As enchanced technical aspect, I was trying to build whole feature in react hooks, implement styled components, introduce memoization techniques and colocation technique. Due to time frame, I'm not able to implement any test cases.

  ### Link to my other code
  https://github.com/dikenulak/lexicon-components

  ### Link to profile
  https://www.linkedin.com/in/diken-ulak-a35659126/

  ### Link to hosted application

  https://github.com/dikenulak/sf-movies (Front-end)
  URL: https://dikenulak.github.io/sf-movies/

  https://github.com/dikenulak/sf-movies-backend (Minimal backend API)
  URL: https://sf-movies-backends.herokuapp.com/api/v1/list

