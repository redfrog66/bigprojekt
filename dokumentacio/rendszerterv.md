# Rendszerterv
## Rendszer:
Az alkalmazásunk egy Web felülettel rendelkező, Python nyelven íródó időjárásjelentő és időjárás előrejelző applikáció. Széleskörben rendelkezik különböző időjárási adatokkal, például hőmérsékletet, szélsebesség, páratartalom. Ezen információk alapján pedig képes megmondani, hogy milyen ruházat lenne a legideálisabb az adott nap időjárása alapján. A felhasználóknak lehetőségük van regisztráni az oldalra, aminek köszönhetően bejelentkezhetnek, és személyre szabhatnak bizonyos dolgokat. A felületen lehetőség van átváltani Fahrenheitre is.

## Rendszer célja:
A csapat célja egy egyszerű időjárásjelentő és időjárás előrejelző applikációt készíteni, pár egyedi csavarral.
Projektünk másik célja pedig, hogy gépi tanulást segítségül hívva pontosabb előrejelzést tudjunk adni a felhasználóknak, miközben a felhasználói élményt is szem előtt tartjuk, illetve a csapatmunka során a csapat tagjai is fejlődjenek mind fejlesztés, mind kommunikáció és kivitelezés terén. Így tehát a projekt fő része a fejlesztők számára a tanulási folyamat, a felhasználók számára pedig a könnyű használat és az információszerzés.

## Terv:
### Kiindulás
User - A személy, aki aktuálisan a felületen navigál. Helyzettől függ a kiléte, lehet a tesztelő is, a megrendelő, vagy deployment után egy felhasználó. A rendszerterv ezen részében mint helytartó szó fog szerepelni.

A User megnyitja a webapplikációt. Letisztult és szép felület várja, könnyen tud navigálni.

### Hőmérséklet
A legfontosabb része a felületnek. Predikció útján generálunk következő 7 napi előrejelzést, de korábbi napok hőmérsékletét is meg tudjuk jeleníteni. A hőmérsékletet fokban adjuk meg, de lehetőség van átváltani Fahrenheitre is. 

### Szél és páratartalom
Ezen információk is predikció útján kerülnek generálásra. A szélsebességet méter per másodpercben, a páratartalmat százalékban adjuk meg.

### Öltözködési tanácsok
A hőmérséklet, szélsebesség és páratartalom alapján megmondjuk, hogy milyen ruhát érdemes felvenni. A tanácsokat a következőképpen adjuk meg:
- 0-10 fok: Viseljen sapkát!
- 10-20 fok: Vigyen kabátot!
- 30-40 fok: Viseljen naptejet!

Nagy szél esetén:
- 0-10 m/s: Vigyen kabátot!
- 10-20 m/s: Viseljen sapkát!

### Regisztráció
A Usernek lehetősége van regisztrálni. Itt megad megszólítást, email címét, jelszavát, illetve választhat alapértelmezett várost. A regisztráció után a User bejelentkezik.

### Bejelentkezés
A User bejelentkezik, megadja email címét és jelszavát. Ha sikeres volt a bejelentkezés, akkor a felületen megjelenik a User neve, és a bejelentkezés gomb helyett egy kijelentkezés gomb jelenik meg. Megjelenik a Fiók gomb is, ahol személyreszabás történik.

### Személyreszabás
Nem mindenki várja meg a 30 fokot a naptejjel, vagy a 10-et, hogy sapkát hordjon, de egy emlékeztető mégis hasznos. Ezért a felhasználó beállíthatja, hogy az öltözködést segítő üzenetek mikor jelenjenek meg. A beállításokat a Fiók gomb alatt találja meg a User.

Elmenthet városokat is, az alapértelmezetten felül. Ez gyorsítja a felhasználói élményt, hiszen nem kell minden alkalommal megadnia a várost, ahol tartózkodik, ki tudja választani a listából.

### Átváltás Fahrenheitre
Előreláthatólag egy gomb fogja megvalósítani, hogy a napi hőmérséklet Fahrenheitben is megjelenjen. A gomb megnyomásával a hőmérséklet átváltódik Fahrenheitre, a gomb újra megnyomásával pedig vissza Celsiusra.

<img src = "assets/homerseklet_atvaltas.png">

Az átváltás gombnyomással történő megoldása az adatbázisban tárolt adatok mennyiségének minimalizálása érdekében történt.
Amennyiben a tesztelési fázis alatt jelentős mértékű lassulást tapasztalunk a futási időben, lehetséges, hogy külön el lesznek tárolva az adatok F°-ban is.

### Egy életbeli példa, mely szemlélteti a felhasználást


### Felhasználói hozzáférhetőség

Fizikai/érzékszervi korlátokkal rendelkező felhasználóink számára is akadálymentesítjük a felületet. Szemkímélő színpalettával dolgozunk, és terv szerint lehetőséget fogunk biztosítani a sötét/világos témák közötti váltásra. A villódzásmentesség egy olyan fontos tényező, melyet gyakran nem vesznek kellően számításba az interneten. Mi szeretnénk erre is hangsúlyt fektetni, így hanyagoljuk az olyaféle animációkat, melyek meghibásodás esetén villódzó képet okoznának.

Ezáltal az általunk létrehozott játék ezen szempontokból nem hátráltat senkit, nem limitálja részvételüket.

## Időpont:
A projekt elkészülési határideje az oktató által megszabott határidő. 

Maga a program, hozzáféréstől függően bármilyen időpontban futtatható.

## Erőforrások:

# Tesztterv
## 1. Működőképesség tesztelése
Elsősorban a megírt funkciók helyes működéséről győződünk meg. Ehhez a fejlesztők különböző erőforrású számítógépeken futtatják a programot, és jegyzetet készítenek az esetleges előforduló hibákról. Ha minden számítógépen gond nélkül fut, továbbhaladhatunk a fejlesztéssel. Amennyiben egy is hibát dob, a helyzetet kielemezzük, megkeressük a befolyásoló tényezőt és kijavítjuk azt, majd csak ezután haladunk tovább.

A tesztet legalább 2 különböző számítógépen végezzük el, de minél több esetet szeretnénk ellenőrizni. Akkor nevezhető a teszt sikeresnek, ha a tesztelésre használt eszközök legalább fele 2 évnél idősebb. Erre azért van szükség, mert komolyan vesszük a felhasználó-orientáltságot, és nem realisztikus az a feltevés, hogy terhelésnek alig kitett, új gépeken fogják használni a programunkat. Célunk az esélyegyenlőség, azaz, hogy bárki szabadon használni tudja a játékot.

Ennek érdekében több féle eszközön fogjuk a tesztelést futtatni. Az elsődleges eszközök:
| Processzor | RAM  | Életkor | Állapot  |
|------------|------|---------|----------|
| AMD Ryzen 7   | 16GB | 2 év    | Kiváló    |
| AMD Ryzen 5  | 8GB  | 3 év    | Elégséges  |

Egyéb tesztelésre használt eszközök:
| Processzor | RAM  | Életkor | Állapot  |
|------------|------|---------|----------|
| AMD Ryzen 5   | 8GB | 1 év    | Kiváló    |
|  Intel Core i5  | 8GB  | 6 év    | Kielégítő  |
|  AMD Ryzen 5  | 31GB  | <1 év    | Kiváló  |


## 2. Felület tesztelése
Itt a fő szempont, hogy a felületen minden szükséges elem megtalálható, mindhez hozzá van kötve a megfelelő funkció. A kód tisztítása is itt történik, a funkcióval nem rendelkező elemek eltávolításra kerülnek.
A követelménylistánk a következő:

| Modul       | ID  | Név               | V   | Kifejtés                                       |
|-------------|-----|-------------------|-----|------------------------------------------------|

Az ehhez szükséges elemek:
| Név               | V   | Szükséges elem                                       |
|-------------------|-----|------------------------------------------------|


Egyéb elemek:
| Név               | V   | Szükséges elem                                       |
|-------------------|-----|------------------------------------------------|

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


## 6. Kompatibilitási teszt
A programot több böngészőben is tesztelni fogjuk, mindegyik eszközön.
| Processzor | RAM  | Életkor | Állapot  | Chrome | Firefox | Edge   |
|------------|------|---------|----------|--------|---------|--------|
| AMD Ryzen 5   | 8GB | 1 év    | Kiváló    | x  |  x  |    |
|  Intel Core i5  | 8GB  | 6 év    | Kielégítő  | x  |    |  x  |
|  AMD Ryzen 5  | 31GB  | <1 év    | Kiváló  | x  |    |    |
| AMD Ryzen 7   | 16GB | 2 év    | Kiváló    |   |  x  |  x  |
| AMD Ryzen 5  | 8GB  | 3 év    | Elégséges  | x  |    |  x  |

## 7. Dokumentáció ellenőrzés
A fejlesztés és tesztelés végén újból végigolvassuk a dokumentációt. Szükség esetén frissítjük és/vagy kiegészítjük. Meggyőződünk a dokumentációk naprakészségéről, jólformázottságáról és könnyű értelmezhetőségéről.
