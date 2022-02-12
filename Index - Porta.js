
//* criando os paramentros que usaremos que


const fs = require('fs');

const read = (NomeArquivo )=>{return fs.readFileSync(`${__dirname}/originais/${NomeArquivo}`,{encoding: "utf8"});
}; //! aqui iremos ler os originais 

const write = (NomeArquivo,conteudo) =>{ //! aqui iremos ler os arquivos modificados 
    const dirname = `${__dirname}/alterados`; //! onde vamos salvar os arquivos 
    if(!fs.existsSync(dirname)){ //! verificamos se a pasta ja existe, caso nao 
    fs.mkdirSync(dirname); //! Criamos a pasta
}
fs.writeFileSync(`${__dirname}/${NomeArquivo}`,conteudo,{encoding: "utf8"});

};

module.exports= {read,write}
