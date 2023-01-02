// quokka
// ext aparece no vscode sem chamar o terminal

const tags = []

// o push add valores repetidos  
tags.push('js');
tags.push('Javascript');
tags.push('js');

const result = tags;

console.log(result); 


// usando o Set , ele não deixa add valores repetidos

const tags1 = new Set ([])
 
tags1.add('js');
tags1.add('Javascript');
tags1.add('js');

const result1 = tags1;

console.log(result1); 

