export const KEY_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
  }
};


export const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

export const lang = {
  en: {
    search :"Search",
    placeHolder : "What you wanna watch today"
  },
  hindi: {
    search :"खोज",
    placeHolder : "आज आप क्या देखना चाहते हैं"
  },
  spanish: {
    search:"Buscar",
    placeHolder: "¿Qué quieres ver hoy?"
  }
}
