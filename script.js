//   CONFIRMAÇÃO DE SAÍDA

function exibirDiv() {
    const div = document.getElementById("exit");
    div.style.display = "block";
} function ocultarDiv() {
    const div = document.getElementById("exit");
    div.style.display = "none";
}

//          LOJA

function exibirLoja() {
    const div = document.getElementById("loja-div");
    div.style.display = "block";
} function ocultarLoja() {
    const div = document.getElementById("loja-div");
    div.style.display = "none";
}

//        CUPONS

function exibirCupons() {
    const div = document.getElementById("cupons-div");
    div.style.display = "block";
} function ocultarCupons() {
    const div = document.getElementById("cupons-div");
    div.style.display = "none";
}

//        KEYS

function exibirKeys() {
    const div = document.getElementById("keys-div");
    div.style.display = "block";
} function ocultarKeys() {
    const div = document.getElementById("keys-div");
    div.style.display = "none";
}

//      MERCADO

function exibirMercado() {
    const div = document.getElementById("mercado-div");
    div.style.display = "block";
} function ocultarMercado() {
    const div = document.getElementById("mercado-div");
    div.style.display = "none";
}

//      PESQUISANDO A SKIN


document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    var searchTerm = document.getElementById("searchInput").value;
    var encodedSearchTerm = encodeURIComponent(searchTerm);

    var steamMarketUrl = "https://steamcommunity.com/market/search?appid=730&q=" + encodedSearchTerm;
    
    window.open(steamMarketUrl, "_blank");
  });


//      ABRINDO A BARRA LATERAL DIREITA

function expandSidebar() {
    var sidebar = document.querySelector('.sidebar-right');
    sidebar.classList.add('expanded');
}
  
function collapseSidebar() {
    var sidebar = document.querySelector('.sidebar-right');
    sidebar.classList.remove('expanded');
}

