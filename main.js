let word ="cademy";
let output ="";
for(i=0; i<word.length; i++){
    let newWord = word[i].charCodeAt()+1;
    output+= String.fromCharCode(newWord); 
    
}
console.log(output)
