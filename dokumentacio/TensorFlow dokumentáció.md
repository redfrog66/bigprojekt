## Bevezetés
A TensorFlow egy nyílt forráskódú gépi tanulási könyvtár, amit a Google Brain csapata fejlesztett ki. Célja, hogy támogassa a gépi tanulás és mélytanulás széles körét, és ezáltal az egyik legnépszerűbb könyvtárrá vált ezen a területen. Ez a dokumentáció áttekintést nyújt a TensorFlow főbb jellemzőiről és fogalmairól, hogy segítsen elindulni gépi tanulási projektek létrehozásában.
## Telepítés
A TensorFlow használata előtt még telepítenünk kell egy fejlesztői környezetet(jelen esetben PyCharm) és egy környezet kezelőt(jelen esetben Anaconda). A telepítésük a következőképpen működik:

### Az Anaconda telepítése:
* Töltse le az alábbi linkről az Anaconda legújabb verzióját [Anaconda](https://www.anaconda.com/download#downloads).
* Futtassa rendszergazdaként a telepítőt.
* Mindent alaphelyzetben hagyva telepítse a programot.

### PyCharm telepítése:
* A következő linken megtalálhatjuk a PyCharm hivatalos oldalát ahonnan letölthető a PyCharm community edition-je [Python](https://www.jetbrains.com/products/compare/?product=pycharm&product=pycharm-ce) .
* A PyCharm telepítő megnyitása után semmi más dolgunk nincs mint a alap belállításokkal végighaladni a telepítési folyamaton.

## Anaconda használata a TensorFlow telepítésére
* A windows keresőjében keresse meg az "Anaconda Promt(Anaconda 3)" nevű programot.
* Futassa rendszergazdaként.
* Futtassa a következő parancsot : "conda create --name myTensorFlowEn tensorflow-gpu" ahol a myTensorFlowEn a TensorFlow könyezetünk neve.
* Jelen esetben a TensorFlow videókártya erőforrásokat fog használni amennyiben nincs diszkrét GPU, illetve valamilyen okból CPU alapon szeretné futtatni a helyes parancs conda create -n myTensorFlowEn tensorflow-cpu.
* Gépeljen be egy y betút a telepítés elfogadásához.
* Futtassa a következő parancsot: "conda activate myTensorFlowEn"
* Futtassa a következő parancsot: "conda install pip"
* Futtassa a következő parancsot: "pip install tensorflow"

## PyCharm beállítása:
* New project
* Kattintson az Existing interpreter opcióra.
* A három pontra kattintva válassza ki a Conda Interpreter opciót
* Válassza ki a helyes interpretert.
* Pipálja be a "Make avaible to all projects" lehetőséget.
* Bezárhatja a beállításokat és megcsinálhatja a projectet.
* Importálja a TensorFlowt a következő parancsal "import tensorflow as tf"
* Tesztelés gyanánt futtassa le a következő kódrészletet "print(tf.__version__)"

## Főbb Jellemzők
### TensorFlow Grafikon
A TensorFlow egy számítási grafikon koncepciója köré épül. Egy TensorFlow grafikonban a csomópontok matematikai műveleteket reprezentálnak, míg az élek az adatok (tenzorok) áramlását jelölik az operációk között. Ez a grafikon alapú megközelítés lehetővé teszi a terjesztett számítást és hatékony optimalizálást.

### Magas Szintű API-k
A TensorFlow magas szintű API-kat, például a Keras-t kínálja, amely egyszerűsíti a mélytanulási modellek létrehozását és tanítását. A Keras szorosan integrált a TensorFlow-fel, így könnyen létrehozhat bonyolult neurális hálózatokat minimális kódírás mellett.

### Rugalmasság
A TensorFlow támogat számos gépi tanulási feladatot, beleértve a mélytanulást, gépi tanulást és erősítéses tanulást. Felhasználható olyan feladatokhoz, mint kép osztályozás, természetes nyelvfeldolgozás és sok más.

### Modell Szolgáltatás
A TensorFlow Szolgáltatás lehetővé teszi az előre kiképzett modellek bevezetését gyártási környezetekben, amelyek egyszerűvé teszik a gépi tanulási modellek alkalmazásokhoz és szolgáltatásokhoz történő szolgáltatását.

### TensorBoard
A TensorBoard egy vizualizációs eszköz, amely lehetővé teszi a modell tanulásának és teljesítményének vizsgálatát.

## Referenciák
[TensorFlow](https://www.youtube.com/playlist?list=PLhhyoLH6IjfxVOdVC1P1L5z5azs0XjMsb)
