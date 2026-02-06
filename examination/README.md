1. Projekt Examination JavaScript 2 - Vite + React

Spelkatalogen är en app där du kan söka upp gratis spel för en överblick om vad det är för spel, en thumbnail, genre, utgivare samt utgivningsår.
Datan är hämtat från ett API som allegedly uppdateras relativt frekvent.

2. Hämta projektet. Se till att du har Node installerat.

Öppna vs code, använd cd i terminal och ändra directory till där du hämtat hem projektet.
Skriv sedan in "npm run dev" och öppna localhost länken som skall dyka upp.

3.  * Jag använder mig utav routes med hjälp av React router.
    * Försökt vara så strukturerad som möjligt med mina komponenter och 
    har använt props som visas i UI från API't.
    * UseEffect har använts vid datahämtning från API med en 
    fetch() .then .then .catch
    * Jag tycker arrow funktioner är lite förvirrande ibland, men långsamt går det bättre.
    Fetch fungerade ej först pga CORS problem då hemsidan nekade när req
    kom från react. corsproxy.io löste det.
    Med flera länkar i både nav och footer så klarade app.jsx ej av att nesta in dem separat, skärmen blev helt blank. Jag kom i underfund med outlet och använde mig utav det för att lägga upp en önskad struktur.