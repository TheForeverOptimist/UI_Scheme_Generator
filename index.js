const themes = document.getElementById("themes")

document.getElementById("submitBtn").addEventListener("click", function(event){
    event.preventDefault();
    const seedColor = document.getElementById("seed").value.slice(1);
    const modeChoice = document.getElementById("colorSchemeGenerator").value
    console.log(seedColor)
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${modeChoice}&count=5`)
      .then((response) => response.json())
      .then(data => {
          const colorElements = data.colors.map(color => {
            return `<div class="color-block" style="background-color: ${color.hex.value}"></div>`
      }).join('')
      document.getElementById('themes').innerHTML = colorElements
    
    })

      
})

