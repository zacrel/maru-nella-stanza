# Render MARU nella stanza — 27 ottobre 2026

Il prodotto è renderizzato direttamente da MARU.glb con Three.js. Nessuna generazione AI è usata per questo fotoinserimento. La fotografia originale è il fondo del compositing; il render aggiunge prodotto e ombre sintetiche.

Scala: altezza nota di 0,80 m tra bordo inferiore della mappa e pavimento. Punti selezionati manualmente sulla foto originale 1500 × 2000: (80,1025), (514,1015), (90,1395), (512,1347). I punti inferiori sono proiezioni stimate sulla giunzione pavimento-parete. Focale ipotizzata 1200 pixel, centro ottico al centro immagine, distorsione ignorata. La camera e la larghezza della porzione di parete sono adattate a questi punti: residuo RMS circa 0,72 pixel, che misura solo l'adattamento ai punti scelti e NON la precisione reale del collocamento. La larghezza della porta di 80 cm non è stata inclusa come vincolo indipendente: servirebbe ricostruire anche il piano della porta e distinguere luce netta e telaio.

GLB in metri, scala 1:1: 465 × 405 × 305,66 mm. Il retro è posto a 1 cm dalla parete virtuale; il battiscopa non è modellato. Il mobile poggia sul piano del pavimento virtuale. Il modello non viene deformato per combaciare con l'immagine. Posizione iniziale sotto la mappa, regolabile orizzontalmente. Il bordo superiore del mobile è 39,5 cm sotto il livello inferiore della mappa nello spazio della scena; la distanza apparente nella foto varia con la profondità.

Terracotta: materiale opaco indicativo, colore sRGB #b87e6b, rugosità 0,75. Non è una conversione colorimetrica certificata del RAL3012. Luce direzionale e ambiente impostate manualmente; ombre su piani invisibili. Mancano calibrazione fotografica, occlusione ambientale avanzata e riflessi del prodotto nei vetri. La resa è un prototipo di collocamento, non un render finale da catalogo.

Avvio locale: eseguire un server HTTP statico nella cartella (per esempio python -m http.server 8000) e aprire http://localhost:8000. Per GitHub Pages pubblicare la cartella radice del ramo main. L'esportazione PNG viene scaricata dal browser, senza backend.

Verificato: caricamento GLB di 10 corpi nel browser, visualizzazione nella foto, esportazione PNG a 1500 × 2000. File calibrazione.json contiene i parametri usati. Per validare meglio il collocamento occorre una seconda dimensione nota sul medesimo piano della parete, oppure camera calibrata/rilievo.

