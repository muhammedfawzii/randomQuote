let quotes = [{
    quote: "Be yourself; everyone else is already taken."
},
{
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
},
{
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
},
{
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
},
{
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
},
{
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
},
{
    quote: "You only live once, but if you do it right, once is enough.",
},
{
    quote: "Be the change that you wish to see in the world",
},
{
    quote: "In three words I can sum up everything I've learned about life: it goes on",
},
{
    quote: "If you tell the truth, you don't have to remember anything",
},
{
    quote: "A friend is someone who knows all about you and still loves you.",
},
{
    quote: "To live is the rarest thing in the world. Most people exist, that is all",
},
{
    quote: "Always forgive your enemies; nothing annoys them so much",
},
]
function addQuote(){
    let randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quote-text").innerHTML = quotes[randomNum].quote;
    document.getElementById("quote-parent").style.display= "block"
}