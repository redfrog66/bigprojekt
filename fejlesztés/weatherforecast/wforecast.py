# 1. Adatgyűjtés
# Egy API segítségével fogunk időjárás adatokat gyűjteni.
# Az adatnyerés ehhez hasonló módon fog történni: https://github.com/TechnoLordx/SZFM_Calendar_/blob/master/Source/calendar/weather_script.js

import urllib.request
import sys
import json

api_key = "YOUR_API_KEY" #TODO API KEY

try: 
  url = f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Hungary/last30days?unitGroup=metric&key={api_key}&contentType=json"
  ResultBytes = urllib.request.urlopen(url)
  # TODO - API KEY beillesztése
  
  # adatok beolvasása
  data = json.load(ResultBytes)
        
except urllib.error.HTTPError  as e:
  ErrorInfo= e.read().decode() 
  print('Error code: ', e.code, ErrorInfo)
  sys.exit()
except  urllib.error.URLError as e:
  ErrorInfo= e.read().decode() 
  print('Error code: ', e.code,ErrorInfo)
  sys.exit()


# 2. Adatfeldolgozás, adattisztítás
#releváns adatok kinyerése a válaszból
temperature = data["days"][0]["temp"]
humidity = data["days"][0]["humidity"]
pressure = data["days"][0]["pressure"]


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
    ])

# Adatok előfeldolgozása
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler


df = pd.DataFrame({'temperature': [temperature],
                   'humidity': [humidity],
                   'pressure': [pressure],
                   'target': [0]})

X = preprocessor.fit_transform(df.drop('target', axis=1))
y = df['target']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Modell tanítása
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

model = LogisticRegression()
model.fit(X_train, y_train)

# 4. Modell kiértékelése
y_pred = model.predict(X_test)
a_score = accuracy_score(y_test, y_pred)
print(f"Model accuracy: {a_score}")


# 5. Adat vizualizáció
import matplotlib.pyplot as plt

dates = [day['datetime'] for day in data['days']]
temperatures = [day['temp'] for day in data['days']]
humidities = [day['humidity'] for day in data['days']]
pressures = [day['pressure'] for day in data['days']]

plt.figure(figsize=(10, 6))

plt.plot(dates, temperatures, label='Temperature')
plt.plot(dates, humidities, label='Humidity')
plt.plot(dates, pressures, label='Pressure')

plt.xlabel('Date')
plt.ylabel('Value')
plt.title('Weather Forecast')

plt.legend()
plt.show()

# 6. Modell mentése
import pickle

with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)

with open('preprocessor.pkl', 'wb') as f:
    pickle.dump(preprocessor, f)



