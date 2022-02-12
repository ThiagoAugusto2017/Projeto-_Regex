
 //? validação de telefone 

const textoTel = `
Lista telefônica:
  - (21) 12345-6789
  - (11) 62300-2234
  - 5678-7771
  - (85)3333-7890
  - (1) 4321-1234`


  const dadosTel = /\(?\d{0,3}\)?\s?(\b\d{4,5}\b)\s?-?\s?(\b\d{4}\b)/g;
  
  console.log(textoTel.match(dadosTel));


  console.log("========================================================================================")

  //? validação de IPV4


  //! Lista de ip 

let listaIp =`64.233.160.0,64.233.191.255
66.102.0.0,66.102.15.255
66.249.64.0,66.249.95.255
72.14.192.0,72.14.255.255
74.125.0.0,74.125.255.255
209.85.128.0,209.85.255.255
216.239.32.0,216.239.63.255
64.18.0.0,64.18.15.255`


  //const texto = '0 1 10 192 199 201 249 255 256 312 1010 1512'

  //? => colocamos duas barras pois transformamos em uma string

  const ip = "(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])" //! o numero validador de ip, para
  //! \d{1,2} => pega de 0 a 99 os numeros
  //! | 1d{2} |2[0-4] => (um numero seguido de dois numeros) 1 ate 199 | segundo digito vai de [0-4]
  //! \\d|25[0-5] => vai de [0 a 5]


  
  const ipv4 = RegExp(`\\b${ip}\\.${ip}\\.${ip}\\.${ip}\\b`, 'g')

  
  console.log(listaIp.match(ipv4))

  console.log("========================================================================================")


  //? validação de senha 

  const textoSenha = `
  123456
  cod3r
  QUASE123!
  #OpA1
  #essaSenhaEGrande1234

  #OpA1?
  Foi123!
  `

let senha = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm;


console.log(textoSenha.match(senha));


    const textoemail  = `
    Os e-mails dos convidados são:
      - fulano@cod3r.com.br
      - xico@gmail.com
      - joao@empresa.info.br
      - maria_silva@registro.br
      - rafa.sampaio@yahoo.com
      - fulano+de+tal@escola.ninja.br
    `
    const email = /\S+@\w+\.\w{2,6}(\.\w{2})?/g

    console.log(textoemail.match(email))

    console.log("========================================================================================")


    //? Validador de CPF e Validador de Data de Nascimento

    const textoCpf = `056.500.906-02 13/08/1980 05 - Intérprete de Libras 400
2 RAIMUNDA RIBAMAR MARTINS MOTA 006.600.043-21 20/04/1974 05 - Intérprete de Libras 171
3 Marta Siqueira Neves 066.017.756-06 06/08/1984 05 - Intérprete de Libras 38
4 viviane araújo da Silveira Carvalho 065.616.016-02 01/06/1982 05 - Intérprete de Libras 36
5 Guilherme Antônio Maia 120.531.356-70 30/10/1993 05 - Intérprete de Libras 29
6 Aline Angélica Martins Lages 065.953.666-81 04/07/1983 05 - Intérprete de Libras 28
7 HAMILTON CORRÊA DE JESUS FREITAS 066.825.236-70 06/07/1984 05 - Intérprete de Libras 26
8 Adriene Moreira Vitor Lelis 059.144.946-30 14/10/1981 05 - Intérprete de Libras 24
9 Kênia Cristina Félix 084.404.026-60 02/02/1987 05 - Intérprete de Libras 24
10 Robson Roberto de Souza Oliveira 071.666.586-73 31/05/1988 05 - Intérprete de Libras 23
11 Romy Valéria de Araujo Toledo 575.005.256-72 04/09/1965 05 - Intérprete de Libras 22
12 Ana Paula Alves Gonçalves 085.886.756-76 07/09/1986 05 - Intérprete de Libras 20
13 IVANILDA CRISTINA TOREZONE SILVA 086.785.876-10 24/02/1988 05 - Intérprete de Libras 17
14 Rúbia Mara dos Santos Teixeira Oliveira 067.045.176-26 20/10/1984 05 - Intérprete de Libras 16
15 JULIANA APARECIDA RIBEIRO FERNANDES DA SILVA03988283690 039.882.836-90 16/07/1976 05 - Intérprete de Libras 15
16 Raquel de Oliveira Gomes 107.505.426-59 09/01/1990 05 - Intérprete de Libras 13
17 Jane Luciana da Silva 104.044.826-78 06/01/1991 05 - Intérprete de Libras 13
18 Raphaela Rezende de Castro 079.921.686-07 18/08/1994 05 - Intérprete de Libras 11
19 Gleiciane Dos Santos Silva 072.114.196-01 25/09/1984 05 - Intérprete de Libras 10
20 Tamires Fonseca de Oliveira 090.353.276-08 16/11/1988 05 - Intérprete de Libras 9
21 RAISA VERDIANO DIAS 148.683.806-56 14/07/1998 05 - Intérprete de Libras 9
22 Vanusa Oliveira da Silva 053.595.076-40 30/01/1982 05 - Intérprete de Libras 6
23 Felipe Silva de Carvalho 111.720.046-92 09/07/1993 05 - Intérprete de Libras 6
24 Caroline Gomes dos Santos 121.601.086-26 03/04/1996 05 - Intérprete de Libras 6
25 Jamile de Jesus Nascimento 089.706.256-66 15/03/1987 05 - Intérprete de Libras 5
26 Rodrigo de Souza Pacheco 044.644.386-79 14/09/1979 05 - Intérprete de Libras 4
27 Valéria Carvalho dos Santos 108.352.006-71 13/09/1992 05 - Intérprete de Libras 4
28 REJANE DE SOUZA ALVES VIEIRA 066.912.456-79 02/04/1982 05 - Intérprete de Libras 3
29 Paulo Richard Vieira Fonseca Rosa 152.493.406-28 05/09/2001 05 - Intérprete de Libras 3
30 Willer Bartho Vieira 447.025.156-91 24/08/1962 05 - Intérprete de Libras 0
31 Sérgio Leonardo Teixeira 534.679.656-87 14/01/1965 05 - Intérprete de Libras 0
32 Clarinete dos santos 712.887.406-20 09/08/1967 05 - Intérprete de Libras 0
33 Carmozina Santos Rocha 302.505.442-53 30/09/1968 05 - Intérprete de Libras 0
34 KATIA GONÇALVES ROCHA 762.402.587-87 22/06/1969 05 - Intérprete de Libras 0
35 Claudia Moreira Santos 001.998.286-01 20/12/1972 05 - Intérprete de Libras 0
36 MÁRCIA ELIANE VIEIRA 933.149.576-53 08/05/1974 05 - Intérprete de Libras 0
37 Hildete Aparecida Gonçalves santana 004.387.606-46 07/06/1975 05 - Intérprete de Libras 0
38 Cleide Rosana Mota Duarte 005.088.776-95 28/09/1976 05 - Intérprete de Libras 0
39 Wanderleia Aparecida Damasceno Martins 033.204.106-95 06/10/1976 05 - Intérprete de Libras 0
40 NELZA ALVES COUTINHO DOS SANTOS 031.776.496-93 25/06/1977 05 - Intérprete de Libras 0
41 Euzilene de Paiva Pio 038.447.166-88 29/12/1977 05 - Intérprete de Libras 0
42 HELANA MACHADO MENDES LUCINDO 040.705.606-88 09/10/1978 05 - Intérprete de Libras 0
43 Elisangela Almeida da Silva 049.272.536-51 11/05/1979 05 - Intérprete de Libras 0
44 Lilian Aparecida da Silva de Oliveira 045.860.676-67 12/07/1979 05 - Intérprete de Libras 0
45 Cristiene Rosa Batista Ferreira 044.830.996-39 04/04/1980 05 - Intérprete de Libras 0
46 Silvana dos Santos Damasceno 041.830.756-37 12/06/1980 05 - Intérprete de Libras 0
47 VANESSA ROCHA DOS SANTOS SOARES 041.863.666-40 05/10/1980 05 - Intérprete de Libras 0
48 PATRICIA ALVES LOUREIRO SERAFIM 050.645.926-80 01/02/1981 05 - Intérprete de Libras 0
49 Rafaela Menezes Valadares Camargos de Sousa 050.985.866-07 29/01/1982 05 - Intérprete de Libras 0
50 Thiago Oliveira Silva Martins 113.654.927-70 25/01/1986 05 - Intérprete de Libras 0
51 Enedineia das graças barbosa dos santos 080.817.696-09 13/03/1986 05 - Intérprete de Libras 0
52 Aline Machado Mendes 076.129.276-40 06/06/1986 05 - Intérprete de Libras 0
53 Kátia Borges Alecrim 025.721.885-89 14/08/1986 05 - Intérprete de Libras 0
54 Fabiana De Oliveira Duarte 070.880.756-95 31/12/1986 05 - Intérprete de Libras 0
55 JESSICA VIVIANE SOARES LIMA 090.173.206-05 22/11/1987 05 - Intérprete de Libras 0
56 Luciana Cardoso Gonçalves 085.947.436-45 16/10/1988 05 - Intérprete de Libras 0
57 Adriana da Silva Ramalho 109.227.646-70 22/06/1994 05 - Intérprete de Libras 0
58 Luiza Martins de Oliveira 755.995.621-15 02/07/1994 05 - Intérprete de Libras 0
59 Amanda Beatriz Ponpeo 450.627.278-12 07/07/1996 05 - Intérprete de Libras 0
60 DIANA KARINE DE SOUSA 087.498.056-90 13/07/1996 05 - Intérprete de Libras 0
61 Jessica Aparecida Rosa Pereira 134.561.156-00 02/06/1997 05 - Intérprete de Libras 0
62 Marina de Assis Rocha 126.611.386-09 17/09/1997 05 - Intérprete de Libras 0
63 Ketellen Iasmim Vieira Ferreira Correia 019.646.716-04 13/03/1998 05 - Intérprete de Libras 0
64 Caroline Viana de Assis 019.245.796-93 08/06/1998 05 - Intérprete de Libras 0
65 Thayna christina Lopes da Silva 130.455.056-78 19/11/1999 05 - Intérprete de Libras 0
66 Karen Nithely Felix 118.891.776-52 11/03/2001 05 - Intérprete de Libras 0
67 Larissa Fernanda Dos Santos Marques 103.505.836-76 13/11/2001 05 - Intérprete de Libras 0
68 Raissa Lara Rocha Alves 019.166.586-01 17/02/2002 05 - Intérprete de Libras 0`


const dadosCpf = /\b\d{3}\b\.\b\d{3}\b\.\b\d{3}\b\-\b\d{2}\b/g
const dadosNac = /\d{2}\/\d{2}\/\d{4}/g

console.log(textoCpf.match(dadosCpf))
console.log(textoCpf.match(dadosNac))

console.log("========================================================================================")

//? Validador de Palavras

const texto_2 =` Podemos imaginar o computador como uma super calculadora, capaz de 
fazer cálculos muito mais rápido que nós, mas para isso devemos dizer para o computador o
 que deve ser calculado e como deve ser calculado. A função das linguagens de programação é
  exatamente essa, ou seja, servir de um meio de comunicação entre computadores e humanos.
Existem dois tipos de linguagens de programação: as de baixo nível e as de alto nível.
 Os computadores interpretam tudo como números em base binária, ou seja, só entendem zero e um.
  As linguagens de baixo nível são interpretadas diretamente pelo computador, tendo um resultado rápido,
   porém é muito difícil e incômodo se trabalhar com elas. Exemplos de linguagens de baixo nível são a 
   linguagem binária e a linguagem Assembly.
Exemplo de código em Assembly:MOV r0, #0C ;load base address of string into r0
LOAD: MOV r1,(r0) ;load contents into r1CALL PRINT ; call a print routine to print the character in r1
INC r0 ;point to next characterJMP LOAD ;load next characterComo pode-se notar, é
 uma linguagem bastante complicada.`


 //? => Buscando todas as palavas com mer no meio 

console.log(texto_2.match(/([\wÀ-ú-]*)?pu([\wÀ-ú-]*)?|([\wÀ-ú-]*)?cal([\wÀ-ú-]*)?/gi)); 
//![
//  ` 'computador',
//   'calculadora',
//   'computador',
//   'calculado',
//   'calculado',
//   'computadores',
//   'computadores',
//   'computador',
//   'r1CALL',
//   'call'`
//! ]

//! com isto conseguimos caputurar as letras que desejamos mesmo com aceto nas bordas 


console.log("========================================================================================")