export {EnemiesObject}

let enemy = {
    id : 0,
    EnemyName : "",
    HP : 0,
    MAXHP : 0,
    DMG : 0,
};

// Konstruktor przeciwnika
function EnemyGenerator(mid, EnemyName, mLVL, mHP, mDMG, mEXP, mGOLD, mREP, mimg)
{
    this.mid = mid;
    this.EnemyName = EnemyName;
    this.mLVL = mLVL;
    this.mHP = mHP;
    this.mDMG = mDMG;
    this.mEXP = mEXP;
    this.mGOLD = mGOLD;
    this.mREP = mREP;
    this.mimg = mimg;
}

// Tworzy obiekt z kluczami wraz z konstruktorem
let EnemiesObject = {

//Potwory z areny----------------------------------------------------------//
    szczur: new EnemyGenerator(0, "Szczur", 1, 50, 1, 10, 1, 1, 'images/szczur.jpg'),
    //ID Przeciwnika, Nazwa przeciwnika, Poziom przeciwnika, Życie przeciwnika, Obrażenia przeciwnika,
    //Exp z przeciwnika, Złoto z przeciwnika, Reputacja z przeciwnika, Obrazek przeciwnika.
    goblin: new EnemyGenerator(1, "Goblin", 5,  200, 1, 50, 10, 5, 'images/goblin.jpg'),
    dzikipies: new EnemyGenerator(2, "Dziki Pies", 3, 150, 1, 25, 5, 10, 'images/wilddog.jpg'),
    wilkolak: new EnemyGenerator(3, "Wilkołak", 10, 300, 1, 200, 100, 50, 'images/wolfman.jpg')
//------------------------------------------------------------------------//

};
