const https = require('https');
const { SocksProxyAgent } = require('socks-proxy-agent');

for(let i=0; i<500; i++){
    setTimeout(function(){
        const agent = new SocksProxyAgent('socks5h://127.0.0.1:9050');
        await https.get('https://www.google.com/search?q=chanuka+nadun&sxsrf=ALeKk01_lvx9RldZ38BS3Ivh__AYqLjqSg%3A1617615821355&source=hp&ei=zdtqYK7PE43RrQGlnLXoCQ&iflsig=AINFCbYAAAAAYGrp3T58xF61axXQ66XeM-XivV73fyKT&oq=chanuka+nadun&gs_lcp=Cgdnd3Mtd2l6EAMyBwghEAoQoAEyBwghEAoQoAE6BwgjEOoCECc6BAgjECc6BQgAEJECOggIABCxAxCDAToFCAAQsQM6AggAOgQIABBDOg4ILhCxAxCDARDHARCvAToICC4QsQMQgwE6CgguEMcBEKMCEEM6BwguELEDEEM6BQguELEDOgIILjoFCC4QkwI6BAgAEAo6CAgAEBYQChAeOgYIABAWEB5Q9B5YuDlgz0VoAXAAeACAAYYCiAGCDZIBBjIuMTAuMZgBAKABAaoBB2d3cy13aXqwAQo&sclient=gws-wiz&ved=0ahUKEwju6abD6ObvAhWNaCsKHSVODZ0Q4dUDCAc&uact=5', {
            agent
            }, res => {
                console.log("Request Done...");
                console.log("\n")
            });
    }, Math.floor(Math.random() * 1000000) + 5000);
}
 