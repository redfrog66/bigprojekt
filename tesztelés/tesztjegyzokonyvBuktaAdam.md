## Backend - Háttér tesztelési sablon kitöltendő

### 1. Cím és Bevezetés:
   * Az adott tesztjegyzőkönyv neve: Bukta Ádám Backend tesztjegyzőkönyve
   * A tesztelési folyamat kezdeti leírása, a tesztelési célok és elvárások összefoglalása: 
     Rebeka és én felelünk a backend létrehozásáért és teszteléséért. A célunk, hogy egy hiba mentesen működő backendet hozzunk létre
### 2. Tesztelési Környezet:
   * Az alkalmazás verziószáma, amelyet teszteltek: 1.0
   * A backend környezet leírása: Visual Studio Code-ban dolgoztam és a fejlesztés JavaScript segítségével történt
   * Az alkalmazás és a backend függőségeinek verziószámai: lásd: package.json
   * Eszköz típusa, amelyen a tesztelés történt: Asztali számítógép

| Processzor | RAM  | Életkor | Állapot  |
|------------|------|---------|----------|
|  Intel Core i5  | 16GB |  4 év   |   Kielégítő	  |

### 4. Tesztesetek és Esetleírások: 
   * Az egyes tesztesetek felsorolása és egyedi azonosítóikkal ellátása
   * Minden tesztesethez tartozó elvárások és bemenetek leírása 
   * A tesztelés során alkalmazott adatok és konfigurációk
   * Frontend funkciók megfelelő működésének ellenőrzése a backend szempontjából
   * Kezdetileg node.js segítségével teszteltük a backend elemeinek működését
   * (Itt a feladatok nem kitöltendők, hanem elvégzendők.)

| Teszteset azonosító | Teszteset leírása | Elvárt eredmény |
|---------------------|-------------------|------------------|
| 1 | Predikció áttekintése | A predikció fut |
| 2 | A backend működésének ellenőrzése | A backend megfelelően működik |
| 3 | Egyes függvények áttekintése | A függvények megfelelően formázottak |
| 4 | Egységtesztek írása | Hibamentes tesztelés |
| 5 | Dokumentációk egyeztetése az eredménykóddal | Minden információ helyes |
| 6 | A backend működésének tesztelése node.js segítsévél | A backend elemei megfelelően működnek |

### 5. Teszteredmények:
   * Az egyes tesztesetek végrehajtásának eredményei: 

1. Predikció működése
A predikció már a kezdeti lépéseknél nem megfelelően működik, ezért idő hiányában sajnos nem sikerült implementálni az 1.0-ás verzióban, azonban későbbi verziókban való használata tervben van.

2. A backend működésének ellenőrzése
A backend kódja sikeresen lefut, azonban a predikció működése nem megfelelő. A fejlesztési folyamat első lépéseként a predikció működését próbáltuk megoldani, de nem sikerült.
Ezért más megoldást kellett választanunk, amely javascriptben íródott. Először terminálon történő futással készítettük el a kódot, node.js segítségével, majd a fejlesztés befejezte előtt módosítottunk rajta,
hogy a böngészőben is lehessen futtatni.

3. Egyes függvények áttekintése
A függvények mind megfelelően működnek, kommentelésük részletes, ezáltal könnyen olvasható és értelmezhető a kód.

4. Egységtesztek írása
Személy szerint nem volt még tapasztalatom egységteszttel, de Rebeka segítségével sikerült véghezvinni.
A tesztléshez használt kódok az unittests mappában találhatók.
Fontosnak tartottuk, hogy élőben át tudjuk beszélni, hogyan működnek bizonyos dolgok.

5. Dokumentációk egyeztetése az eredménykóddal
Átnéztem a dokumentációt és az abban talált eltéréseket/hibákat jeleztem Rebekának és ő kijavította azokat. A dokumentációk a dokumentációk mappában találhatók.

6. A backend működésének tesztelése node.js segítsévél
A backend elemei megfelelően működtek, ezt követően folytattuk a fejlesztést a frontenddel való összekötés érdekében.


| Teszteset azonosító | Teszteset eredménye | Hibák, figyelmeztetések és egyéb észrevételek |
|---------------------|---------------------|------------------------------------------------|
| 1 | A predikció megbukik a beérkező adatok feldolgozásánál | Rebeka és én is futtattuk a kódot, nálam működött, nála viszont nem. Ebből kifolyólag nem tudjuk biztosítani a predikció működőképességét és stabilitását, más megoldáshoz kell folyamodnunk. A predikció már a kezdeti lépéseknél nem megfelelően működik, ezért idő hiányában sajnos nem sikerült implementálni az 1.0-ás verzióban, azonban későbbi verziókban való használata tervben van. |
| 2 | A backend a predikció kivételével megfelelően működik. | A backend kódja sikeresen lefut, azonban a predikció működése nem megfelelő. A fejlesztési folyamat első lépéseként a predikció működését próbáltuk megoldani, de nem sikerült. Ezért más megoldást kellett választanunk, amely javascriptben íródott. Először terminálon történő futással készítettük el a kódot, node.js segítségével, majd a fejlesztés befejezte előtt módosítottunk rajta, hogy a böngészőben is lehessen futtatni. |
| 3 | A függvények megfelelően formázottak | A függvények mind megfelelően működnek, kommentelésük részletes, ezáltal könnyen olvasható és értelmezhető a kód. |
| 4 | Egységtesztek írása | Személy szerint nem volt még tapasztalatom egységteszttel, de Rebeka segítségével sikerült véghezvinni. A tesztléshez használt kódok az unittests mappában találhatók. Fontosnak tartottuk, hogy élőben át tudjuk beszélni, hogyan működnek bizonyos dolgok. |
| 5 | A dokumentációk javítást igényelnek. | Átnéztem a dokumentációt és az abban talált eltéréseket/hibákat jeleztem Rebekának és ő kijavította azokat. A dokumentációk a dokumentációk mappában találhatók. |
| 6 | A backend elemei megfelelően működnek | A backend elemei megfelelően működtek, ezt követően folytattuk a fejlesztést a frontenddel való összekötés érdekében. |
   * Hibák, figyelmeztetések és egyéb észrevételek dokumentálása: 

### 6. Jelentések és Statisztikák:
   * Általános tesztelési statisztikák: A tesztesetek és azok eredményei a fenti táblázatban találhatóak
   * Teljesítmény és terhelési tesztek eredményei, ha releváns: Megfelelő futási idő

### 7. Hibák és Nyitott Kérdések:
   * A tesztelés során felfedezett hibák és problémák rövid leírása: A predikció továbbra sem működik megfelelően.
   * Nyitott kérdések, amelyekre a fejlesztői csapatnak válaszokat kell találnia: Miért nem működik a predikció?

### 8. Kiegészítő Megjegyzések és Tanulságok:
   * Általános megjegyzések a tesztelési folyamat során szerzett tapasztalatokról: Az egységteszt, ha nem is pozitív, de mindenképp új élmény volt.
   * Tanulságok és javaslatok a jövőbeli tesztelési folyamatokra nézve: Nagyobb időintervallumot kell a tesztelési folyamatokra szánni.
