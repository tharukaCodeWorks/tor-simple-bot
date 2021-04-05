const https = require('https');
const { SocksProxyAgent } = require('socks-proxy-agent');

for(let i=0; i<500; i++){
    setTimeout(function(){
        const agent = new SocksProxyAgent('socks5h://127.0.0.1:9050');
        await https.get('https://www.google.com/search?q=chanuka+nadun', {
            agent
            }, res => {
                console.log("Request Done...");
                console.log("\n")
            });
    }, Math.floor(Math.random() * 1000000) + 5000);
}
 
