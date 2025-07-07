// Função para trocar o conteúdo com base no botão clicado
function mostrar(pagina) {
  let conteudo = document.getElementById("conteudo");

  if (pagina === "sobre") {
    conteudo.innerHTML = `
      <h2></h2>
      <p>Olá! Sou Franciel, tenho 32 anos, moro em Pinhais, PR. Gosto de tecnologia, rock e histórias em quadrinhos. Sou estudante de T.I e procuro uma oportunidade de trabalho na área para colocar meus conhecimentos acadêmicos em prática e iniciar minha carreira na área de Tecnologia</p>
    `;
  } else if (pagina === "formacao") {
    conteudo.innerHTML = `
       <p>Cursando Tecnólogo em Análise e Desenvolvimento de Sistemas no Centro Universitário Uninter. <p/>
    `;
  } else if (pagina === "portfolio") {
    conteudo.innerHTML = `

      <p><a href="https://www.linkedin.com/in/francielribs/" target="_blank">Linkedin</a></p>

     `;
  } else if (pagina === "contato") {
    conteudo.innerHTML = `
       <form>
        <input type="text" placeholder="Nome" required><br><br>
        <input type="email" placeholder="E-mail" required><br><br>
        <textarea placeholder="Mensagem" rows="4" required></textarea><br><br>
        <button type="submit">Enviar</button>
      </form>
    `;
  }
}
