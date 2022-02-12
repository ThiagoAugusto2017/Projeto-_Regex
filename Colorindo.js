const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`); //! vamos subistutuir dentro do html 

const files = require('./Index - Porta'); //! Buscamos os parametros 
const texto = files.read('codigoFonte.html') //!buscamos o a leitura do html 

const codeRegex = /<code>[\s\S]*<\/code>/i //!pegamos dentro do html  somente oque esta dentro de <code>

let codigo = texto.match(codeRegex)[0] //! pegamos os caracteres


//* string 

codigo = aplicarCor(codigo,/\".*"/g,"ce9178"); //! usamos a função

//* palavras resesvada paramentros

codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g,
'd857cf')

//* tipos...
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2')


//* comentários de multiplas linhas...
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

//* comentários de uma linha...
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703')


const conteudoFinal = texto.replace(codeRegex, codigo)

files.write('codigoFonte.html', conteudoFinal)

