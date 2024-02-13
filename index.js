const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');



const app = express()



const getPageTitle = async (url) => {
    try {

        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const pageTitle = $('title').text().trim();
        if(!pageTitle){
            console.log("no title")
        }
        console.log("Page Title:", pageTitle);
    } catch (error) {
        console.log(error)
    }
}

getPageTitle("https://en.wikipedia.org/wiki/Cristiano_Ronaldo")

app.listen(PORT, ()=> console.log(`server running at port ${PORT}`))
