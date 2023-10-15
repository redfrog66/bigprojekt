# Követelmény Specifikáció

## Áttekintés

Az alkalmazás célja egy időjárás előrejelző létrehozása, ami széleskörben rendelkezik különböző időjárási adatokkal. Nem csak a jővőbeli időjárással kapcsolatban jelennek meg információk, hanem képes a felhasználó visszamenőleg, múltbeli nap adatait is lekérdezni. Az alkalmazás Web felülettel fog rendelkezni, Python nyelven íródik, és Django keretrendszert tervezünk használni a megvalósításhoz. Az előrejelzést Prediction útján szeretnénk létrehozni, ehhez pedig TensowFlow-ot fogunk használni a tanításhoz. Projektünk egyik célja, hogy gépi tanulást segítségül hívva pontosabb előrejelzést tudjunk adni a felhasználóknak, miközben a felhasználói élményt is szem előtt tartjuk, illetve a csapatmunka során a csapat tagjai is fejlődjenek mind fejlesztés, mind kommunikáció és kivitelezés terén. 

## Jelenlegi helyzet leírása

Mindennapjaink meghatározó részét képezi az adott napi időjárás. Befolyásoló tényező öltözködésünkben, programjainkban, terveinkben. Nincs is rosszabb érzés, mint amikor egy sokáig tervezett esemény meghiúsul egy eső vagy egy vihar miatt. Emiatt nagyon fontos egy megbízható időjárás előrejelző alkalmazás, ami segít tájékozódni abban, hogy mi vár ránk. Létezik már több ilyen is, azonban egyik sem olyan személyre szabott, mint amit mi szeretnénk. Ezer meg egy ember harcol azzal nap mint nap, hogy miben induljon el otthonról, így egy olyan alkalmazás, ami segít ebben, nagyban megkönnyítené az életüket. Megbetegedések nagy számban fordulnak elő a nem megfelelő öltözködés miatt, így egy megfelelő alkalmazás segítségével ezeket is csökkenteni lehetne.

## Vágyálom rendszer leírása

Az alkalmazás célja egy olyan rendszer, ami megbízható időjárás információkat közvetít. A rendszer Web felülettel rendelkezik. Az alapvető előrejelzések megtekinthetőek regisztráció nélkül is, azonban bizonyos feature-ök csak azt követően válnak elérhetővé. A felület interaktív, látványos, és színes, hogy a felhasználó figyelmét felkeltse, igényeit a lehető legjobban kielégítse. A rendszer képes tárolni a regisztrált/bejelentkezett felhasználók preferenciáit, így lehetőséget nyújt a személyre szabásra. Így másabb segítséget fog kapni az alkalmazásunktól az, aki már 25 fokban is fázik, mint az, aki 10 fokban veszi elő az első pulóvert. Lehetőség van az adott nap részletes adatainak megtekintésére, és a következő 7 napról is elérhetőek előrejelzések korlátozottabb részletességgel. A program nem csak a jővőbeli időjárással kapcsolatban képes információt megjeleníteni, hanem képes a felhasználó visszamenőleg, múltbeli nap adatait is lekérdezni. Ennek megfelelően rendelkezik egy keresővel, ahol a dátum beírása után megjelenik az adott napi időjárás adat.

Regisztrált felhasználóink számára válik elérhetővé a személyreszabás, ahol az alkalmazás tanácsai az ő igényeihez tudnak igazodni. Ezen kívül a regisztrált felhasználó képes lesz bizonyos helyeket elmenteni, így azokat később könnyen elérheti. 

## A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása

A rendszer a Szoftverfejlesztési Módszertanok tárgy követelményeinek kell, hogy megfeleljen.
Néhány általános jogi követelmény a programmal szemben:
* Szerzői jogok: A program nem szegheti meg mások szerzői jogait, és a használt forrásoknak meg kell felelnie a szoftverlicenc feltételeinek.
* Szabályozási követelmények: A programnak meg kell felelnie azoknak a szabályozási követelményeknek, amelyek az adott iparágban vagy régióban érvényesek.
* Hátrányos kódolás: A programnak nem szabad hátrányosan megkülönböztetnie embereket faj, vallás, nemzetiség vagy egyéb személyes jellemzők alapján.

Ezen felül nem alkalmazunk helymeghatározást a projektünk során. Ennek oka, hogy túl nagy támadási felületet képezne a rendszerünkben, és a felhasználók személyes adatait is veszélyeztetné. Nagyobb rendszerekben, ahol a felhasználók személyes adatai nem kerülnek veszélybe, ott érdemes lehet alkalmazni, mivel a felhasználók számára nagyobb kényelmet biztosít, viszont esetünkben a csapat és a projekt nagy méretű bővítését igényelné, amire nincs lehetőségünk. Megfelelő erőforrások, arra alkalmas emberek és hosszabb határidő mellett érdemes lehet bevezetni a rendszerbe, így a lehetséges továbbfejlesztések között szerepel.

## Jelenlegi üzleti folyamatok modellje

A projekt célja egy kibővített időjárásjelentő asztali alkalmazás, amely bizonyos szintig személyreszabható, és képes a felhasználók igényeinek megfelelően működni. Erősen dependens a Python programozási nyelven, illetve a TensorFlow adatbázisain, amelyeket a projekt során használni fogunk. A projekt során a csapat tagjai a következő főfeladatokat látják el:
* TensorFlow adatbázisok tanulmányozása, adatok feldolgozása
* Python programozási nyelv tanulmányozása, a projekt során használt modulok megismerése
* Django keretrendszer tanulmányozása, a projekt során használt modulok megismerése
* Predikció megvalósítása
* Webes felület megvalósítása
* Webes felület összekötése a predikció során létrehozott adatbázissal
* Regisztrációs felület megvalósítása
* Regisztráció lehetőségének megvalósítása
* Bejelentkezés lehetőségének megvalósítása
* Személyreszabhatóság lehetőségének megvalósítása
A projekt egyéb feladatokat is tartalmazhat, amelyek a fentiekhez hasonlóak, és a projekt során merülnek fel. Bizonyos tervezett feladatok során ütközhetünk olyan problémákba, melyek befolyásolják a többi feladatot, így nem kizárt, hogy egyes felsorolt feladatok nem kerülnek megvalósításra, vagy a projekt során új feladatok merülnek fel.

Az alkalmazás 1.0 verzió tervei a következők:
| Verzió | Leírás                                  |
|-------|----------------------------------------|
| 1.0   | Alapvető funkcionalitások megvalósítása   |
| 1.0   | Alapvető webes felület megvalósítása     |
| 1.0   | Alapvető predikció megvalósítása         |
| 1.0   | Alapvető regisztrációs felület megvalósítása |
| 1.0   | Alapvető bejelentkezés lehetőségének megvalósítása |
| 1.0   | Alapvető személyreszabhatóság lehetőségének megvalósítása |


## Igényelt üzleti folyamatok modellje

Az alkalmazás munkálatait több verzióra bontjuk, ugyanis egy olyan projektet szeretnénk végigvinni, amely a csapat kapacitásához mérten bővíthető. Ezzel a tervezési folyamat rugalmasságát is biztosítani tudjuk, és szilárd alapot ad a kivitelezéshez. A verziókban történő bontás segít a csapatnak a munka megtervezésében, és a feladatok megvalósításában.

Az 1.0 verzió az, amit mindenképpen szeretnénk megvalósítani, így külön szedjük az egyéb, felhasználói élményt javító fejlesztésektől.
Az alkalmazás 1.0 verzió tervei a következők:
| Verzió | Leírás                                  |
|-------|----------------------------------------|
| 1.0   | Alapvető funkcionalitások megvalósítása   |
| 1.0   | Alapvető webes felület megvalósítása     |
| 1.0   | Alapvető predikció megvalósítása         |
| 1.0   | Alapvető regisztrációs felület megvalósítása |
| 1.0   | Alapvető bejelentkezés lehetőségének megvalósítása |
| 1.0   | Alapvető személyreszabhatóság lehetőségének megvalósítása |

A 2.0 verzióban szeretnénk a felhasználói élményt bővíteni, olyan egyéb ötleteinket soroljuk ide, melyek megvalósítása nem befolyásolja a 1.0 verzió megvalósítását, de lehetőség szerint jelentősen bővíthetik a projektünk végeredményét.
Az alkalmazás 2.0 verzió tervei a következők:
| Verzió | Leírás                                  |
|-------|----------------------------------------|
| 2.0   | Személyreszabhatóság bővítése   |
| 2.0   | Értesítő küldése kiválasztott napokról  |
| 2.0   | Esetleges új design elemek a felületen  |

## Követelmény lista

### Bejelentkezés
Lehetőség van bejelentkezésre, de nem kötelező, személyre szabási funkciók csak bejelentkezéssel érhetőek el.

### Személyes hőérzet megadása
Amennyiben a felhasználó úgy dönt a személyes hőérzetét megadhatja, így az alapértelmezettől eltérő ruházat ajánlásban részesülhet.

### Város megadása
Város megadása a helyi időjárás megjelenítése érdekében.

### Új város
Város hozzáadása a mentett városokhoz

### Celsius és Fahrenheit átváltása
Felhasználói preferencia szerint állítható, hogy C° vagy F° legyen az adott hőmérséklet mértékegysége.

### Napi időjárás
Adott nap részletesebb, órákra lebontott időjárási adatai biztosítása.

### Hét napos előrejelzés
Az elkövetkező hét nap időjárási predikciójának biztosítása.

### Korábbi adatok
Több évre visszamenően megtekinthető az adott nap hőmérsékleti adatai

### Mentett városok közötti választás
Több várost meg lehet adni, hogy egy kattintással lehessen váltani köztük.

| Modul       | ID  | Név               | V   | Kifejtés                                       |
|-------------|-----|-------------------|-----|------------------------------------------------|
| Jogosultság | L1  | Bejelentkezés     | 1.0 | A felhasználó bejelentkeztetáse                |
| Modifikáció | M1  | Személyes hőérzet megadása   | 1.0 | A felhasználó hőérzetének megadása  |
| Modifikáció | M2  | Város megadása    | 1.0 | A legkérdezni kívánt város megadása            |
| Modifikáció | M3  | Új város megadása | 1.0 | Egy új legkérdezni kívánt város megadása       |
| Modifikáció | M4  | Celsius/Farenthait váltás| 1.0 | Celsius vagy Farenheit preferncia megadása|
| Statisztika | S1  | Napi időjárás     | 1.0 | Napi időjárás kimutatása |
| Statisztika | S2  | Hét napos időjárás| 1.0 | Hét nap időjárásának kimutatása              |
| Statisztika | S3  | Korábbi adatok | 1.0 | Az elmúlt évek adatai az adott napra vonatkozóan kimutatva              |
| Jogosultság | L2  | Mentett városok közötti váltás|1.0 | Mentett városok listájából kiválasztani a kívántat|


## Irányított és szabad szöveges riportok szövege
- A megrendelőnek van-e igénye sötét/világos téma közötti váltásra?   -   Nincs, viszont az akadálymentesítés okán nem vesszük ki a tervezett bővítések listájából, de megfontoljuk, hogy melyik verzió részeként valósítsuk meg.
- A megrendelőnek van-e igénye időjárással kapcsolatos hírekre?    -      Nincs, viszont a felületünk sokszínűségének érdekében megpróbálkozunk a megvalósítással.
- Van-e olyan egyéb információ, amit a megrendelő szívesen látna egy időjárásjelentő oldalon?    -    Pártalom, szél, hasonlók még hasznosak lehetnek, de a fő szempont maradjon a hőmérséklet.
  
## Fogalomszótár

Python - A Python egy általános célú, nagyon magas szintű programozási nyelv. A nyelv tervezési filozófiája az olvashatóságot és a programozói munka megkönnyítését helyezi előtérbe a futási sebességgel szemben.

Django - A Django egy ingyenes és nyílt forráskódú, Python-alapú webes keretrendszer, amely a modell–sablon–nézet építészeti mintát követi.

TensorFlow - TensorFlow egy nyílt forráskódú gépi tanulás keretrendszer, amelyet a Google fejlesztett ki. Ez egy rendkívül rugalmas platform, amely lehetővé teszi gépi tanulási modellek készítését, kiképzését és értékelését adatainkon. TensorFlow támogatja a neurális hálózatok, mély tanulás és egyéb gépi tanulási módszerek használatát széles körben.

Predikció - A predikció mesterséges intelligencia területen azt a folyamatot jelenti, amikor egy gépi tanulási vagy mesterséges intelligencia modell előrejelzi vagy becsli egy adott esemény vagy érték valószínűségét vagy értékét a rendelkezésre álló adatok alapján. Ezek a modellek az előző adatok elemzésével és mintázatok azonosításával próbálják megjósolni jövőbeli eseményeket vagy értékeket. 

## Pozitív felhasználói élmény biztosítása

- Felhasználóbarát GUI:
    * A grafika felhasználói felületnek könnyen használhatónak kell lennie
    * Egyértelműség: a GUI-nak egyértelműnek kell lennie a félreértés elkerülése érdekében
    * Ergonómikus kialakítás: a felhasználói felületnek olvashatónak, könnyen átláthatónak kell lennie felhasználói eszköztől függetlenül
  
