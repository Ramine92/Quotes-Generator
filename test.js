//Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const QuotesData = [
  {quote: "The only way to do great work is to love what you do.", person: "Steve Jobs"},
  {quote: "The purpose of our lives is to be happy.", person: "Dalai Lama"},
  {quote: "Life is what happens when you're busy making other plans.", person: "John Lennon"},
  {quote: "Get busy living or get busy dying.", person: "Stephen King"},
  {quote: "You only live once, but if you do it right, once is enough.", person: "Mae West"},
  {quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", person: "Thomas A. Edison"},
  {quote: "If you want to live a happy life, tie it to a goal, not to people or things.", person: "Albert Einstein"},
  {quote: "Never let the fear of striking out keep you from playing the game.", person: "Babe Ruth"},
  {quote: "Money and success don’t change people; they merely amplify what is already there.", person: "Will Smith"},
  {quote: "Your time is limited, so don’t waste it living someone else’s life.", person: "Steve Jobs"},
  {quote: "Not how long, but how well you have lived is the main thing.", person: "Seneca"},
  {quote: "If life were predictable it would cease to be life, and be without flavor.", person: "Eleanor Roosevelt"},
  {quote: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.", person: "Henry Ford"},
  {quote: "In order to write about life first you must live it.", person: "Ernest Hemingway"},
  {quote: "The big lesson in life, baby, is never be scared of anyone or anything.", person: "Frank Sinatra"},
  {quote: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", person: "Leo Burnett"},
  {quote: "Life is not a problem to be solved, but a reality to be experienced.", person: "Soren Kierkegaard"},
  {quote: "The unexamined life is not worth living.", person: "Socrates"},
  {quote: "Turn your wounds into wisdom.", person: "Oprah Winfrey"},
  {quote: "The way I see it, if you want the rainbow, you gotta put up with the rain.", person: "Dolly Parton"},
  {quote: "Do all the good you can, for all the people you can, in all the ways you can, as long as you can.", person: "Hillary Clinton"},
  {quote: "Don’t settle for what life gives you; make life better and build something.", person: "Ashton Kutcher"},
  {quote: "Everything negative – pressure, challenges – is all an opportunity for me to rise.", person: "Kobe Bryant"},
  {quote: "I like criticism. It makes you strong.", person: "LeBron James"},
  {quote: "You never really learn much from hearing yourself speak.", person: "George Clooney"},
  {quote: "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.", person: "Celine Dion"},
  {quote: "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty.", person: "John F. Kennedy"},
  {quote: "Live for each second without hesitation.", person: "Elton John"},
  {quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", person: "Albert Einstein"},
  {quote: "Life is really simple, but men insist on making it complicated.", person: "Confucius"},
  {quote: "Life is a succession of lessons which must be lived to be understood.", person: "Ralph Waldo Emerson"},
  {quote: "My mama always said, life is like a box of chocolates. You never know what you’re gonna get.", person: "Forrest Gump"},
  {quote: "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.", person: "Lao-Tze"},
  {quote: "When we do the best we can, we never know what miracle is wrought in our life or the life of another.", person: "Helen Keller"},
  {quote: "The healthiest response to life is joy.", person: "Deepak Chopra"},
  {quote: "Life is short, and it is here to be lived.", person: "Kate Winslet"},
  {quote: "The longer I live, the more I realize that impact is the only thing that matters.", person: "Ben Higgins"},
  {quote: "Every moment is a fresh beginning.", person: "T.S. Eliot"},
  {quote: "When you cease to dream you cease to live.", person: "Malcolm Forbes"},
  {quote: "If you spend your whole life waiting for the storm, you’ll never enjoy the sunshine.", person: "Morris West"},
  {quote: "Don’t cry because it’s over, smile because it happened.", person: "Dr. Seuss"},
  {quote: "If you can do what you do best and be happy, you’re further along in life than most people.", person: "Leonardo DiCaprio"},
  {quote: "We should remember that just as a positive outlook on life can promote good health, so can everyday acts of kindness.", person: "Hillary Clinton"},
  {quote: "There are no mistakes, only opportunities.", person: "Tina Fey"},
  {quote: "Once you figure out who you are and what you love about yourself, I think it all kind of falls into place.", person: "Jennifer Aniston"},
  {quote: "Happy is the man who can make a living by his hobby.", person: "George Bernard Shaw"},
  {quote: "Just disconnect. Once in a day sometime, sit silently and from all connections disconnect yourself.", person: "Yoda"},
  {quote: "Be where you are; otherwise you will miss your life.", person: "Buddha"}
];
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random()*QuotesData.length);
  quote.innerText = QuotesData[random].quote;
  person.innerText = QuotesData[random].person;
})
