// var 
//     newUser = [],
//     increase = [],
//     users = [],
//     visit = [];

//     const btnSend = document.getElementById("btn-registrer");
//     //var btnSend = document.querySelector('btn-registrer');
    
//     btnSend.addEventListener('click', () => {

//     var txtNewUser = document.querySelector('#new-user').value,
//         txtIncrease = document.querySelector('#increase').value,
//         txtUsers = document.querySelector('#users').value,
//         txtVisit = document.querySelector('#visit').value;

//     newUser.push(txtNewUser);
//     increase.push(txtIncrease);
//     users.push(txtUsers);
//     visit.push(txtVisit);

//     localStorage.setItem('input-new-user', JSON.stringify(txtNewUser));
//     localStorage.setItem('input-increase', JSON.stringify(txtIncrease));
//     localStorage.setItem('input-users', JSON.stringify(txtUsers));
//     localStorage.setItem('input-visit', JSON.stringify(txtVisit));
    
//     });

var 
    newUser = [],
    income = [],
    users = [],
    visit = [];

    // if(localStorage.getItem('input-new-user') != null){
    //     newUser = JSON.parse(localStorage.getItem('input-new-user'));
    //     income = JSON.parse(localStorage.getItem('input-increase'));
    //     user = JSON.parse(localStorage.getItem('input-users'));
    //     visit = JSON.parse(localStorage.getItem('input-visit'));
    // }

    //const btnSend = document.getElementById("btn-registrer");
    var btnSend = document.querySelector('#btn-registrer');
    btnSend.addEventListener('click', setItems);

    function setItems()  {
       
    var txtNewUser = document.querySelector('#new-user').value,
        txtIncome = document.querySelector('#increase').value,
        txtUsers = document.querySelector('#users').value,
        txtVisit = document.querySelector('#visit').value;

    newUser.push(txtNewUser);
    income.push(txtIncome);
    users.push(txtUsers);
    visit.push(txtVisit);

    localStorage.setItem('input-new-user', JSON.stringify(txtNewUser));
    localStorage.setItem('input-increase', JSON.stringify(txtIncome));
    localStorage.setItem('input-users', JSON.stringify(txtUsers));
    localStorage.setItem('input-visit', JSON.stringify(txtVisit));

    getItems();
    };    

getItems();
function getItems(){
    
    var cardDiv = document.querySelector('#cards div');
   

    var newUser = JSON.parse(localStorage.getItem('input-new-user')),
        income = JSON.parse(localStorage.getItem('input-increase')),
        users = JSON.parse(localStorage.getItem('input-users')),
        visit = JSON.parse(localStorage.getItem('input-visit'));
    
    var information = newUser.length;

        for(var i = 0; i < information; i++){
            var card = document.createElement('div');

            var cardNewUser = document.createElement('div'),
                cardIncome = document.createElement('div'),
                cardUsers = document.createElement('div'),
                cardVisit = document.createElement('div');

            var nodoTextNewUser = document.createTextNode(newUser[i]),
                nodoTextIncome = document.createTextNode(income[i]),
                nodoTextUsers = document.createTextNode(users[i]),
                nodoTextVisit = document.createTextNode(visit[i]);

                cardNewUser.appendChild(nodoTextNewUser);
                cardIncome.appendChild(nodoTextIncome);
                cardUsers.appendChild(nodoTextUsers);
                cardVisit.appendChild(nodoTextVisit);

                card.appendChild(cardNewUser);
                card.appendChild(cardIncome);
                card.appendChild(cardUsers);
                card.appendChild(cardVisit);

                cardDiv.appendChild(card);
        }
    };
  