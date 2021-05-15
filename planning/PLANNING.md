# PLANNING 
- User Stories

### SCHEDULE 
- 11am start - 7pm 
- We can work nights if need be. We're flexible
- Document review before meeting with Francis 
- No more coding until after meeting

### DEVELOPMENT APPROACH 
- 1/2 hour scrum meeting to start every day 
- 1-2hrs of pair programming per day
- Utilize trello board
- Pair-programming + vertical approach
- Have second planning session when MVP is complete

### DEMOGRAPHICS 
- Target audience
  - 18+
  - Define what crypto-related demographic we're developing for 
  - Demographics help us decide what features to provide next 

## FEATURES 

### MVP Features
- User Authentication - https://web.compass.lighthouselabs.ca/activities/1076/lectures/4375
- User Register 
- Render chart with adjustable time period
- Add API key pair
- Display all available exchanges
- Display all available coins within exchange
- User trades table
- Show balance
- Show P&L
- (stretch) websockets live price update - connect using socket.io

### Stretch Features

#### Statistical Analysis
- P&L across all user exchanges per coin
- Volume indicator

#### Social/News
- Show tweets related to coin
- Show news related to coin 

## FLOW 
- User registers/ user logs in > user can add and save API keys to profile 

## USER STORIES 

### MVP User Stories
- As a user I want to use my credentials to log in 
- As a user I can add and save my personal exchange API keys because I want to have access to them in the future
- As a user I can search for coins because I want to see data related to portfolio's performance
- As a user I can add coins to my profile  because I want to have access to them in the future
- A user can see coin charts in 45 min candles - stretch: (5m, 45m, 1hr, 1day, 1week) because I want to see my coin's performance over different periods of time
- As a user I can see personal entries and exits because I want to visualize my trades
- As a user I can see value of a single coin from a single exchange so I can make informed decisions regarding future trades 
- As a user I can see profit and loss from a single coin and single exchange so 
I can see how my investments are performing

### Stretch User Stories
Stretch - As a, I can see profit and loss and balance for one coin from several exchanges
Stretch - A user can see volume and/or other technical indicators
Gigantic Stretch - A user can generate data, reports, to decide when to buy and when to sell
Stretch - As a user I can see tweets regarding a selected coin because I want to use social information so I can make informed decisions regarding future trades 
Stretch - As a user I can see news regarding a selected coin because I want to use this information so I can make informed decisions regarding future trades
Stretch - I want to see data from a closed account 

## WIREFRAME
- https://www.figma.com/file/73IVglxA0f5roqMxiEORuH/crypto-tracker-wireframe?node-id=0%3A1

## STATE
- currentExchange 
- currentCoin
- currentCurrency

## ERDs 
- https://drive.google.com/file/d/1FOD6Wse3WplYS_vHouxiciHn2P2E0-PV/view?usp=sharing

## STACK
- React.js
- Express.js
- D3
- ccxt 
- postgreSQL
- Storybook 

## ROUTES 
### React Routes
- /settings
- /login
- /register
- /main
- (stretch) - show all available coins 

### Express Routes
- GET /api/users/:id === get user information
- POST /api/users/new === register user 
- POST /api/login === log user in (set cookies)
- POST /api/logout === log user out (delete cookies)
- GET /api/users/exchanges/:id === get user exchanges 
- POST /api/users/exchanges/new === add user exchanges


## MILESTONES/DEADLINES etc.. 
- Start planning presentation on the 17th of May 
- Done MVP by at least Saturday May 13th 
- Stretch features by May 16th 
- All planning done by EOD Saturday 8th

## COMMUNICATION 
- Discord, Slack
- Github session to get on the same page 

## GITHUB PROTOCOL 
- 

## TASKS 

## Planning 
- Populate planning document
- Meeting with Francis 
- Finalize planning document 
- Hold github practice session 
- Hold echange practice session
- Personal crypto research
- Read D3 docs and candlestick guide
- Read ccxt docs 
- Play with ccxt 
- Create Trello board/accounts
- Develop ERDs 
- Record structure of API data

## Building Components 
- Hard code example data for testing components 
- Write basic html for each component 
- Button
- Chart 
- Form
- Coin table 
- Register Form
- Login Form
- InfoDisplay
- DropdownMenu (for exchange and currency)
- Trades Table 
- Logo
- Navbar/header
- Style all components 

## dB
- Set up express routes
- build queries 
- Develop schema 
- Migrate seeds (base those on current api data)

## API Handling 
- connect API routes to UI
  - Build gatherExchangeData function
  - Connect to front-end

## Front-End
- Setting up useState
- Set up props 
- Perfect styling 

## User Authentication 
- Develop logic for login/logout/register
- Impliment cookies
- Password/cookie encryption

# STRETCH 

#### Statistical Analysis
- Develop gatherCoinData function
  - gathers coin data from all user exchanges
- Use volume data to develop volume indicator
  - Place it behind or underneath main chart

#### Social/News
- Develop tweet feed
  - find and use and embed twitter api 
- Develop news feed 
  - research, find and embed news api 

#### DB

- Take snapshot of user info
- Save in dB 
- Conditionally render from dB in case of API outage 

### Pair-Programming 
- Design tables
- Code routes
- Impliment show coins page

### Individual Tasks (vertical)
- Design mock-ups
  - Header
  - Register
  - Login 
  - Settings
- Design ERDs 

## QUESTION FOR FRANCIS
- Testing?!?!

## TOMORROW (FINISH MVP)
- Style user login 
- Style user Register 
- Add labels to options 
- Add filter to top of coin table 
- (minor) create error message if filter returns no coins 
- Test backend routes for login and register 
- Setup exchange backend 
- Testing db queries 
- Adding transactions to db 
  - figure out flow for this 
- 
