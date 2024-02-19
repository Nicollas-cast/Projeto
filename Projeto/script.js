function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classlist.contains('light')) {

      //se tiver light mode, adicionar a imagem light
      img.setAttribute('src', './assets/Avatar-light.png')
      img.setAttribute('alt', 'Foto do Mayk Brito sorrindo, sem barba, usando óculos de sol e o mesmo usa uma jaqueta de couro')
    } else {

      //se estiver sem light mode, manter a imagem normal 
      img.setAttribute('src', './assets/avatar.png')
      img.setAttribute('alt', 'Foto do Mayk Brito sorrindo, sem barba, usando óculos de grau e o mesmo usa uma jaqueta de couro')
    }

    }