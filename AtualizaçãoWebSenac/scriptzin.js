function openTab(tabIndex) {
    var tabs = document.getElementsByClassName("tab");
    var buttons = document.getElementsByClassName("tab-button");
    
    // Oculta todas as abas e remove a classe "active" dos botões
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
      buttons[i].classList.remove("active");
    }
    
    // Exibe a aba selecionada e adiciona a classe "active" ao botão correspondente
    tabs[tabIndex].style.display = "block";
    buttons[tabIndex].classList.add("active");
  }