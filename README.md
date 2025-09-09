# 🚀 Validador de CPF Interativo

Um validador de CPF simples e interativo, desenvolvido com foco em boas práticas de JavaScript e na utilização do framework Bootstrap 5 para uma interface responsiva e moderna.

---

### 🎯 Propósito do Projeto

Este projeto foi desenvolvido como uma ferramenta de aprendizado prático, com o objetivo de solidificar conhecimentos nas tecnologias estudadas e aplicar conceitos de JavaScript em um cenário do mundo real. Ele serve como um portfólio para demonstrar habilidades em desenvolvimento front-end.

---

### ✨ Funcionalidades

* **Validação Completa:** Verifica se o CPF é válido de acordo com o algoritmo oficial dos dígitos verificadores.
* **Detecção de Sequências:** CPFs com todos os números repetidos (ex: 111.111.111-11) são considerados inválidos.
* **Interface Amigável:** Feedback visual imediato com alertas coloridos e imagens para CPF válido ou inválido.
* **Design Responsivo:** Totalmente adaptável a diferentes tamanhos de tela, de desktops a dispositivos móveis.
* **Seletor de Tema:** Funcionalidade de alternar entre modo claro (Light Mode) e escuro (Dark Mode) para conforto visual.

---

### 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** Estilização personalizada e moderna.
* **JavaScript (ES6+):** O cérebro do projeto, responsável por toda a lógica e interatividade.
* **Bootstrap 5:** Framework front-end para a criação de um layout responsivo, componentes de interface (alertas, botões) e o sistema de temas.

---

### 🧠 Principais Conceitos de JavaScript Aplicados

O coração deste projeto é a aplicação de conceitos de JavaScript puro para criar uma aplicação funcional e bem estruturada.

* **Factory Function (`ValidandoCpf()`):**
    O código é encapsulado dentro de uma *Factory Function*. Este padrão foi escolhido para agrupar toda a lógica relacionada à validação, evitando a poluição do escopo global e criando um objeto que contém os métodos e propriedades necessários.

* **Manipulação do DOM:**
    Intensa utilização de `document.querySelector`, `element.getAttribute` e `element.setAttribute` para encontrar elementos na página, ler e modificar seus atributos (essencial para o seletor de tema) e `addEventListener` para capturar interações do usuário. O resultado é exibido dinamicamente através da propriedade `element.innerHTML`.

* **Arrow Functions:**
    Uso de *Arrow Functions* nos `event listeners` para manter o contexto do `this` léxico, garantindo que ele sempre se refira ao objeto criado pela *Factory Function*.

* **Métodos de String e Array:**
    Aplicação de diversos métodos para tratar os dados do CPF:
    * `.replace(/\D+/g, '')` para limpar a string, deixando apenas os números.
    * `.slice()`, `Array.from()` e `.reduce()` para o cálculo dos dígitos verificadores.
    * `.repeat()` para a verificação de sequências de números iguais.

* **Lógica Condicional (`if/else`):**
    Utilizada para controlar todo o fluxo da aplicação: desde a verificação do tema atual (claro ou escuro) até a decisão de qual alerta (sucesso ou erro) deve ser exibido ao usuário após a validação do CPF.

---

### 📂 Como Executar o Projeto

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd NOME-DA-PASTA
    ```
3.  Abra o arquivo `index.html` no seu navegador de preferência.

---