//import {LoadLocalStorage} from './z_localstorage.js';
import {SaveToLocalStorage} from './z_localstorage.js';

function CharClass(id, ClassName, HP, Strength, Inteligence, Dexterity, Charisma, Luck, img)
{
    this.id = id;
    this.ClassName = ClassName;
    this.HP = HP;
    this.Strength = Strength;
    this.Inteligence = Inteligence;
    this.Dexterity = Dexterity;
    this.Charisma = Charisma;
    this.Luck = Luck;
    this.img = img;
}

// zmienne z konstruktorami

let ninja = new CharClass(0,'Ninja',50, 3, 12, 10, 5, 10, 'images/ninja.jpg');
let gorzelnik = new CharClass(1,'Gorzelnik', 50, 5, 5, 5, 5, 5, 'images/distiller.jpg');
let pancernik = new CharClass(2,'Pancernik', 50, 10, 3, -5, 10, 0, 'images/armadillo.jpg');

// Tablica z id z htmla
let CharClassArray = ['charclass0', 'charclass1', 'charclass2'];

// Dodanie i zamiana statystyk między obiektami
let player_assign_ninja = Object.assign({}, player, ninja);
let player_assign_gorzelnik = Object.assign({}, player, gorzelnik);
let player_assign_pancernik = Object.assign({}, player, pancernik);

//Iteracja tablicy
for(let i = 0; i < CharClassArray.length; ++i)
{
    let elem = document.getElementById(CharClassArray[i]) //Zapisanie do zmiennej funkcji z id z tablicy
    
    elem.addEventListener("click",function() // Dodanie eventlistenera do buttona dla kazdego id
    {
        if(elem === document.getElementById("charclass0") )
        {
            player = player_assign_ninja; // Ustawienie obiektu player z wartościami ze zmiennej przechowującej obiekt połączony
        }
        if(elem === document.getElementById("charclass1"))
        {
            player = player_assign_gorzelnik;
        }
        if(elem === document.getElementById("charclass2"))
        {
            player = player_assign_pancernik;
        }
        
        player.DMG = 10;
        player.MAXEXP = 10;
        SaveToLocalStorage() // Zapisanie danych do localstorage
        console.table(player);
    });
}

