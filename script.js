
const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call fake spaghetti? An impasta!",
    "Why couldn't the bicycle stand up by itself? Because it was two-tired!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "How does a penguin build its house? Igloos it together!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call a fish wearing a crown? A kingfish!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How does a snowman get around? By riding an 'icicle!",
    "What do you call a fake noodle? An impasta!",
    "Why don't oysters donate to charity? Because they are shellfish!",
    "What did the ocean say to the shore? Nothing, it just waved!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a pile of cats? A meowtain!",
    "Why was the belt arrested? Because it was holding up a pair of pants!",
    "Why did the cookie cry? Because its mom was a wafer too long!",
    "What do you call a sleeping bull? A bulldozer!",
    "Why did the math book look sad? Because it had too many problems!",
    "How does a penguin build its house? Igloos it together!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What's orange and sounds like a parrot? A carrot!",
    "How do you organize a space party? You planet!",
    "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "What's a vampire's favorite fruit? A blood orange!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "How do you organize a space party? You planet!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a pile of cats? A meowtain!",
    "Why did the cookie cry? Because its mom was a wafer too long!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why did the math book look sad? Because it had too many problems!",
    "How does a penguin build its house? Igloos it together!",
    "What did the ocean say to the shore? Nothing, it just waved!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What's orange and sounds like a parrot? A carrot!",
    "How do you organize a space party? You planet!",
    "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "What's a vampire's favorite fruit? A blood orange!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "How do you organize a space party? You planet!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a pile of cats? A meowtain!",
    "Why did the cookie cry? Because its mom was a wafer too long!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why did the math book look sad? Because it had too many problems!",
    "How does a penguin build its house? Igloos it together!",
    "What did the ocean say to the shore? Nothing, it just waved!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What's orange and sounds like a parrot? A carrot!",
    "How do you organize a space party? You planet!",
    "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "What's a vampire's favorite fruit? A blood orange!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "How do you organize a space party? You planet!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a pile of cats? A meowtain!",
    "Why did the cookie cry? Because its mom was a wafer too long!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why did the math book look sad? Because it had too many problems!",
    "How does a penguin build its house? Igloos it together!",
    "What did the ocean say to the shore? Nothing, it just waved!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What's orange and sounds like a parrot? A carrot!",
    "How do you organize a space party? You planet!",
    "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "What's a vampire's favorite fruit? A blood orange!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "How do you organize a space party? You planet!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a pile of cats? A meowtain!",
    "Why did the cookie cry? Because its mom was a wafer too long!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why did the math book look sad? Because it had too many problems!",
    "How does a penguin build its house? Igloos it together!",
    "What did the ocean say to the shore? Nothing, it just waved!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What's orange and sounds like a parrot? A carrot!",
    "How do you organize a space party? You planet!",
    "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "What's a vampire's favorite fruit? A blood orange!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "How do you organize a space party? You planet!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a pile of cats? A meowtain!",
    "Why did the cookie cry? Because its mom was a wafer too long!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why did the math book look sad? Because it had too many problems!",
    "How does a penguin build its house? Igloos it together!",
    "What did the ocean say to the shore? Nothing, it just waved!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What's orange and sounds like a parrot? A carrot!",
    "How do you organize a space party? You planet!",
    "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "What's a vampire's favorite fruit? A blood orange!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "How do you organize a space party? You planet!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a pile of cats? A meowtain!",
    "Why did the cookie cry? Because its mom was a wafer too long!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why did the math book look sad? Because it had too many problems!",
    "How does a penguin build its house? Igloos it together!",
    "What did the ocean say to the shore? Nothing, it just waved!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What's orange and sounds like a parrot? A carrot!",
    "How do you organize a space party? You planet!",
    "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "What's a vampire's favorite fruit? A blood orange!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "How do you organize a space party? You planet!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a pile of cats? A meowtain!",
    "Why did the cookie cry? Because its mom was a wafer too long!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why did the math book look sad? Because it had too many problems!",
    "How does a penguin build its house? Igloos it together!",
    "What did the ocean say to the shore? Nothing, it just waved!",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What's orange and sounds like a parrot? A carrot!",
    "How do you organize a space party? You planet!"
];




// console.log(`The random num is ${num} and joke is: ${ans}`)

const jokeBtn = document.querySelector(".btn button");

function addTask(){
    // alert("hlo")

    let num = Math.floor((Math.random()*jokes.length-1));
   let ans = jokes[num];

    document.querySelector(".joke h3").innerHTML =ans;

}
  

jokeBtn.addEventListener("click",()=>{
    addTask();
});



  
