let recognition = new webkitSpeechRecognition();
recognition.onresult = function(event){
    let text = event.results[0][0].transcript;
    let usert_output = document.getElementById('usert_output').innerHTML=text;
    userData(text)
}
function userData(text){
    let speech = new SpeechSynthesisUtterance();
    speech.text=text;
    if(text=='hello'){
        speech.text='Hi';
    }
   else if(text=='what is your name'){
        speech.text='My Name is Sadi I am A Programer';
    }
    else if(text=='do you love me'){
        speech.text='Yes I love You';
    }
    else if(text=='are you know me'){
        speech.text='Yes I know';
    }
    else if(text=='where do you live'){
        speech.text='I live in Bangladesh';
    }
    else if(text=='where do you come from'){
        speech.text='I come from Sunamganj';
    }
    else if(text=='what are you doing'){
        speech.text='Im doing Homework';
    }
    else if(text=='where are you from'){
        speech.text='I from Bangladesh';
    }
    else if(text=='how is your family'){
        speech.text='everyone is good';
    }
    else if(text=='do you know me'){
        speech.text='Yes, I know you';
    }
    else if(text=='are you ill'){
        speech.text='No, Im fine';
    }
    else if(text=='how old are you'){
        speech.text='Im 23 Years Old';
    }
    else if(text=='hi'){
        speech.text='hello';
    }  
    else if(text=='what do you want'){
        speech.text='I want Your Smartphone, please give me';
    }   
    else if(text=='how about your work'){
        speech.text='its going well';
    }
    else if(text=='how are you'){
        speech.text='Alhamduliallah, Im Fine and You';
    }
    else{
        speech.text='Please Try Again';
    }

    document.getElementById('rbt').innerHTML=speech.text;
    window.speechSynthesis.speak(speech);
}