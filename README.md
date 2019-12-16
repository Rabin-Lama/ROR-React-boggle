# ROR-React-Boggle

This is a simple project based on a famous word game Boggle. The front-end is built using React JS (16.12.0)
while the back end is powered by Ruby (2.6.3) on Rails (6.0.1).

**Note**: There might be pieces of codes using features of specific version of the language or frameworks
so make sure that your system welcomes the specified versions. 

## Installation

**Note**: The provided intructions are for linux OS.

Open up a terminal and navigate to a location where you would like to download this project.
Then, enter the given commands sequentially

Clone the project to you local directory using `HTTPS`

```
git clone https://github.com/Rabin-Lama/ROR-React-boggle.git
```

Navigate inside the downloaded project

```
cd ROR-React-boggle
```

Install all back-end dependencies

```
bundle install
```

Install all front-end dependencies

```
yarn install
```

Migrate db

```
rails db:migrate
```

Run rails server

```
rails s
```

By default,  the server tries to run on port 3000.
So if you want to run it on a different port:

```
rails s -p <port>
```

Open up your browser and access the app via url `http://localhost:<port>`

**Disclaimer**

This project uses https://developer.oxforddictionaries.com
api to validate if a word is valid. So even abbreviations will
be accepted as a valid word. E.G. kl stands for kilolitre(s)

**Enjoy !**