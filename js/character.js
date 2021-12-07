import {LoadLocalStorage} from './z_localstorage.js';
import {SaveToLocalStorage} from './z_localstorage.js';
import {ClearLocalStorage} from './z_localstorage.js';
import {ExpCheck} from './level.js';
import {expTable} from './level.js';

LoadLocalStorage();

let AttrCostArray = [1,1,1,1,1,1]; // Do zapisu w local_storage ceny

document.querySelector(".player-name").innerText = `${player.ClassName}`;
document.querySelector(".player-lvl").innerText = `Level: ${player.LVL}`;
document.querySelector(".player-hp").innerText = `HP: ${player.HP}`;
document.querySelector(".player-str").innerText = `STR: ${player.Strength}`;
document.querySelector(".player-dex").innerText = `DEX: ${player.Dexterity}`;
document.querySelector(".player-charisma").innerText = `CHR: ${player.Charisma}`;
document.querySelector(".player-int").innerText = `INT: ${player.Inteligence}`;
document.querySelector(".player-luck").innerText = `LUCK: ${player.Luck}`;
document.querySelector(".player-guild").innerText = `Gildia: ${player.Guild}`;
document.querySelector(".player-profession").innerText = `Profesja: ${player.Profession}`;
document.querySelector(".player-abilitypoints").innerText = `Punkty Umiejętności: ${player.AbilityPoints}`;
document.querySelector("#imgplayer").src = `${player.img}`;

let AttrButtonArray = ['hp_add', 'str_add', 'dex_add', 'charisma_add', 'int_add', 'luck_add'];

for(let i = 0; i < AttrButtonArray.length; ++i)
{
    let elem = document.getElementById(AttrButtonArray[i]);
    
    elem.addEventListener("click",function()
    {
        if(elem === document.getElementById("hp_add") )
        {
            if(player.AbilityPoints > 0){
                player.HP += 1;
                player.AbilityPoints -= 1;
                document.querySelector(".player-hp").innerText = `HP: ${player.HP}`;
                document.querySelector(".player-abilitypoints").innerText = `Punkty Umiejętności: ${player.AbilityPoints}`;
                console.log(player.HP, 'hp_add')
                console.log(elem)
            }
        }
        if(elem === document.getElementById("str_add"))
        {
            if(player.AbilityPoints > 0){
                player.Strength += 1;
                player.AbilityPoints -= 1;
                document.querySelector(".player-str").innerText = `STR: ${player.Strength}`;
                document.querySelector(".player-abilitypoints").innerText = `Punkty Umiejętności: ${player.AbilityPoints}`;
                console.log(player.Strength, 'str_add')
                console.log(elem)
            }
        }
        if(elem === document.getElementById("dex_add"))
        {
            if(player.AbilityPoints > 0){
                player.Dexterity += 1;
                player.AbilityPoints -= 1;
                document.querySelector(".player-dex").innerText = `DEX: ${player.Dexterity}`;
                document.querySelector(".player-abilitypoints").innerText = `Punkty Umiejętności: ${player.AbilityPoints}`;
                console.log(player.Dexterity, 'dex_add')
                console.log(elem)
            }
        }
        if(elem === document.getElementById("charisma_add"))
        {
            if(player.AbilityPoints > 0){
                player.Charisma += 1;
                player.AbilityPoints -= 1;
                document.querySelector(".player-charisma").innerText = `CHR: ${player.Charisma}`;
                document.querySelector(".player-abilitypoints").innerText = `Punkty Umiejętności: ${player.AbilityPoints}`;
                console.log(player.Charisma, 'charisma_add')
                console.log(elem)
            }
        }
        if(elem === document.getElementById("int_add"))
        {
            if(player.AbilityPoints > 0){
                player.Inteligence += 1;
                player.AbilityPoints -= 1;
                document.querySelector(".player-int").innerText = `INT: ${player.Inteligence}`;
                document.querySelector(".player-abilitypoints").innerText = `Punkty Umiejętności: ${player.AbilityPoints}`;
                console.log(player.Inteligence, 'int_add')
                console.log(elem)
            }
        }
        if(elem === document.getElementById("luck_add"))
        {
            if(player.AbilityPoints > 0){
                player.Luck += 1;
                player.AbilityPoints -= 1;
                document.querySelector(".player-luck").innerText = `LUCK: ${player.Luck}`;
                document.querySelector(".player-abilitypoints").innerText = `Punkty Umiejętności: ${player.AbilityPoints}`;
                console.log(player.Luck, 'luck_add')
                console.log(elem)
            }
        }
        SaveToLocalStorage()
    });
}