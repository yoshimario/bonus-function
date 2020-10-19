const sentencePrompt = prompt("Please enter a sentence:");
alert(sentencePrompt);

function capital (sentencePrompt) {

	let finalSentence = sentencePrompt.charAt(0).toUpperCase() + sentencePrompt.slice(1);
  
  let lastLetter =  finalSentence.charAt(finalSentence.length-1).toUpperCase();
  
  let test = finalSentence.substring(0, finalSentence.length-1);
  let test2 = test + lastLetter;
  
return test2; 
 
};

let finalSentence = capital(sentencePrompt); 

alert(finalSentence); 

function swap (string) {

let first=string.charAt(0);
let last=string.charAt(string.length-1);

let newstring = last + string.slice(1);
let newstring2 = newstring.substring(0,newstring.length-1);
let newstring3= newstring2 + first; 


return newstring3; 

}

let output = swap (finalSentence);
alert(output); 

function firstLastChar(string) {

	let firstChar = capital(string).charAt(0);
  let lastChar = swap(string).charAt(0); 
  let firstCap = firstChar + lastChar; 
  let lastCap = lastChar + firstChar; 
  
  return [firstCap, lastCap]; 

 // let firstChar = string.charAt(0);
 // let lastChar = string.charAt(-1);
 // let sentChar = firstChar + lastChar;
 // return sentChar;
}

let [firstLastSentChar, lastFirstSentChar] = firstLastChar(finalSentence); 
alert(firstLastSentChar); 
alert(lastFirstSentChar);