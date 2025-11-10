const memeArray = [
  "https://cdn-useast1.kapwing.com/static/templates/dwayne-the-rock-johnsons-eyebrow-raise-video-meme-template-full-ddbbaa57.webp",
  "https://pyxis.nymag.com/v1/imgs/d6a/dc7/4a5001b7beea096457f480c8808572428b-09-roll-safe.rsquare.w400.jpg",
  "https://e3.365dm.com/19/09/2048x1152/skynews-drew-scanlon-blinking-white-guy_4786055.jpg",
];

const captionsArray = [
  "Me: I'll just rest my eyes for 5 minutes. Also me: *wakes up in 2089*",
  "When you open your textbook and instantly forget how to read.",
  "My brain buffering when someone asks me to introduce myself.",
  "That moment you realize you've been arguing with Google Translate.",
  "Mood: running on caffeine, chaos, and questionable decisions.",
  "When the Wi-Fi drops, and you start remembering your childhood.",
  "Trying to act normal after sending a message to the wrong chat.",
  "POV: You said 'I'll start tomorrow'… 365 times.",
  "When you say 'no worries' but you're actually full of worries.",
  "Me explaining my life choices to my pet because therapy is expensive.",
];

let randomMeme = document.getElementById("random-meme");
let randomCaption = document.getElementById("random-caption");
let generateButton = document.getElementById("generator-button");

generateButton.addEventListener("click", function () {
  let randomImageIndex = Math.floor(Math.random() * memeArray.length);
  let randomCaptionIndex = Math.floor(Math.random() * captionsArray.length);

  randomMeme.src = memeArray[randomImageIndex];
  randomCaption.innerHTML = captionsArray[randomCaptionIndex];
});
