const express = require('express')
const app = express()
app.use(express.json()); // extract json data from req

const jokes= [
        {
            "category": "Programming",
            "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
            "id": 4
        },
        {
            "category": "Programming",
            "joke": "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.",
            "id": 22
        },
        {
            "category": "Programming",
            "joke": "Why did the programmer quit his job? Because he didn't get arrays.",
            "id": 16
        },
        {
            "category": "Programming",
            "joke": "Why did the programmer quit his job? Because he didn't get arrays.",
            "id": 18
        },
        {
            "category": "Programming",
            "joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
            "id": 37
        },
        {
            "category": "Programming",
            "joke": "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
            "id": 43
        },
        {
            "category": "Programming",
            "joke": "Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\"",
            "id": 45
        },
        {
            "category": "Programming",
            "joke": "Why are Assembly programmers always soaking wet? They work below C-level.",
            "id": 264
        },
        {
            "category": "Programming",
            "joke": "Why is Linux safe? Hackers peak through Windows only.",
            "id": 260
        }
]
app.get('/random', function(req, res){
    const ind=Math.floor(Math.random()*10)
    console.log('send joke of index nmbr', ind)
    res.send(jokes[ind])
})

app.post('/joke', function(req, res){
    console.log(req.body); //kya kya hai dekhne ke liye
    console.log(jokes.length); // phle ka length
    jokes.push(req.body); // server se yha push kia
    res.send('thanks for contribution');
    console.log(jokes.length);
    
})

app.listen(5005, function(){
    console.log('port 5005 is active');
})