var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');


// fillReact preencha o retângulo
// fill preencha  

pincel.fillStyle = 'darkgreen';
pincel.fillRect(0, 0, 350, 300);


// olhos
pincel.fillStyle = 'black'; 
pincel.fillRect(53, 60, 90, 90);

pincel.fillStyle = 'black';
pincel.fillRect(213, 60, 90, 90);


// nariz 
pincel.fillStyle = 'black';
pincel.fillRect(143, 150, 70, 100);


// bigode
pincel.fillStyle = 'black';
pincel.fillRect(103, 190, 40, 110);

pincel.fillStyle = 'black';
pincel.fillRect(213, 190, 40, 110);











