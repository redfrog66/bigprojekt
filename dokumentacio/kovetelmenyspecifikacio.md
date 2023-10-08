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

## Igényelt üzleti folyamatok modellje

## Követelménylista

## Irányított és szabad szöveges riportok szövege

## Fogalomszótár

Python - A Python egy általános célú, nagyon magas szintű programozási nyelv. A nyelv tervezési filozófiája az olvashatóságot és a programozói munka megkönnyítését helyezi előtérbe a futási sebességgel szemben.

Django - A Django egy ingyenes és nyílt forráskódú, Python-alapú webes keretrendszer, amely a modell–sablon–nézet építészeti mintát követi.

## Pozitív felhasználói élmény biztosítása

- Felhasználóbarát GUI:
    * A grafika felhasználói felületnek könnyen használhatónak kell lennie
    * Egyértelműség: a GUI-nak egyértelműnek kell lennie a félreértés elkerülése érdekében
    * Ergonómikus kialakítás: a felhasználói felületnek olvashatónak, könnyen átláthatónak kell lennie felhasználói eszköztől függetlenül
