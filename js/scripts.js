const sentencePrompt = prompt("Please enter a sentence:");
alert(sentencePrompt);

function capital (sentencePrompt) {

	let finalSentence = sentencePrompt.charAt(0).toUpperCase() + sentencePrompt.slice(1);
  
  let lastLetter =  finalSentence.charAt(finalSentence.length-1).toUpperCase();
  
return lastLetter; 
 
};

let finalSentence = capital (sentencePrompt);

alert(finalSentence);
