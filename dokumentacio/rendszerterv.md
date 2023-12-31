# Rendszerterv

## Rendszer:
Az alkalmazásunk egy Web felülettel rendelkező, főleg JavaScript, HTML és CSS nyelven íródó időjárásjelentő és időjárás előrejelző applikáció. Széleskörben rendelkezik különböző időjárási adatokkal, például hőmérsékletet, szélsebesség, páratartalom. Ezen információk alapján pedig képes megmondani, hogy milyen ruházat lenne a legideálisabb az adott nap időjárása alapján. A felhasználóknak lehetőségük van regisztráni az oldalra, aminek köszönhetően bejelentkezhetnek, és személyre szabhatnak bizonyos dolgokat. A felületen lehetőség van átváltani Fahrenheitre is.

## Rendszer célja:
A csapat célja egy egyszerű időjárásjelentő és időjárás előrejelző applikációt készíteni, pár egyedi csavarral.
Projektünk másik célja pedig, hogy gépi tanulást segítségül hívva pontosabb előrejelzést tudjunk adni a felhasználóknak, miközben a felhasználói élményt is szem előtt tartjuk, illetve a csapatmunka során a csapat tagjai is fejlődjenek mind fejlesztés, mind kommunikáció és kivitelezés terén. Így tehát a projekt fő része a fejlesztők számára a tanulási folyamat, a felhasználók számára pedig a könnyű használat és az információszerzés.

Mivel a fejlesztés során a gépi tanulás olyan hibára futott, amelyet nem tudtunk megoldani, ezért a projektünk nem tudja teljes mértékben betölteni a célját, de a felhasználói élményt és a könnyű használatot sikerült megvalósítani. Emellett új eszközöket kerestünk a működtetésre: a gépi tanulás helyett a predikciókat egy külső API-val oldottuk meg, amelynek köszönhetően a felhasználók számára pontosabb előrejelzést tudunk adni, gyorsabban és egyszerűbben.

## Terv:
### Kiindulás
User - A személy, aki aktuálisan a felületen navigál. Helyzettől függ a kiléte, lehet a tesztelő is, a megrendelő, vagy deployment után egy felhasználó. A rendszerterv ezen részében mint helytartó szó fog szerepelni.

A User megnyitja a webapplikációt. Letisztult és szép felület várja, könnyen tud navigálni.

### Hőmérséklet
A legfontosabb része a felületnek. Az adatokat API segítségével kapjuk meg, így a felületen csak megjelenítjük. A hőmérsékletet fokban adjuk meg, de lehetőség van átváltani Fahrenheitre is. 

### Nyomás és páratartalom
Szintén API segítségével jutunk hozzá az információkhoz. A nyomást millibárban, a páratartalmat százalékban adjuk meg.

### Öltözködési tanácsok
A bejelentkezés után elérhető funkció.

### Regisztráció
A Usernek lehetősége van regisztrálni. Itt megad megszólítást, email címét, jelszavát, illetve választhat alapértelmezett várost. A regisztráció után a User bejelentkezik.

### Bejelentkezés
A User bejelentkezik, megadja email címét és jelszavát. Ha sikeres volt a bejelentkezés, akkor a felületen megjelenik a User neve, és a bejelentkezés gomb helyett egy kijelentkezés gomb jelenik meg. Megjelenik a Fiók gomb is, ahol személyreszabás történik.

### Személyreszabás
Nem mindenki várja meg a 30 fokot a naptejjel, vagy a 10-et, hogy sapkát hordjon, de egy emlékeztető mégis hasznos. Ezért a felhasználó beállíthatja, hogy az öltözködést segítő üzenetek mikor jelenjenek meg. A beállításokat a Fiók gomb alatt találja meg a User.

### Átváltás Fahrenheitre
Előreláthatólag egy gomb fogja megvalósítani, hogy a napi hőmérséklet Fahrenheitben is megjelenjen. A gomb megnyomásával a hőmérséklet átváltódik Fahrenheitre, a gomb újra megnyomásával pedig vissza Celsiusra.

<img src = "assets/homerseklet_atvaltas.png">

Az átváltás gombnyomással történő megoldása az adatbázisban tárolt adatok mennyiségének minimalizálása érdekében történt.
Amennyiben a tesztelési fázis alatt jelentős mértékű lassulást tapasztalunk a futási időben, lehetséges, hogy külön el lesznek tárolva az adatok F°-ban is.

### Egy életbeli példa, mely szemlélteti a felhasználást

Felhasználó: Anna

Szituáció: Anna egy hétvégi kirándulást tervez családjával egy tóhoz. Az időjárástől függően szeretné eldönteni, hogy érdemes-e elindulni, vagy érdemes inkább egy másik hétvégére áttenni a tervezett kirándulást.

Felhasználási eset: Időjárás előrejelzés lekérdezése

1. Anna először megnyitja az időjárás előrejelző alkalmazást a telefonján.

2. Bejelentkezik a fiókjába, mivel korábban regisztrált.

3. A "Keresés" funkciót használja, és begépeli a tervezett kirándulás helyszínét, amely egy tó mellett van.

4. Az alkalmazás megjeleníti az aktuális időjárási adatokat a tervezett helyszínen. Anna láthatja, hogy az aktuális napon várhatóan esni fog az eső.

5. Anna továbblép, és megtekinti a heti előrejelzést is. Látja, hogy holnapra és a következő napokra is esős időjárást jeleznek előre.

6. Az időjárás előrejelzés alapján Anna úgy dönt, hogy jobb lenne elhalasztani a kirándulást egy másik hétvégére, amikor napsütéses időt jósolnak.

7. Anna elhalasztja a tervezett kirándulást, és értesíti a családját az időjárás előrejelzés alapján hozott döntéséről.

Ez a példa jól szemlélteti, hogyan használható az időjárás előrejelző alkalmazás a mindennapi életben a döntések támogatására. Anna az alkalmazás segítségével könnyen megtudhatta az aktuális és a jövőbeli időjárási feltételeket, és ennek alapján a legjobb döntést hozta a hétvégi kirándulás időzítésével kapcsolatban.


### Felhasználói hozzáférhetőség

Fizikai/érzékszervi korlátokkal rendelkező felhasználóink számára is akadálymentesítjük a felületet. Szemkímélő színpalettával dolgozunk, és terv szerint lehetőséget fogunk biztosítani a sötét/világos témák közötti váltásra. A villódzásmentesség egy olyan fontos tényező, melyet gyakran nem vesznek kellően számításba az interneten. Mi szeretnénk erre is hangsúlyt fektetni, így hanyagoljuk az olyaféle animációkat, melyek meghibásodás esetén villódzó képet okoznának.

Ezáltal az általunk létrehozott játék ezen szempontokból nem hátráltat senkit, nem limitálja részvételüket.

## Időpont:
A projekt elkészülési határideje az oktató által megszabott határidő. 

Maga a program, hozzáféréstől függően bármilyen időpontban futtatható.

## Erőforrások:
Célunk, hogy a felület könnyen hozzáférhető legyen. Félévünk végéhez közelítve a terveinkre egyre kevesebb idő jut, így az elsődleges cél, hogy bármely webböngészőn futtatható legyen a program. Jövőbeli terveink között szerepel a mobilos felület javítása, de ez a projekt keretein belül nem valósulhat meg, időhiány miatt.

## Implementációs terv:
### JavaScript
JavaScript egy programozási nyelv, amelyet általában weboldalak fejlesztéséhez használnak. A nyelvet könnyen tanulható és széles körben támogatja a böngészők. JavaScript segítségével dinamikus és interaktív felhasználói felületeket lehet létrehozni a böngészőkön keresztül.

### Node.js
Node.js egy nyílt forráskódú, szerveroldali JavaScript környezet, amely lehetővé teszi a JavaScript programok futtatását a szervereken. A Node.js egy V8 JavaScript motorra épül, amelyet eredetileg a Google Chrome böngésző számára fejlesztettek ki. Node.js általánosan használható szerveroldali alkalmazások, webszerverek, és hálózati alkalmazások fejlesztésére.
Node.js kiválóan alkalmazható az olyan alkalmazások fejlesztéséhez, amelyeknek gyors, skálázható és könnyen karbantartható backend részre van szükségük.

### Python 
A Python egy általános célú, nagyon magas szintű programozási nyelv. A nyelv tervezési filozófiája az olvashatóságot és a programozói munka megkönnyítését helyezi előtérbe a futási sebességgel szemben. Emelett mesterséges intelligencia alapú gépi tanulásra való felhasználáshoz ajánlott mivel terjedelmes oktatóanyagok állnak rendelkezésre amelyek nagyban megkönnyítik a munkafolyamatot.

### Django
A Django egy ingyenes és nyílt forráskódú, Python-alapú webes keretrendszer, amely a modell–sablon–nézet építészeti mintát követi. A DJango keretrendszer ehetővé teszi számunkra hogy a Python kódunk webes alapon fusson ami a felhasználói élményt növeli így a programot nem kell letölteni és telepíteni. Továbbá így bármilyen módú extra fejlesztéstől is megkíméljük a fejlesztőket hiszen a a cross platform funkcionalitás szükségét teljes mértékben kikerüljük.

### TensorFlow
A TensorFlow egy ingyenes és nyílt forráskódú szoftverkönyvtár gépi tanuláshoz és mesterséges intelligenciához. Használata viszonylag kézenfekvő, elsajátításhoz szükséges idő viszonylag alacsony, így egy project szempontjából előnyös.

# Tesztterv
## 1. Működőképesség tesztelése
Elsősorban a megírt funkciók helyes működéséről győződünk meg. Ehhez a fejlesztők különböző erőforrású számítógépeken futtatják a programot, és jegyzetet készítenek az esetleges előforduló hibákról. Ha minden számítógépen gond nélkül fut, továbbhaladhatunk a fejlesztéssel. Amennyiben egy is hibát dob, a helyzetet kielemezzük, megkeressük a befolyásoló tényezőt és kijavítjuk azt, majd csak ezután haladunk tovább.

A tesztet legalább 2 különböző számítógépen végezzük el, de minél több esetet szeretnénk ellenőrizni. Akkor nevezhető a teszt sikeresnek, ha a tesztelésre használt eszközök legalább fele 2 évnél idősebb. Erre azért van szükség, mert komolyan vesszük a felhasználó-orientáltságot, és nem realisztikus az a feltevés, hogy terhelésnek alig kitett, új gépeken fogják használni a programunkat. Célunk az esélyegyenlőség, azaz, hogy bárki szabadon használni tudja a felületet.

Ennek érdekében több féle eszközön fogjuk a tesztelést futtatni. Az elsődleges eszközök:
| Processzor | RAM  | Életkor | Állapot  | Tesztelő |
|------------|------|---------|----------|-|
| AMD Ryzen 7   | 16GB | 2 év    | Kiváló    | Kósa Fruzsina |
| AMD Ryzen 5  | 16GB  |  <1 év    | Kiváló  | Gellén Rebeka |
| Intel Core i5 | 16GB | 4 év     | Kielégítő | Bukta Ádám |
| AMD Ryzen 5   | 8GB | 1 év    | Kiváló    | Dinó Ákos  |

## 2. Felület tesztelése
Itt a fő szempont, hogy a felületen minden szükséges elem megtalálható, mindhez hozzá van kötve a megfelelő funkció. A kód tisztítása is itt történik, a funkcióval nem rendelkező elemek eltávolításra kerülnek.
A követelménylistánk a következő:

| Modul       | ID  | Név               | V   | Kifejtés                                       |
|-------------|-----|-------------------|-----|------------------------------------------------|
| Jogosultság | L1  | Bejelentkezés     | 1.0 | A felhasználó bejelentkeztetése                |
| Modifikáció | M1  | Személyes hőérzet megadása   | 1.0 | A felhasználó hőérzetének megadása  |
| Modifikáció | M2  | Város megadása    | 1.0 | A lekérdezni kívánt város megadása            |
| Modifikáció | M3  | Új város megadása | 1.0 | Egy új lekérdezni kívánt város megadása       |
| Modifikáció | M4  | Celsius/Farenthait váltás| 1.0 | Celsius vagy Farenheit preferncia megadása|
| Statisztika | S1  | Napi időjárás     | 1.0 | Napi időjárás kimutatása |
| Statisztika | S2  | Hét napos időjárás| 1.0 | Hét nap időjárásának kimutatása              |
| Statisztika | S3  | Korábbi adatok | 1.0 | Az elmúlt 30 nap adatai az adott napra vonatkozóan kimutatva              |

Az ehhez szükséges elemek:
| Név               | V   | Szükséges elem                                       |
|-------------------|-----|------------------------------------------------|
| Bejelentkezés     | 1.0 | 2 db mező, amelyek billentyűzetről várnak tartalmat és gomb |
| Személyes hőérzet megadása  | 1.0 | Mező, amely billentyűzetről vár tartalmat |
| Város megadása    | 1.0 | Mező, amely billentyűzetről vár tartalmat |
| Új város megadása | 1.0 | Mező, amely billentyűzetről vár tartalmat |
| Celsius/Farenthait váltás| 1.0 | Gomb |
| Napi időjárás     | 1.0 | Kijelző és ehhez tartozó adatbázis |
| Hét napos időjárás| 1.0 | Kijelző és ehhez tartozó adatbázis |
| Korábbi adatok | 1.0 | Kijelző és ehhez tartozó adatbázis |


## 3. Felület kinézetének tesztelése
Célunk, hogy fizikai/érzékszervi korlátokkal rendelkező felhasználóink számára is akadálymentesítsük a felületet. Ennek érdekében külön figyelmet fordítunk a felület kinézetének ellenőrzésére. A színek kontrasztossága, a feliratok olvashatósága a szempont, így különböző monitorokon szeretnénk látni a futó kódot. Ezen tesztelési résznél ellenőrizzük, hogy van-e olyan dizájn-elem, amely nem rendelkezik saját funkcióval, de a felhasználó irányítására szolgál, és valamiféle hibát eredményezhet. Például egy felirat helytelen animálása vezethet villódzáshoz.
- Gombok helyes megjelenítése
- Feliratok olvashatósága
- Színek kontrasztosságának ellenőrzése
- Felületek közötti váltások rugalmassága
- Felületek tartalmának letisztultsága
- Felhasználó irányítására szolgáló, szerepüket tökéletesen ellátó üzenetek/feliratok

Külön felület kinézeti tesztet kap a sötét és a világos téma, így igény szerint lehet köztük váltani, fizikai/érzékszervi korlátok nem befolyásolják, melyiket használja a felhasználó.
- Gombok helyes megjelenítése
- Feliratok olvashatósága
- Színek kontrasztosságának ellenőrzése
- Felületek közötti váltások rugalmassága
- Felületek tartalmának letisztultsága
- Felhasználó irányítására szolgáló, szerepüket tökéletesen ellátó üzenetek/feliratok

## 4. Teljesítményteszt
Gyorsan működő program az elvárásunk, ezért fontos, hogy ellenőrizzük a sebességet. A tesztelés során A működőképesség tesztelésénél sorolt eszközökön megmérjük, mennyi időt vesz igénybe az első futás.

## 5. Biztonsági teszt
Bejelentkezés lehetséges így prioritás hogy a felhasználói adatai (mint például a városa, neve, preferenciái, jelszava) ne kerülhessen illetéktelen felek kezébe.
Futás során figyelmet fektetünk arra hogy az elárolt adatokat megfelelő módon tároljuk, szükség szerint titkosítást és/vagy egyébb eszközöket alkalmazzunk az adatok védelme érdekében.


## 6. Kompatibilitási teszt
A programot több böngészőben is tesztelni fogjuk, mindegyik eszközön.
| Processzor | RAM  | Életkor | Állapot  | Chrome | Firefox | Edge   | Tesztelő |
|------------|------|---------|----------|--------|---------|--------|-|
| AMD Ryzen 5   | 8GB | 1 év    | Kiváló    | x  |  x  |    |  Dinó Ákos |
| AMD Ryzen 7   | 16GB | 2 év    | Kiváló    |   |  x  |  x  | Kósa Fruzsina |
| AMD Ryzen 5  | 16GB  | <1 év    | Kiváló  | x  |    |  x  |  Gellén Rebeka |
| Intel Core i5 | 16GB | 4 év     | Kielégítő | x | x |  | Bukta Ádám  |


## 7. Dokumentáció ellenőrzés
A fejlesztés és tesztelés végén újból végigolvassuk a dokumentációt. Szükség esetén frissítjük és/vagy kiegészítjük. Meggyőződünk a dokumentációk naprakészségéről, jólformázottságáról és könnyű értelmezhetőségéről.
