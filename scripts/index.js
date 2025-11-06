const getYearInFooter = function () {
  const footer = document.getElementById("year")
  footer.innerText = new Date().getFullYear() //2025
}

getYearInFooter()

const eventsURL = "https://striveschool-api.herokuapp.com/api/agenda"

//ok,é arrivato il momento di recuperare gli EVENTI dall'API di EPICODE
//e inserirli nella pagina!
const getEvents = function () {
  fetch(eventsURL)
    .then((res) => {
      console.log("RESPONSE", res)
      if (res.ok) {
        //la risposta é stata 200 o simili
        //i dati sono arrivati,estraiamo il JSON dalla response
        return res.json()
      } else {
        //la risposta é stata 400.401,404,500 etc.
        throw new Error(
          `Errore nella risposta ricevuta dal server: ${res.status}`
        )
      }
    })
    .then((arrayOfEvents) => {
      //qui dentro ho accesso ai dati!
      console.log("ARRAYOFEVENTS", arrayOfEvents)
    })

    .catch((err) => {
      console.log("GETEVENTS ERROR", err)
      //problemi di connessione,spina staccata etc.
    })
}

getEvents()
