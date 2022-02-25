console.log();

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

        window.open('http://localhost/DOC/Practica%206%20Pokemon/app.html', "_self");
    }

   
    
});

$.post("http://localhost/DOC/Practica%206%20Pokemon/pokemonJSON.php", function(htmlexterno){
    
let li = ''
htmlexterno.forEach(({usuario, puntuacion}) => {
     li+=`<li> Usuario: ${usuario} Puntuacion: ${puntuacion}</li> <br/>`;
    });
$("#rankingUsuarios").html(li);
// console.log(htmlexterno);
    
});