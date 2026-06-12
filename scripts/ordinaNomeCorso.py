import json

with open("data/corsi_per_classe.json", "r", encoding="utf-8") as f:
    data_corsi = json.load(f)

with open("data/universita.json", "r", encoding="utf-8") as f:
    universita = json.load(f)

mappa_uni = {uni["sigla"]: uni["nome"] for uni in universita}

for classe in data_corsi.values():
    classe["offerte"].sort(
        key=lambda x: (
            x["nomeCorso"],
            mappa_uni.get(x["universita"], "")
        )
    )

with open("data/corsi_per_classe.json", "w", encoding="utf-8") as f:
    json.dump(data_corsi, f, ensure_ascii=False, indent=4)