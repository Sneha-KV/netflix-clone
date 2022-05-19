import "./App.css";
import requests from "./requests";
import ShowsRow from "./ShowsRow";
import Banner from "./Banner";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Banner />
      <div className="rows__wrapper_container">
        <ShowsRow
          title={"NETFLIX ORIGINALS"}
          fetchURL={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <ShowsRow title={"Trending Now"} fetchURL={requests.fetchTrending} />
        <ShowsRow title={"Top Rated"} fetchURL={requests.fetchTopRated} />
        <ShowsRow
          title={"Action Movies"}
          fetchURL={requests.fetchActionMovies}
        />
        <ShowsRow
          title={"Comedy Movies"}
          fetchURL={requests.fetchComedyMovies}
        />
        <ShowsRow
          title={"Horror Movies"}
          fetchURL={requests.fetchHorrorMovies}
        />
        <ShowsRow
          title={"Romance Movies"}
          fetchURL={requests.fetchRomanceMovies}
        />
        <ShowsRow
          title={"Documentaries"}
          fetchURL={requests.fetchDocumentaries}
        />
      </div>
    </div>
  );
}

export default App;
