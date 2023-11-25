## Backend - Háttér tesztelési sablon kitöltendő

### 1. Cím és Bevezetés:
   * Az adott tesztjegyzőkönyv neve: Gellén Rebeka Backend tesztjegyzőkönyve
   * A tesztelési folyamat kezdeti leírása, a tesztelési célok és elvárások összefoglalása:  
   Az én feladatom a háttérelemek működtetése volt, ezek tesztelése is az én és Ádám rezortja. A cél, hogy minél több, számunkra kedvező eredményt kapjunk, és a hibákat minél előbb kijavítsuk. A fejlesztés befejezte előtt kezdtem tesztelni.

### 2. Tesztelési Környezet:
   * Az alkalmazás verziószáma, amelyet teszteltek: 1.0 és azt megelőző stádiumok
   * A backend környezet leírása: fejlesztés végül JavaScript segítségével történt, a Node.js környezetben. A backend kódolásához a Visual Studio Code-ot használtam.

   * Az alkalmazás és a backend függőségeinek verziószámai: lásd: package.json

   * Eszköz típusa, amelyen a tesztelés történt: Asztali számítógép

| Processzor | RAM  | Életkor | Állapot  |
|------------|------|---------|----------|
|  AMD Ryzen 5   | 16GB |   <1év  |  Kiváló   |

### 4. Tesztesetek és Esetleírások: 
   * Az egyes tesztesetek felsorolása és egyedi azonosítóikkal ellátása
   * Minden tesztesethez tartozó elvárások és bemenetek leírása 
   * A tesztelés során alkalmazott adatok és konfigurációk
   * Frontend funkciók megfelelő működésének ellenőrzése a backend szempontjából
   * (Itt a feladatok nem kitöltendők, hanem elvégzendők.)

| Teszteset azonosító | Teszteset leírása | Elvárt eredmény |
|---------------------|-------------------|------------------|
| 1 | A backend működésének ellenőrzése | A backend működik |
| 2 | Predikció áttekintése | A predikció fut |
| 3 | Egyes függvények áttekintése | A függvények megfelelően formázottak |
| 4 | Egységtesztek írása | Hibamentes tesztelés |
| 5 | Dokumentációk egyeztetése az eredménykóddal | Minden információ helyes |

### 5. Teszteredmények:
   * Az egyes tesztesetek végrehajtásának eredményei: 

1. A backend működésének ellenőrzése
A backend működik, a kód futtatható, de a predikció nem működik. Fejlesztés során először a predikció működését próbáltuk megoldani, de nem sikerült. Ezért más megoldást kellett választanunk, amely javascriptben íródott. Először úgy írtuk meg, hogy node.js segítségével futtattuk, de a fejlesztés befejezte előtt átírtuk, hogy a kódunkat a böngészőben is lehessen futtatni. A kódok a backend mappában találhatók.

2. Predikció működése
A kód elbukik már a beérkező adatok feldolgozásánál, így nem tudjuk tesztelni a predikció működését. Későbbi verziónál, amennyiben fel akarjuk használni a predikciót, gyökerestől kell módosítanunk a kódot. Erre több tippet is kaptunk a helyettesítő tanártól, de a fejlesztés befejezte előtt nem tudtuk megvalósítani.

3. Egyes függvények áttekintése
A függvények megfelelően formázottak, a kódok könnyen értelmezhetőek. Extra kommentekkel próbáltuk megkönnyíteni a kódok értelmezését.

4. Egységtesztek írása
Mivel még nem sok tapasztalatunk volt egység tesztekkel, gondoltuk megpróbálkozunk vele. A hibák kijavítása után a tesztek is működnek, így a kódunkat is könnyebb értelmezni. A tesztléshez használt kódok az unittests mappában találhatók.
Az unittesteket Ádámmal együtt írtuk, így a kódokat is együtt teszteltük. Fontosnak tartottuk, hogy élőben át tudjuk beszélni, hogyan működnek bizonyos dolgok.

index.js - index.test.js
A hibaüzenet szerint a node-fetch modul ECMAScript modulként van importálva, de a Jest konfigurációja jelenleg nem támogatja az ECMAScript modulokat.

archive.js - archive.test.js
Ugyanaz a hibaüzenet, mint az előzőnél.

converter.js - converter.test.js
Cannot find module 'bigprojekt♀ejlesztéackendscriptingconverter.js' from 'tesztelés\unittests\converter.test.js'
A hibaüzenet szerint nem találja a modult, pedig a helyes útvonalat adtuk meg. Nem tudjuk, mi lehet a probléma.

5. Dokumentációk egyeztetése az eredménykóddal
A dokumentációkat Ádám tekintette át és emelte ki a benne szereplő hibákat. Ezeket közös megegyezések alapján javítottam ki. A dokumentációk a dokumentációk mappában találhatók.

| Teszteset azonosító | Teszteset eredménye | Hibák, figyelmeztetések és egyéb észrevételek |
|---------------------|---------------------|------------------------------------------------|
| 1 | A kódjaink megfelelően működnek | A backend működik, a kód futtatható, de a predikció nem működik. Fejlesztés során először a predikció működését próbáltuk megoldani, de nem sikerült. Ezért más megoldást kellett választanunk, amely javascriptben íródott. Először úgy írtuk meg, hogy node.js segítségével futtattuk, de a fejlesztés befejezte előtt átírtuk, hogy a kódunkat a böngészőben is lehessen futtatni. A kódok a backend mappában találhatók. |
| 2 | A predikció megbukik a beérkező adatok feldolgozásánál | Ádám és én is futtattuk a kódot, nála működött, nálam viszont nem. Ebből kifolyólag nem tudjuk biztosítani a predikció működőképességét és stabilitását, más megoldáshoz kell folyamodnunk. |
| 3 | Jól formázott kódok | A függvények megfelelően formázottak, a kódok könnyen értelmezhetőek. Extra kommentekkel próbáltuk megkönnyíteni a kódok értelmezését. |
| 4 | Az unittestek írását még gyakorolnunk kell | A tesztléshez használt kódok az unittests mappában találhatók. |
| 5 | A dokumentációk javítást igényelnek. | Más megoldást kellett válasszuk a működéshez, és ezzel egyeztetnünk kell a dokumentációkat. Ádám kiemelte, hol szerepel nem megfelelő információ, én pedig javítom. |

   * Hibák, figyelmeztetések és egyéb észrevételek dokumentálása: 
   Kódunk könnyebb értelmezésének érdekében több kommentre van szükség. 

### 6. Jelentések és Statisztikák:
   * Általános tesztelési statisztikák: 
   A tesztek az én eszközömön futtattam, ahol a kódokat is írtam. A tesztek eredményeit Ádámmal együtt elemeztük, és a hibákat is együtt javítottuk ki. A tesztek eredményeit a fentebb található táblázatban találhatók.
   * Teljesítmény és terhelési tesztek eredményei, ha releváns: A futási időnk jó, egyéb tesztek nem voltak.

### 7. Hibák és Nyitott Kérdések:
   * A tesztelés során felfedezett hibák és problémák rövid leírása: 
   A predikció nem megfelelő működése továbbra is fejfájást okoz. A kódokat többször átnéztük, de nem találtuk meg a hibát. A hibát a fejlesztés befejezte előtt nem tudtuk kijavítani, így más megoldást kellett választanunk.
   * Nyitott kérdések, amelyekre a fejlesztői csapatnak válaszokat kell találnia: Miért nem jó a beolvasás az egyik gépen, míg jó a másikon? Miért nem működik a predikció? Miért nem találja a modult, pedig a helyes útvonalat adtuk meg?

### 8. Kiegészítő Megjegyzések és Tanulságok:
   * Általános megjegyzések a tesztelési folyamat során szerzett tapasztalatokról:  Az egységtesztek nagyon idegenek nekünk, de mindenképpen ki akartuk őket próbálni, még így is, hogy nem sok hasznuk van. A dokumentációk átnézése és javítása is nagyon fontos, mert így a felhasználók is könnyebben értik a kódokat.
   * Tanulságok és javaslatok a jövőbeli tesztelési folyamatokra nézve: 
   Sokkal jobb időbeosztásra van szükség. Nehéz igazán jó kódot írni úgy, hogy több másik tárgyra is kell időt szánni. A tesztelési folyamatot is jobban be kellene osztani, hogy ne az utolsó pillanatban kelljen mindent megcsinálni. 
