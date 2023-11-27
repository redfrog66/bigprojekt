## Frontend - Felület tesztelési sablon kitöltendő
### 1. Cím és Bevezetés:
   * Tesztjegyzőkönyv neve: Dinó Ákos Frontend tesztjegyzőkönyve
   * A tesztelés célja és kontextusa:
     Az én feladatom az bejelentkezési funkciók elkészítése és javascriptek hozzácsatolása a htmlhez volt. Célom az volt hogy az oldal funkciói megfelelően működjenek.

### 2. Tesztelési Környezet:
   * Böngésző típusa és verziószáma: Mozilla Firefox Developper edition, Google Chrome
   * Operációs rendszer leírása, amelyen a tesztelés történt: Windows 10
   * Az alkalmazás verziója, amelyet teszteltek: <=1.0
   * Eszköz típusa, amelyen a tesztelés történt: Laptop

| Processzor | RAM  | Életkor | Állapot  |
|------------|------|---------|----------|
| AMD Ryzen 5| 8gb  | 2év    |  Jó   |

### 3. Tesztesetek és Esetleírások:
   * Az egyes tesztesetek felsorolása és egyedi azonosítóikkal ellátása 
   * Minden tesztesethez tartozó elvárások és bemenetek leírása 
   * Interaktív funkciók tesztelésére vonatkozó utasítások
   * A backenden létrehozott funkciók megfelelő működésének ellenőrzése a frontend szempontjából
   * (Itt a feladatok nem kitöltendők, hanem elvégzendők.)
| Teszteset azonosító | Teszteset leírása | Elvárt eredmény |
|---------------------|-------------------|------------------|
| 1 | Bejelentkezés | A weboldalon múködik a bejelentkezés funkció |
| 2 | Registráció | A weboldalon működik a regisztráció funkció |
| 3 | Recommendation | Az oldalon lévő recommendation fül felhasználótól függően ajánl esernyőt és kabátot |
| 4 | Personalization | A bejelentkezés után az oldalon beállíthatók a preferenciák |
| 5 | F -> C | A hőmérséklet mértékegység váltása megfelelő |

### 4. Bejelentkezés és regisztráció:
   * Az adatbázisból lekérdeződnek az elemek
   * Az adatbázisba bekerülnek az adatok regisztráció során

### 5. Personalization
   * A prefenciák elmentődnek és a homepagen beolvasódnak

### 6. Teszteredmények:
   * Az egyes tesztesetek végrehajtásának eredményei a frontend szempontjából:
   * Bejelentkezés: Tesztelés történt helyes jelszó-felhasználónév kombinációval, helytelennel, nem létező esetekben, minden esetben helyes volt a működés
   * Regisztráció: A regisztráció korrektül felviszi az adatbázisba az adatokat.
   * Recommendation: Nem sikerült hibát kihozni belőle, helyesen beolvassa a preferenciákat és megfelelően ajánl
   * Personalization: Helyesen elmenti az adatokat az adott userhez
   * F -> C: Helyesen átváltja az oldalon mindenhol a Celsiut Farenhietra és vissza.
   * Hibák, figyelmeztetések és egyéb észrevételek dokumentálása: -

### 7. Jelentések és Statisztikák:
   * Általános tesztelési statisztikák: Hibát nem találtam a tesztelés során

### 8. Hibák és Nyitott Kérdések:
   * A frontend tesztelése során felfedezett hibák és problémák rövid leírása: -
   * Nyitott kérdések, amelyekre a fejlesztői csapatnak válaszokat kell találnia: -

### 9. Kiegészítő Megjegyzések és Tanulságok:
   * Általános megjegyzések a frontend tesztelési folyamat során szerzett tapasztalatokról: Tesztelni fontos
   * Tanulságok és javaslatok a jövőbeli tesztelési folyamatokra nézve: Tesztelni kell
