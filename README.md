# Space-Vault
Uma página com CRUD básico e outras funções experimentais.

Para o header, eu decidi usar algo simples, mais minimalistico. Usando o logo do site, junto com uma mensagem em h1 e h2. Do lado disso, criei 2 botões no qual o usuário consegue selecionar a linguagem preferida. Como o comentário indica, tive que usar uma solução diferente para posicionar meus botões do jeito que queria.

<header>
<img class="ISSimage" src="images/ISSIcon.png" width="120px" height="100px">

<div class="quote">
<h1>THAT'S ONE SMALL STEP FOR MAN, ONE GIANT LEAP FOR MANKIND.    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </h1>
<h2>-Neil Armstrong</h2>
<!-- Não consegui botar os botões pro lado direito da página como queria portanto usei essa solução-->
</div>

<div class="languages">

    <button id="BR" onclick="newLanguage('BR')">
        <img src="images/IconBR.jpg" height="10px" width="15px" style="border: none;">
    </button>
    <button id="EN" onclick="newLanguage('EN')" class="buttonEN">
        <img src="images/IconEN.jpg"height="10px" width="15px" style="border: none;">
    </button>
    
</div>

Após isso, criei o nav. Um menu que ao passar o mouse na parte de cima da tela, ele se mostra. Essa função foi feita dentro do CSS. Dentro dele se possui 4 botões no qual estão apenas de enfeite para servir como exemplos.

<nav>

<div class="menu">

    <button>
        <img src="images/HomeIcon.jpg" height="20px" width="20px">
        Home
    </button>
    <button>
        <img src="images/SearchIcon.png" height="20px" width="20px">
        Search
    </button>
    <button>
        <img src="images/PlanetIcon.png" height="20px" width="20px">
        Our goal
    </button>
    <button>
        <img src="images/PhoneIcon.png" height="20px" width="20px">
        Contact us
    </button>

</div>

</nav>

Na próxima parte, criei o conteúdo do site, com várias imagens e bastante texto.

<div class="container">

    <div class="content">
     <img class="mountain" src="images/mountainsWebb.jpg">

<p id="Introduction">
    On the 21st of July, 1969, Apollo 11 sucesfully managed to land on the moon, allowing men, for the first time in the history of the planet, to walk in another stellar object. An estimated astounding 650 million people watched in awe, glued to the screen of their televisions as this legendary moment unfolded.
</p>
<div class="fade-in-image">

<img class="bodyImage" src="images/PanoramaMoon.jpg"  width="100%" height="100%">

</div>

<p id="NeverAgain">
    After that event, 5 more sucessful moon landings in which men would walk on the surface of the moon would happen, and after that, never again. For more than 50 years, mankind wouldn't return to the moon. But why is that? And why have scientists and astronomers finally changed their minds?
</p>

<img src="images/Gateway.jpg" width="950px" height="525px">

<p id="GatewayP">
    NASA plans on building several things on the moon, from lunar bases to extraction devices. However, the most important aspect to all this is the Lunar Gateway. It alone will allow passing spacescrafts to restock on not only fuel, but also on food and water for the crew so that their mission may last even longer. The gateway would then slingshot the spacecraft into their desired destination, using the moon's gravitational pull for assistance.
</p>
<p id="InShortP">In short, the gateway would allow for even longer missions into space that would take place in the future.</p>
<p id="MightAskP"> "But why a lunar base?", you might ask. </p>
<img src="images/MoonBase.png" width="900px" height="500px">

<p id="IceP"> The moon actually has ice water, burried on the surface of its poles, as depicted below. Such water can be transformed into hydrogen and oxygen, components that make rocket fuel. A moon base wouldn't need fuel to be delivered from Earth to it, it would be self-sufficient. Besides fuel, there's also many rare earth metals just waiting to be extracted, such as gold, platinum, and many more.</p>
<img src="IMAGES/Water_under_the_surface_of_the_Moon.png">

<p id="HaveItP"> So there you have it. These are the two main reasons as to why we are returning to the moon, this time to stay.</p>
<p id="MoonExciteP">
    If the idea of going to the moon excites you, we happen to have good news! By submitting your full name below, you will be allowed to participate in our partner raffle program. One lucky winner will be taken for a trip around the moon and back with the use of the rocket Artemis II.
</p>

Então comecei a criação do formulário de aplicação, ou seja, o CRUD. Usei uma div chamada "line" para criar uma linha e enfeitar a caixa.

<!-- Here starts the application form-->
<div class="ApplicationForm">

    <div class="bar"></div>

    <div class="appTitle">
    
    <h2 id="applicationformP"> Application form</h2>
    <div class="line"></div>

    
</div>
<!-- Here ends the application form-->

Foi feito um form com botões de input de texto e do tipo submit para enviar os dados. Também coloquei uma imagem do lado para enfeitar. Como dito no comentário, tem um problema no código no qual após uma certa quantidade de aplicações, adicionar mais move todo o conteudo da página para cima do header. Algo que passei vários dias tentando soluções, porém cheguei a conclusão de que o erro estava na fundação do código e teria que fazer tudo denovo para descobrir o que estava errado. Devido a problemas de tempo, decidi não fazer algo do tipo. Mas para teste, o formulário funciona perfeitamente.

<div class="form">

 <form action="javascript:void(0);" method="POST" onsubmit="app.Add()"> 

 <img class="inputImage" src="images/UserIcon.png" height="18px" width="18px">
 <input class="NameBox" type="text" id="addApplication" placeholder="Name" required>
 
 <input class="SubmitButton" type="submit" value="Submit" >

 </form>
 <!-- Known bug: Adding more that 24 applicants moves the page upwards. I was losing my mind trying to get a fix for this, and had to settle for the current state, which is already a fix in itself, since adding even 1 applicant before was enough to shift the page upwards. I hope to one day learn as to why this is happening and what I could've done to fix it -->

 
</div>

Eu então enfeitei botando uma barra e um h2, depois criei uma div no qual iria mostrar a quantidade de aplicantes que tem, e as aplicações. Nisso também, foi colocado um botão de editar uma aplicação enviada, de salvar a versão nova da aplicação, e também de deleta-la, algo que pode ser melhor visto no Javascript.

<div class="bar"></div>

<h2 class="AppTitleCounter" id="AppTitleCounterP">Applicants </h2>
<div class="line"></div>
 <p id="counter"></p>

 <table>
    <tbody id="applications">

    </tbody>
  </table>

<div id="edit-box" role="aria-hidden">

<form action="javascript:void(0);" method="POST" id="save-edit">

  <img class="EditImage" src="images/EditIcon.png" height="18px" width="18px">
  <input type="text" id="editApplications">
  <input id="Save-Button" class="SaveButton" type="submit" value="Save"/> <a onclick="CloseInput()" aria-label="Close"></a>

</form>

</div>
</div>

Por fim criei o script que faz com que os botões mudem a linguagem do site simplesmente trocando o texto de acordo com o hash, algo que utilizei em um projeto anterior, mas nisso, foi utilizado em alta escala, tendo muito mais texto para traduzir.

<script>
    function newLanguage(language)
    {
        location.hash = language;
        location.reload();
    }
    let Introduction = document.getElementById("Introduction")
    let NeverAgain = document.getElementById("NeverAgain")
    let GatewayP = document.getElementById("GatewayP")
    let InShortP = document.getElementById("InShortP")
    let MightAskP = document.getElementById("MightAskP")
    let IceP = document.getElementById("IceP")
    let HaveItP = document.getElementById("HaveItP")
    let MoonExciteP = document.getElementById("MoonExciteP")
    let AppTitleCounterP = document.getElementById("AppTitleCounterP")
    let ContactP = document.getElementById("ContactP")
    let FollowP = document.getElementById("FollowP")
    let applicationformP = document.getElementById("applicationformP")

    let language =
    {
        BR:
        {
            Introduction: 
            "Em 21 de julho de 1969, a Apollo 11 conseguiu pousar na lua com sucesso, permitindo que o homem, pela primeira vez na história do planeta, caminhasse em outro objeto estelar. Estima-se que 650 milhões de pessoas assistiram com admiração, grudadas na tela de suas televisões enquanto esse momento lendário se desenrolava.",
             NeverAgain:
             "Depois desse evento, aconteceriam mais 5 pousos lunares bem-sucedidos em que os homens caminhariam na superfície da lua e, depois disso, nunca mais. Por mais de 50 anos, a humanidade não voltaria à lua. Mas por que isso? E por que cientistas e astrônomos finalmente mudaram de ideia?",
             GatewayP:
             "A NASA planeja construir várias coisas na lua, desde bases lunares até dispositivos de extração. No entanto, o aspecto mais importante de tudo isso é o Portal Lunar. Só isso permitirá que as naves espaciais se reabasteçam não apenas com combustível, mas também com comida e água para a tripulação, para que sua missão dure ainda mais. O portal então atiraria a espaçonave para o destino desejado, usando a atração gravitacional da lua para obter assistência.",
             InShortP:
             "Em suma, o portal permitiria missões ainda mais longas no espaço que ocorreriam no futuro.",
             MightAskP:
             "Mas por que uma base lunar, você pode perguntar?",
             IceP:
             "A lua na verdade tem água gelada, enterrada na superfície de seus pólos, conforme ilustrado abaixo. Essa água pode ser transformada em hidrogênio e oxigênio, componentes que compõem o combustível de foguetes. Uma base lunar não precisaria de combustível para ser entregue da Terra a ela, seria autossuficiente. Além do combustível, também há muitos metais de terras raras esperando para serem extraídos, como ouro, platina e muitos mais.",
             HaveItP:
             "Então aí está. Estas são as duas principais razões pelas quais estamos voltando para a lua, desta vez para ficar.",
             MoonExciteP:
             "Se a ideia de ir à lua te excita, temos boas notícias! Ao enviar seu nome completo abaixo, você poderá participar de nosso programa de sorteio de parceiros. Um sortudo vencedor será levado para uma viagem ao redor da lua e de volta com o uso do foguete Artemis II.",
             applicationformP:
             "Formulário de aplicação",
             AppTitleCounterP:
             "Aplicantes",
            ContactP:
             "Contate-nos: infoSpaceVault@gmail.com",
            FollowP:
             "Nos siga em: "
        },
        EN:
        {
             Introduction: 
             "On the 21st of July, 1969, Apollo 11 sucesfully managed to land on the moon, allowing men, for the first time in the history of the planet, to walk in another stellar object. An estimated astounding 650 million people watched in awe, glued to the screen of their televisions as this legendary moment unfolded.",
             NeverAgain:
             "After that event, 5 more sucessful moon landings in which men would walk on the surface of the moon would happen, and after that, never again. For more than 50 years, mankind wouldn't return to the moon. But why is that? And why have scientists and astronomers finally changed their minds?",
             GatewayP:
             "NASA plans on building several things on the moon, from lunar bases to extraction devices. However, the most important aspect to all this is the Lunar Gateway. It alone will allow passing spacescrafts to restock on not only fuel, but also on food and water for the crew so that their mission may last even longer. The gateway would then slingshot the spacecraft into their desired destination, using the moon's gravitational pull for assistance.",
             InShortP:
             "In short, the gateway would allow for even longer missions into space that would take place in the future.",
             MightAskP:
             "But why a lunar base, you might ask?",
             IceP:
             "The moon actually has ice water, burried on the surface of its poles, as depicted below. Such water can be transformed into hydrogen and oxygen, components that make rocket fuel. A moon base wouldn't need fuel to be delivered from Earth to it, it would be self-sufficient. Besides fuel, there's also many rare earth metals just waiting to be extracted, such as gold, platinum, and many more.",
             HaveItP:
             "So there you have it. These are the two main reasons as to why we are returning to the moon, this time to stay.",
             MoonExciteP:
             "If the idea of going to the moon excites you, we happen to have good news! By submitting your full name below, you will be allowed to participate in our partner raffle program. One lucky winner will be taken for a trip around the moon and back with the use of the rocket Artemis II.",
             applicationformP:
             "Application form",
             AppTitleCounterP:
             "Applicants",
            ContactP:
             "Contact us: infoSpaceVault@gmail.com",
            FollowP:
             "Follow us on: "
            },
    }


if (window.location.hash)
{
    if(window.location.hash == "#EN")
    {
        Introduction.textContent = language.EN.Introduction;
        NeverAgain.textContent = language.EN.NeverAgain;
        GatewayP.textContent = language.EN.GatewayP;
        InShortP.textContent = language.EN.InShortP;
        MightAskP.textContent = language.EN.MightAskP;
        IceP.textContent = language.EN.IceP;
        HaveItP.textContent = language.EN.HaveItP;
        MoonExciteP.textContent = language.EN.MoonExciteP;
        applicationformP.textContent = language.EN.applicationformP;
        AppTitleCounterP.textContent = language.EN.AppTitleCounterP;
        ContactP.textContent = language.EN.ContactP;
        FollowP.textContent = language.EN.FollowP;
    }
    else if(window.location.hash  ==  "#BR")
    {
        Introduction.textContent = language.BR.Introduction;
        NeverAgain.textContent = language.BR.NeverAgain;
        GatewayP.textContent = language.BR.GatewayP;
        InShortP.textContent = language.BR.InShortP;
        MightAskP.textContent = language.BR.MightAskP;
        IceP.textContent = language.BR.IceP;
        HaveItP.textContent = language.BR.HaveItP;
        MoonExciteP.textContent = language.BR.MoonExciteP;
        applicationformP.textContent = language.BR.applicationformP;
        AppTitleCounterP.textContent = language.BR.AppTitleCounterP;
        ContactP.textContent = language.BR.ContactP;
        FollowP.textContent = language.BR.FollowP;
    }
}
</script>

Também foi chamado o script para que as aplicações funcionem de forma certa.

<script src="application.js"></script>

E no final de tudo, adicionei um footer para enfeitar.

<footer>
    <div class="footer-content">
      <p>Space Vault &copy; 2023</p>
      <p id="ContactP">Contact us: infoSpaceVault@gmail.com</p>
      <p id="FollowP">Follow us on: 
        <a href="https://twitter.com/SpaceVault">Twitter</a> | 
        <a href="https://www.instagram.com/SpaceVault">Instagram</a>
      </p>
    </div>
  </footer>

