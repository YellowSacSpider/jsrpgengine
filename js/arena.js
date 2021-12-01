// Skrypt do ustawienia walki na arenie. Wykonuje funkcje z fight.js
import {setFight} from './fight.js';
import {EnemiesObject} from './enemy.js';
import {getRandomNumber} from './xAlghorithm.js';
import {LoadLocalStorage} from './z_localstorage.js';
LoadLocalStorage();

let array_monsters = [EnemiesObject.szczur, EnemiesObject.dzikipies, EnemiesObject.goblin, EnemiesObject.wilkolak];

let MonsterArena;

if(player.LVL < 5){
    MonsterArena = array_monsters[getRandomNumber(0,1)];
    //console.log("Pierwszy if");
}else{
    MonsterArena = array_monsters[getRandomNumber(0,3)];
    //console.log("Drugi if");
}

setFight(player, MonsterArena);