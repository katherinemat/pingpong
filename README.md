# Ping Pong

#### _Webpage that counts up to a number, replacing multiples of 3s with 'ping', multiples of 5s with 'pong', and multiples of 15 with 'pingpong', January 20, 2017_

#### By _**Katherine Matthews**_

## Description

_This webpage starts with a form for users to input any number, including decimals and negative numbers. With the user input number, this webpage will then count starting from 1 up until the user input number, replacing all multiples of 3 with 'ping', multiples of 5 with 'pong', and multiples of 15 with 'pingpong'. When the user submits her/his number, the initial form is hidden and the only things displayed are the count and a button with a fixed position on the page with a link back to the starting form. https://katherinemat.github.io/pingpong/_

## Setup/Installation Requirements

* _Clone repository from https://github.com/katherinemat/pingpong.git_
* _Double-click index.html to open this webpage in browser_
*_Type in number and click submit or hit enter_

## Known Bugs

_The counting function works as it should but the styling of this webpage is still not as fluid as it could be. Also, because a submit button and a button with a link to the homepage hide and show the form and results divs, it is no longer necessary to keep all the show and hide methods. I have left them here to meet the requirements of week 3's project._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_

#### Below is a list of the specification I wrote for this project:
1. return the number 1; input: 1; output: 1
2. count down from 2; input: 2; output: 2, 1
3. count down from 3; input: 3; output: 3, 2, 1
4. count down from 4; input: 4; output: 4, 3, 2, 1
5. count down from 5; input: 5; output: 5, 4, 3, 2, 1
6. count down from 6; input: 6; output: 6, 5, 4, 3, 2, 1
7. replace the number 3 with the word ping; input: 3; output: ping, 2, 1
8. replace the number 5 with the word pong; input: 6; output: 6, pong, 4, ping, 2, 1
9. replace the number 16 with the word pingpong; input: 15; output: pingpong, 14,...6, pong, 4, ping, 2, 1
10. replace any multiple of 3 and 5 with ping and pong, respectively; input: 10; output: pong, ping, 8, 7, ping, pong, 4, ping, 2, 1
11. replace any multiple of 15 with pingpong; input: 46; output: 46, pingpong, 44...
12. return a sentence if user does not enter a number; input: hey; output: "enter a number to get results"
13. replace decimal numbers with whole numbers and negative integers with positive integers to then run through program; input: 3.2; output: 3

### License

*This software is licensed under the GPL and MIT licenses.*

Copyright (c) 2017 **_Katherine Matthews_**
