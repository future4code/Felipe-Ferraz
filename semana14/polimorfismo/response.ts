/*
1 a. Quais propriedades você conseguiu imprimir? 
Teve alguma que não foi possível? Por que isso aconteceu?

    Consegui imprimir todas, elas estão como públicas.


2 a. Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). 
Qual foi o erro que o Typescript gerou

    Cannot create an instance of an abstract class.

2 b. Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa]
classe

    Precisamos criar uma classe que seja extendida a essa

4 a) Possui os      métodos :  calculateBill e getCpf e 
                    propriedades :  cpf: number,
                                    cep: string,
                                    residentsQuantity: number,
                                    name: string,
                                    registrationNumber: number,
                                    consumedEnergy: number

5  a. Quais as semelhanças dessa classe com a ResidentialClient?   
    
    Possuem métodos e propriedades da Interface Client,
    Possuem método da classe Abstrata Place

b. *Quais as diferenças dessa classe com a `ResidentialClient`?*

    métodos específicos da classes: getCpf e getCnpj



6 a. De qual classe a IndustrialClient deve ser filha? Por quê?

    Ela deve ser filha da class Industry, porque ela contém propriedades da 
    indústria o machinesQuantity

b. Que interface a IndustrialClient implementa? Por quê?

    A interface implementada é a Client, porque ela possui dados propriedades necessárias
    para cadastro do cliente

c. Nós pedimos para criar somente os getters dessa classe. 
Pense num motivo para isso: por que só os getters?

    

*/
