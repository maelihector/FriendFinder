# [BestFriendFinder(BFF)](https://best-friend-finder.herokuapp.com/)

## What is BFF?

  

BFF is a full-stack compatibility-based application that uses [Node.js](https://nodejs.org/en/) and [Express.js](http://expressjs.com/) to handle routing.

## What does BFF do?

  

BFF invites users to partake in a personality-based matching service by asking them to fill-out and submit a ten-question survey. BFF captures the user's submitted survey answers and compares those answers with those of other users to return and display the name and picture of the user's closest match.

  

## How does BFF work?

Each survey question has five answers to choose from, each of which has a unique value of either 1, 2, 3, 4, or 5 attached to it. When a user submits a survey BFF converts the survey results into a simple array of numbers that match the values of the chosen answers:

```newUserAnswers = [2, 2, 3, 4, 5, 1, 1, 4, 2, 3];```

BFF takes the new user's answers array and compares each of the values to the respective values of **all** the previously submitted answers arrays and returns their total number of differences. 

For example, the comparison below would return the number 11.
```
newUserAnswers = [2, 2, 3, 4, 5, 1, 1, 4, 2, 3];
prevUserAnswers = [5, 3, 1, 4, 3, 1, 1, 5, 4, 3];
totalDiff = 11; // 3+1+2+0+2+0+0+1+2+0;
```
BFF then chooses the friend who has the least amount of total differences (if there's more than one, BFF chooses the most recent). 


## How do I use BFF? 

BFF is hosted on [Heroku](https://heroku.com). Go to [BFF](https://best-friend-finder.herokuapp.com/) to check it out.

## Technologies Used

 1. HTML
 2.  [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
 3. JavaScript
 4. [jQuery](https://jquery.com/)
 5. [Heroku](https://heroku.com)
 6. [Node.js](https://nodejs.org/en/)
 7. [Express](https://expressjs.com/)

	 ([Npm](https://www.npmjs.com/) Installs)
		 
--[Body-Parser](https://www.npmjs.com/package/body-parser) 	
--[Path](https://www.npmjs.com/package/path)
  
## Credits
  
### [Unsplash](https://unsplash.com/)

> Written with [StackEdit](https://stackedit.io/).
