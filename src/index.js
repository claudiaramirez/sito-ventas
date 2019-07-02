// en que lugar se esta
// si es dashboard
if(document.getElementById('cards') ){
    getItemsAll() // obtiene cada elemento del array y lo refleja en cada bloque
    getItemsSum() // obtiene la suma de todos el arrat y lo pasa a un solo bloque de items

}else{
    var btnSend = document.querySelector('#btn-registrer');
    btnSend.addEventListener('click', setItems);

}



// Guardamos items en local storage (form)
function setItems() {
    // valores del form
    var txtNewUser = document.querySelector('#new-user').value, // valor de cantidad compra
        txtIncome = document.querySelector('#increase').value, //valor de incremento
        txtUsers = document.querySelector('#users').value,//valor de cantidad usuario
        txtVisit = document.querySelector('#visit').value;//valor de cantidad visitas
    
    // valor de cantidad
    let backNewUser = window.localStorage.getItem('input-new-user'); // obtenemos lo que ya existe
    backNewUser = backNewUser ? backNewUser.split(',') : []; // si existe separmos por coma, sino, no hacemos nada
    backNewUser.push(txtNewUser); // agregamos el nuevo elemento
    window.localStorage.setItem('input-new-user', backNewUser); // set in local storage
   
    
    let backtxtIncome = window.localStorage.getItem('input-increase');
    backtxtIncome = backtxtIncome ? backtxtIncome.split(',') : [];
    backtxtIncome.push(txtIncome);
    window.localStorage.setItem('input-increase', backtxtIncome);

    let backtxtUsers = window.localStorage.getItem('input-users');
    backtxtUsers = backtxtUsers ? backtxtUsers.split(',') : [];
    backtxtUsers.push(txtUsers);
    window.localStorage.setItem('input-users', backtxtUsers);

    let backtxtVisit = window.localStorage.getItem('input-visit');
    backtxtVisit = backtxtVisit ? backtxtVisit.split(',') : [];
    backtxtVisit.push(txtVisit);
    window.localStorage.setItem('input-visit', backtxtVisit);
};
// Obtenemos el total de cada categoria
function getItemsSum(){
    let cantidad = JSON.parse("[" + window.localStorage.getItem('input-new-user') + "]");
    let incremento = JSON.parse("[" + window.localStorage.getItem('input-increase') + "]");
    let usuarios = JSON.parse("[" +window.localStorage.getItem('input-users')+ "]");
    let visitas = JSON.parse("[" +window.localStorage.getItem('input-visit')+ "]");
    //var newArr = JSON.parse("[" + nuevos + "]");
    let totalCantidad = 0;
    let totalincremento = 0;
    let totalusuarios = 0;
    let totalvisitas = 0;
    
    cantidad.forEach(function(element, index) {
        //console.log(index,element)
        totalCantidad  = totalCantidad + parseInt(cantidad[index])
        totalincremento = totalincremento + parseInt(incremento[index])
        totalusuarios = totalusuarios + parseInt(usuarios[index])
        totalvisitas = totalvisitas + parseInt(visitas[index])
    }); 

    // template
    var newItems = ` 
    <div class="rowListCard"> 
        <div class="card__item">
            <div class="card__inner">
            <p class="card-text"><strong>`+totalCantidad+`</strong></p>
            <h5 class="card-title">Cantidad de nuevas compras</h5>
            </div>
        </div>
        <div class="card__item">
            <div class="card__inner">
            <p class="card-text"><strong>`+totalincremento+`%</strong></p>
            <h5 class="card-title">Incremento de compras</h5>
            </div>
        </div>
        <div class="card__item">
            <div class="card__inner">
            <p class="card-text"><strong>`+totalusuarios+`</strong></p>
            <h5 class="card-title">Cantidad de nuevo usuarios</h5>
            </div>
        </div>
        <div class="card__item">
            <div class="card__inner">
            <p class="card-text"><strong>`+totalvisitas+`</strong></p>
            <h5 class="card-title">Cantidad nuevas visitas</h5>
            </div>
        </div>
    </div>
    `;
    document.getElementById("cards").insertAdjacentHTML('afterbegin',newItems);
}
// Obtenemos todos elementos como una bitacora
function getItemsAll(){
    let cantidad = JSON.parse("[" + window.localStorage.getItem('input-new-user') + "]");
    let incremento = JSON.parse("[" + window.localStorage.getItem('input-increase') + "]");
    let usuarios = JSON.parse("[" +window.localStorage.getItem('input-users')+ "]");
    let visitas = JSON.parse("[" +window.localStorage.getItem('input-visit')+ "]");
    cantidad.forEach(function(element, index) {
        //console.log(index,element)
        let cantidadItem = cantidad[index]
        let incrementoitem= incremento[index]
        let usuariositem= usuarios[index]
        let visitasitem= visitas[index]


        var newItems = ` 
        <div class="rowListCard historico"> 
            <div class="card__item">
                <div class="card__inner">
                <p class="card-text"><strong>`+cantidadItem+`</strong></p>
                <h5 class="card-title">Cantidad de nuevas compras</h5>
                </div>
            </div>
            <div class="card__item">
                <div class="card__inner">
                <p class="card-text"><strong>`+incrementoitem+`%</strong></p>
                <h5 class="card-title">Incremento de compras</h5>
                </div>
            </div>
            <div class="card__item">
                <div class="card__inner">
                <p class="card-text"><strong>`+usuariositem+`</strong></p>
                <h5 class="card-title">Cantidad de nuevo usuarios</h5>
                </div>
            </div>
            <div class="card__item">
                <div class="card__inner">
                <p class="card-text"><strong>`+visitasitem+`</strong></p>
                <h5 class="card-title">Cantidad nuevas visitas</h5>
                </div>
            </div>
        </div>
        `;

        var listCard  = document.getElementById("cards").insertAdjacentHTML('afterbegin',newItems);

    }); 
}
