import {SaveToLocalStorage} from './z_localstorage.js'
//let expTable = JSON.parse('./json/exptable.json');
export {ExpCheck}
export {expTable}
export {i, modifyi}

function modifyi(argument){
    i = argument;
}

let expTable = JSON.parse('{"levels" : [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"exp_value" : [ 10,30,60,120,240,480,960,1920,3840,7680,15360,30720,61440,122880,245760,345760,445760,545760,645760,745760,845760,945760,1045760,1145760,1245760,1345760,1445760,1545760,1645760,1745760,1845760,1945760,2045760,2145760,2245760,2345760,2445760,2545760,2645760,2745760,2845760,2945760,3045760,3145760,3245760,3345760,3445760,3545760,3645760,3745760]}');
var i = 0;

function ExpCheck()
{
    while(player.EXP >= expTable.exp_value[i])
    {
            player.LVL = expTable.levels[i];
            player.MAXEXP = expTable.exp_value[i+1];
            player.AbilityPoints += 5;
            i++;
            SaveToLocalStorage();

    }
}