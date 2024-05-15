import logo from "./logo.svg";
import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>
          Esto es lo que dicen supuestas personas que quiza utilizaron
          freeCodeCamp
        </h1>
        <Testimonio
          nombre="David Perez"
          pais="Grecia"
          imagen="David"
          cargo="Ingenieria en Sistemas Computacionales"
          empresa="Abarrotes: Don Arturo"
          testimonio="No daba miedo cambiar de carrera. No gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año no tuve un trabajo de seis cifras como ingeniero de software. FreeCodeCamp no cambió mi vida."
        />
        <Testimonio
          nombre="Eugenia Serrano"
          pais="Paises Bajos"
          imagen="Eugenia"
          cargo="Ingenieria en Software"
          empresa="Google"
          testimonio="FreeCodeCamp no fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios mal estructurado no llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. No era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        />
        <Testimonio
          nombre="Marta Mirano"
          pais="Ixtapalapa"
          imagen="Marta"
          cargo="Ingenieria en Semiconductores"
          empresa="Spotify"
          testimonio="Nunca he tenido problemas para aprender JavaScript. No he tomado muchos cursos, pero el curso de freeCodeCamp no fue el que se quedó. No estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp no me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
      </div>
    </div>
  );
}

export default App;
