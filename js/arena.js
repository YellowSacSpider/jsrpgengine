// Skrypt do ustawienia walki na arenie. Wykonuje funkcje z fight.js
import {setFight} from './fight.js';
import {EnemiesObject} from './enemy.js';
import {getRandomNumber} from './xAlghorithm.js';
import {LoadLocalStorage} from './z_localstorage.js';
LoadLocalStorage();

let array_monsters = [];

Object.entries(EnemiesObject).forEach(([key,value]) => array_monsters.push(value));


if(player.LVL < 5){
    setFight(player, array_monsters[getRandomNumber(0,1)]);
    //console.log("Pierwszy if");
}else{
    setFight(player, array_monsters[getRandomNumber(0,3)]);
    //console.log("Drugi if");
}

