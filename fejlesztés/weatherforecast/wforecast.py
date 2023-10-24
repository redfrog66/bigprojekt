# 1. Adatgyűjtés
# Egy API segítségével fogunk időjárás adatokat gyűjteni.
# Az adatnyerés ehhez hasonló módon fog történni: https://github.com/TechnoLordx/SZFM_Calendar_/blob/master/Source/calendar/weather_script.js

import requests
import json
# Egy Python könyvtár, amely lehetővé teszi a HTTP kérések küldését.

api_key = "your_api_key" #TODO: API kulcs megadása
city = "Budapest" #TODO: Város megadhatóvá tétele
url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"

response = requests.get(url)
# A GET kérés elküldése a megadott URL-re.
# A válasz tartalmazza a válasz kódját, a fejlécet és a válasz tartalmát.
data = response.json()
# A válasz tartalmának JSON formátumra alakítása.


# 2. Adatfeldolgozás, adattisztítás
#releváns adatok kinyerése a válaszból
temperature = data["main"]["temp"]
humidity = data["main"]["humidity"]
pressure = data["main"]["pressure"]


from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

# Előfeldolgozás lépéseinek definiálása feature-önként
numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='mean')),
    ('scaler', StandardScaler())])

# Lépések összefésülése
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, ['temperature', 'humidity', 'pressure']),
        # Add more transformers for categorical or text features if needed
    ])

# Adatok előfeldolgozása
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler


df = pd.DataFrame({'temperature': [temperature],
                   'humidity': [humidity],
                   'pressure': [pressure],
                   'target': [0]})

X = df.drop('target', axis=1)
y = df['target']

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X) 

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)
