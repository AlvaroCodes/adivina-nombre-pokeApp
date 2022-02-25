let bt_comenzar =  document.querySelector('#bt-comenzar');
bt_comenzar.addEventListener('click', ()=>{

    let id = document.querySelector('#usuario').value;
    console.log(id);

    if (id !== ''){
        if (localStorage.length === 0){
            sessionStorage.setItem('usuario', id);
           
        }else {
            sessionStorage.removeItem('usuario', id);
            sessionStorage.setItem('usuario', id);
        }

        window.open('http://localhost/DOC/adivina-nombre-pokeApp/App/app.html', "_self");
    }

   
    
});

$.post("http://localhost/DOC/adivina-nombre-pokeApp/App/pokemonJSON.php", function(htmlexterno){
    
let li = ''
htmlexterno.forEach(({usuario, puntuacion}) => {
     li+=`<li> Usuario: ${usuario} Puntuacion: ${puntuacion}</li> <br/>`;
    });
$("#rankingUsuarios").html(li);
// console.log(htmlexterno);
    
});