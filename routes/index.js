var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "taco Cat"
  });
});

module.exports = router;

router.post('/', function(req, res) {
  res.render('index',{
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText)
  })
})







function checkPalindrome(phrase) {
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");

  let findSpace = phrase.search(" ");
  console.log(findSpace);
  if (findSpace != -1) {
    console.log("good");
    phrase.toLowerCase().replace(" ", "");
    findSpace = phrase.search(" ");
    console.log(findSpace);
  }
  console.log(phrase)
  // while (findSpace != -1) {
  //   phrase.toLowerCase().replace(" ", "")
  //   findSpace = phrase.search(" ");
  // }
  if (phrase.toLowerCase().replace(" ", "") === temp.toLowerCase().replace(" ", "") ){
    return true;
  }
  else {
    return false
  }

}


function getResultDescription (phrase) {
  if (checkPalindrome(phrase)) {
    return `${phrase} is a palindrome.`
  }
  return `${phrase} is not a palindrome.`
}