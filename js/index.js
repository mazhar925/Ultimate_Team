const players = [
{
    name: 'Karim Benzema',
    goal: 12,
    assist: 5,
    image: './images/player_1.jpg'
},
{
    name: 'Mohamed Salah',
    goal: 13,
    assist: 2,
    image: './images/player_2.jpg'
},
{
    name: 'Riyad Mahrez',
    goal: 11,
    assist: 5,
    image: './images/player_3.jpg'
},
{
    name: 'Kylian Mbappé',
    goal: 16,
    assist: 5,
    image: './images/player_4.jpg'
},
{
    name: 'Kevin De Bruyne',
    goal: 16,
    assist: 5,
    image: './images/player_5.jpg'
},
{
    name: 'Eden Hazard',
    goal: 16,
    assist: 5,
    image: './images/player_6.jpg'
},
{
    name: 'Harry Kane',
    goal: 16,
    assist: 5,
    image: './images/player_7.jpg'
},
{
    name: 'Paul Pogba',
    goal: 16,
    assist: 5,
    image: './images/player_8.jpg'
},
{
    name: 'N Golo Kanté',
    goal: 16,
    assist: 5,
    image: './images/player_9.jpg'
},
{
    name: 'Lewandowski',
    goal: 16,
    assist: 5,
    image: './images/player_10.jpg'
},
{
    name: 'Luka Modrić',
    goal: 16,
    assist: 5,
    image: './images/player_11.jpg'
},
{
    name: 'Ibrahima Konaté',
    goal: 16,
    assist: 5,
    image: './images/player_12.jpg'
},
];

let selectedPlayers=[];
let i = 0;

for(; i<players.length; i++){
    const a = document.getElementById('cardsContainer');
    a.innerHTML+=
        `<div class="playerCard">
            <div class="cardImageSection">
                <img src="${players[i]['image']}" alt="${players[i]['name']}">
            </div>
            <div class="cardTextSection">
                <div><h2>${players[i]['name']}</h2></div>
                <div class="cardInfo">
                    <p>Goal: ${players[i]['goal']}</p>
                    <p>Assist: ${players[i]['assist']}</p>
                </div>
            <div>
                <button class="cardBtn" onclick="playerSelect('${players[i]['name']}')" id="${players[i]['name']}">Select</button>
            </div>
            </div>
        </div>`;
};

function appendPlayers(data){
    let c = document.getElementById('selectedV');
        const d = document.createElement('li');
        d.innerHTML=data;
        c.appendChild(d);
}

function playerSelect(data){
    if(selectedPlayers.length>4){
        alert('Limit is Over !')
    }
    else{
        const b = document.getElementById(data);
        b.setAttribute("disabled", true);
        selectedPlayers.push(data);
        appendPlayers(data);     
    }   
};

function playerTotalCost(){
    if(selectedPlayers.length){
        const perPlayer = document.getElementById('playerCost').value;
        if(isNaN(perPlayer) || !perPlayer){
        alert('Wrong Input !')
        }
        else{
            const numberPlayer = selectedPlayers.length;
            console.log(typeof(numberPlayer));
            document.getElementById('playersCost').innerHTML = numberPlayer*parseInt(perPlayer);

        }
    }
    else{
        alert('Select your Players !')
    }
}


function totalCost(){
    const manager = document.getElementById('managerCost').value;
    const coach = document.getElementById('coachCost').value;
    const playersCost = document.getElementById('playersCost').innerHTML;
    if(isNaN(manager && coach) || !manager || !coach){
        alert('Wrong Input !')
    }
    else{
        if(playersCost){
            const totalCost = parseInt(manager)+parseInt(coach)+parseInt(playersCost);
            document.getElementById('totalCost').innerHTML= totalCost;
        }
        else{
            alert('Per Player is Empty')
        }
        
    }
}

