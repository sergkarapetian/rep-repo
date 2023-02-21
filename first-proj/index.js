debugger
let table = document.querySelector('.table');
let input = document.querySelector('.input');
let number_words = document.querySelector('#number_words');   
let number_letters = document.querySelector('#number_letters'); 
let number_sentences = document.querySelector('#number_sentences'); 

function count_words(word){
    return  word.split(" ").length;
}

function count_letters(letters){
    let char = 0;
    return 0;
}

function count_sentences(sentences){
    return 0;
}

function fun(){
	table.style.display = "block"; 
    let text = input.value;

  	number_words.innerHTML = count_words(text);
    number_letters.innerHTML = count_letters(text);
    number_sentences.innerHTML = count_sentences(text);
}
    

	
