
if (sessionStorage.length === 0){
    window.open('http://localhost/DOC/Practica%206%20Pokemon/index-preubas.html', "_self");
}



let puntuacion = 0;
let point = document.querySelector('#point');

const obtenerDatos = () => {

    let url = `https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random() * 100 + 1)}`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function (){
            if (this.status == 200 && this.readyState == 4){


                let {name, sprites} = JSON.parse(this.responseText); 
                let pokemonUrl = sprites.other['official-artwork'].front_default;
                console.log(name, pokemonUrl);
    
                document.querySelector('#imgPokemon').src = pokemonUrl;
                let pista = pistaPokemon(name);
                console.log('1 '+name);
                document.querySelector('#nombrePokemon').innerHTML = pista;
            
            
                let boton = document.querySelector('#boton-app');
                
                boton.addEventListener('click', f = ()=>{
    
                    let pokemonIntroducido = document.querySelector('#pokemonIntroducido').value;
                    console.log('2 '+name);
    
                    if (pokemonIntroducido === name){
                        puntuacion+=10;
                        point.innerHTML = `Puntuacion: ${puntuacion}`;
                        console.log(puntuacion);
                        document.querySelector('#pokemonIntroducido').value = '';
                        boton.removeEventListener('click', f);
                        obtenerDatos(puntuacion);

                       

                    }else{
                        enviarResultado();
                        puntuacion = 0;
                        point.innerHTML = `Puntuacion: ${puntuacion}`;
                        document.querySelector('#pokemonIntroducido').value = '';
                        boton.removeEventListener('click', f);
                        obtenerDatos();

                    }
                });
            
            }
    }

}




obtenerDatos();

const enviarResultado = () => {
    let usuario = sessionStorage.getItem("usuario");
    alert(usuario + ' ' + puntuacion);

    let form = document.createElement('form');

    // fichero php BBDD
    form.action = './bbdd.php';
    form.method = 'POST';
    form.innerHTML = `<input name="usuario" value=${usuario}> <input name="puntuacion" value=${puntuacion}>`;

    // poner con display none para que no se muestre?
    document.body.append(form);

    form.submit();
};


const pistaPokemon = (nombre) => {

    longitudCadena = nombre.length;

    let longitud = Math.floor(longitudCadena * 0.4);
    let arrPoke = [...nombre];
   

    
    for (let i = 0; i <= longitud; i++) {
        // 0 - longitudCadena
        let j = Math.floor(Math.random() * longitudCadena);
        arrPoke[j] = '-';
    }

    // console.log(arrPoke);
    // console.log(arrPoke.toString().replaceAll(',',''));
    return arrPoke.toString().replaceAll(',','');
  
}





