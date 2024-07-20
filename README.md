(PT-BR)
# Light - Uma Experiência Virtual Tridimensional

## Descrição

**Light** é um projeto de estudo em React que explora realidade mista, com navegação suave, componentes modernos e envio automático de e-mails. O design de UI foi criado pela [Nickelfox](https://www.nickelfox.com).

## Principais Funcionalidades

- **NavBar**: Barra de navegação dinâmica.
- **Main**: Página principal.
- **Experience**: Destaca experiências de jogos.
- **Headsets**: Mostra headsets de realidade mista.
- **Depoiments**: Exibe depoimentos de clientes.
- **Values**: Apresenta valores da empresa.
- **Explore**: Incentiva a exploração de produtos.
- **Footer**: Contém links essenciais.

### Rolagem Automática

Utiliza o hook `useRef` do React para rolagem suave para diferentes seções.

```javascript
const scrollToRef = useRef(null);

// Exemplo de uso em um componente
<NavBar scrollToRef={scrollToRef} />
<Main scrollToRef={scrollToRef} />
```

### Envio Automático de Email

A função `sendEmail` envia e-mails automaticamente usando EmailJS.

```javascript
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
    .then((response) => {
        alert("Success! Thank you so much :)")
    }).catch((error) => {
        alert("Type the correct e-mail, please!");
    })
}
```

## Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/lightlp.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd lightlp
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

5. **Abra o navegador e visite:**
   ```bash
   http://localhost:3000
   ```

## Créditos

- **Design de UI:** [Nickelfox](https://www.nickelfox.com)
- **Desenvolvimento:** Nathan Tizatto

## Contato

Para qualquer dúvida ou feedback, entre em contato pelo e-mail nathantizattodesenvolvedor@gmail.com


*(EN)*
# Light - A Three-Dimensional Virtual Experience

## Description

**Light** is a React study project exploring mixed-reality, featuring smooth navigation, modern components, and automatic email sending. UI design by [Nickelfox](https://www.nickelfox.com).

## Key Features

- **NavBar**: Dynamic navigation bar.
- **Main**: Main landing page.
- **Experience**: Highlights gaming experiences.
- **Headsets**: Showcases mixed-reality headsets.
- **Depoiments**: Displays customer testimonials.
- **Values**: Outlines company values.
- **Explore**: Encourages product exploration.
- **Footer**: Contains essential links.

### Automatic Scrolling

Uses React's `useRef` hook for smooth scrolling to different sections.

```javascript
const scrollToRef = useRef(null);

// Example usage in a component
<NavBar scrollToRef={scrollToRef} />
<Main scrollToRef={scrollToRef} />
```

### Automatic Email Sending

The `sendEmail` function sends emails automatically using EmailJS.

```javascript
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
    .then((response) => {
        alert("Success! Thank you so much :)")
    }).catch((error) => {
        alert("Type the correct e-mail, please!");
    })
}
```

## How to Run the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/lightlp.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd lightlp
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser and visit:**
   ```bash
   http://localhost:3000
   ```

## Credits

- **UI Design:** [Nickelfox](https://www.nickelfox.com)
- **Development:** Nathan Tizatto

## Contact

For any inquiries or feedback, please contact us at nathantizattodesenvolvedor@gmail.com
