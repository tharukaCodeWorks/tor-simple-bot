# tor-simple-bot
Tor Simple Bot

Steps:
  1. Download Docker And Install
  2. Run ```docker run -it -p 9050:9050 -d dperson/torproxy``` or ```docker run -it -p 9050:9050 -d dperson/torproxy -l {{country code}}```
  3. Open cmd in ```tor-simple-bot```
  4. Install NodeJS
  5. Run ```npm i socks-proxy-agent``` in cmd
  6. Run ```node searchBot.js``` in cmd
