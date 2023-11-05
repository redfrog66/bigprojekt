# 1. Adatgyűjtés
# Egy API segítségével fogunk időjárás adatokat gyűjteni.
# Az adatnyerés ehhez hasonló módon fog történni: https://github.com/TechnoLordx/SZFM_Calendar_/blob/master/Source/calendar/weather_script.js

import urllib.request
import sys
import json

# api_key = "JG5A6TC3EWVAZC5W6P3JZAUGR" #TODO API KEY

# try: 
#   url = f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/retrievebulkdataset?&key=JG5A6TC3EWVAZC5W6P3JZAUGR&taskId=ba30cdc2f912a0e7ca286e6ee6399844&zip=false"
#   ResultBytes = urllib.request.urlopen(url)
#   # TODO - API KEY beillesztése
  
#   # adatok beolvasása
#   data = json.load(ResultBytes)
        
# except Exception as e:
#     print('Error:', e)
#     sys.exit()
# except urllib.error.URLError as e:
#     print('Error reason:', e.reason)
#     sys.exit()

with open('hungary30days.txt') as f:
    data = json.load(f)

# 2. Adatfeldolgozás, adattisztítás
#releváns adatok kinyerése a válaszból
dates = []
temperatures = []
humidities = []
pressures = []


for day in data["days"]:
    dates.append(day["datetime"])
    temperatures.append(day["temp"])
    humidities.append(day["humidity"])
    pressures.append(day["pressure"])
    


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

df = pd.DataFrame({
    'date': dates,
    'temperature': temperatures,
    'humidity': humidities,
    'pressure': pressures
})


target = 'temperature'

features = ['humidity', 'pressure']

X = df[features]
y = df[target]

X = preprocessor.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Modell tanítása
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

def train_model(X_train, y_train, model):
    model.fit(X_train, y_train)
    return model

model = LogisticRegression()
model = train_model(X_train, y_train, model)

# 4. Modell kiértékelése
def evaluate_model(model, X_test, y_test):
    y_pred = model.predict(X_test)
    a_score = accuracy_score(y_test, y_pred)
    print(f"Model accuracy: {a_score}")

evaluate_model(model, X_test, y_test)   

def make_predictions(model, preprocessor, temperatures, humidities, pressures):
    predictions = []
    for i in range(len(temperatures)):
        input_data = pd.DataFrame({'temperature': [temperatures[i]],
                                   'humidity': [humidities[i]],
                                   'pressure': [pressures[i]]})
        input_data = preprocessor.transform(input_data)
        prediction = model.predict(input_data)
        predictions.append(prediction[0])

    return predictions

# 5. Adat vizualizáció
import matplotlib.pyplot as plt

# Próbáljuk meg kinyerni az adatokat
def extract_weather_data(data):
    try:
        dates = [day['datetime'] for day in data['days']]
        temperatures = [day['temp'] for day in data['days']]
        humidities = [day['humidity'] for day in data['days']]
        pressures = [day['pressure'] for day in data['days']]
        return dates, temperatures, humidities, pressures
    except KeyError:
        print("Error: Hiányzó adatok.")
        sys.exit()

dates, temperatures, humidities, pressures = extract_weather_data(data)

predictions = make_predictions(model, preprocessor, temperatures, humidities, pressures)

# Új ábra létrehozása
def plot_weather_data(dates, temperatures, humidities, pressures):
    plt.figure(figsize=(10, 6))
    # Hőmérséklet, páratartalom és nyomás ábrázolása
    plt.plot(dates, temperatures, label='Temperature')
    plt.plot(dates, humidities, label='Humidity')
    plt.plot(dates, pressures, label='Pressure')
    # Címkék és cím hozzáadása
    plt.xlabel('Date')
    plt.ylabel('Value')
    plt.title('Weather Forecast')
    plt.legend() # Jelmagyarázat hozzáadása
    plt.show() # Ábra megjelenítése

plot_weather_data(dates, temperatures, humidities, pressures)

# 6. Modell mentése
import pickle

# Próbáljuk meg menteni a modellt és az előfeldolgozót
def save_model(model, preprocessor):
    try:
        with open('model.pkl', 'wb') as f:
            pickle.dump(model, f)

        with open('preprocessor.pkl', 'wb') as f:
            pickle.dump(preprocessor, f)
    except Exception as e:
        print(f"Error: A mentés sikertelen{e}")

save_model(model, preprocessor)


