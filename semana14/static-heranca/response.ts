/* 
a. Seria possível imprimir a senha (password) atrelada a essa instância?

Não, desde que ela seja privada. Só poderia ser acessada atarvés de um método


b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` 
foi impressa no terminal?*

    1 vez


2) a. *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` 
foi impressa no terminal?* 

1 vez

b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"`
foi impressa no terminal? Por quê?*

2 vezes. O código da classe foi executado, após o Customer foi chamado
 e com isso o User executado novamente

3) a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê

    Não, a propriedade password é privada. Com isso a classe "filha" não tem acesso a ela

6) a. Quantas vezes a mensagem "Chamando o construtor da classe User" 
foi impressa no terminal?

    1 Vez

8) a. *Crie uma instância da classe `Seller`. Você vai reparar que essa classe já possui um construtor,
 pois quando **não colocamos um construtor na classe filha**, ela **herda** 
o construtor da classe Pai. Quais parâmetros você teve que passar para esse construtor?*

    Todos os parâmetros necessários das classes de instância superior.

b. Imprima todas as informações da instância que você criou individualmente (ou seja, cada uma em uma linha própria).
, O que você conseguiu imprimir? O que não conseguiu? Por quê

    Imprimi todas informações que possuiam métodos próprios nas classes superiores.
    Não consegui imprimi métodos privados, igual a senha.
    
9 a. Agora, teste o método setter, atualizando esse valor para o que você quiser.
É possível, imprimir no terminal, o valor salesQuantity da instância que você criou? Por quê?

    Não, o método que criei altera o valor entretanto não retorna o mesmo.

10 a. . Crie um novo vendedor. Atribua a ele um valor para a salesQuantity. Convoque a função 
calculateTotalSalary e  imprima no terminal o valor. O que foi impresso no terminal? Por quê?

    Foi impresso o valor da função criada na classe. Foi alterada a implementação na superclasse


*/
