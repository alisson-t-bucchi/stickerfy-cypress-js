# Cypress Test Suite for Stickerfy

Este repositório contém um conjunto de testes automatizados para validar a funcionalidade dos botões "Go to Cart" (ou "Shopping Cart") e "Checkout" no site [Stickerfy](https://stickerfy.herokuapp.com/). Os testes foram desenvolvidos usando a biblioteca [Cypress](https://www.cypress.io/), uma ferramenta popular para testes end-to-end.

## Visão Geral dos Testes

Os testes cobrem as seguintes funcionalidades:

1. **Compra do adesivo Happy Stickerfy**
2. **Compra do adesivo Sad Stickerfy**
3. **Compra do adesivo Angry Stickerfy**
4. **Compra de um adesivo de cada tipo**
5. **Compra de dois adesivos Happy Stickerfy e um de cada tipo**

Cada caso de teste valida o seguinte:
- Capacidade de adicionar produtos ao carrinho através do botão "Go to Cart" ou "Shopping Cart".
- Capacidade de acessar o carrinho e proceder para a finalização da compra (Checkout).
- Verificação de elementos importantes na página de Checkout, como o título "Checkout" e os valores totais.

## Como Configurar o Ambiente

### Requisitos
- Node.js instalado em sua máquina.
- Cypress instalado globalmente ou localmente no projeto.

### Instalação
1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. Instale as dependências do Cypress:
   ```bash
   npm install
   ```

3. Abra o Cypress:
   ```bash
   npx cypress open
   ```

4. No painel do Cypress, selecione o arquivo de teste para executá-lo.

## Estrutura do Teste

### Configuração Inicial
Cada teste utiliza o comando `beforeEach` para acessar a página inicial do Stickerfy e verificar que o título da página é "Stickerfy":
```javascript
beforeEach(() => {
  cy.visit("https://stickerfy.herokuapp.com/");
  cy.title().should("be.equal", "Stickerfy");
});
```

### Casos de Teste

#### 1. Compra do adesivo Happy Stickerfy
Adiciona o adesivo "Happy" ao carrinho e finaliza a compra. Verifica o total e mensagens de sucesso:
```javascript
cy.contains('h4', 'Total: $5.5').should('be.visible')
cy.contains('h4', 'Thanks for your order!').should('be.visible')
```

#### 2. Compra do adesivo Sad Stickerfy
Segue o mesmo fluxo para o adesivo "Sad" e verifica o total correto:
```javascript
cy.contains('h4', 'Total: $7').should('be.visible')
```

#### 3. Compra do adesivo Angry Stickerfy
Valida o processo para o adesivo "Angry" com total de $4.5.

#### 4. Compra de um adesivo de cada tipo
Adiciona um de cada adesivo e verifica o total de $17.

#### 5. Compra de dois adesivos Happy e um de cada tipo
Adiciona dois adesivos "Happy" e um de cada outro tipo, verificando o total de $22.5.

## Tecnologias Utilizadas
- **Cypress**: Para automação de testes end-to-end.
- **JavaScript**: Linguagem de programação usada nos testes.

## Executando os Testes
1. Certifique-se de que o ambiente está configurado conforme descrito acima.
2. Abra o Cypress com:
   ```bash
   npx cypress open
   ```
3. Selecione o arquivo de teste e execute os casos desejados.

## Resultados Esperados
Os testes devem:
- Passar com sucesso para todos os cenários descritos.
- Validar a funcionalidade do carrinho de compras e do botão "Checkout", garantindo que os valores e mensagens exibidos correspondem às expectativas.

## Contribuições
Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias ou novos casos de teste.

---

**Autor**: [Seu Nome Aqui]

**Licença**: Este projeto está sob a licença [MIT](./LICENSE).

