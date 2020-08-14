var synth = window.speechSynthesis;


var voices = [];
var bool=false;
var edithVoice;

function populateVoiceList() {
  voices = synth.getVoices();
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    

  }
  
  edithVoice=voices[1];
  if(edithVoice){
      bool=true;
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speakNow(txtSpeak) {
  var utterThis = new SpeechSynthesisUtterance(txtSpeak);
  utterThis.voice = edithVoice;
  utterThis.pitch = 1.5;
  utterThis.rate = 0.8;
  synth.speak(utterThis);
  //console.log(synth);
    
  

}

