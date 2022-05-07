import "./App.css";
import myVideo from "./myVideo.mp4";
import imageSrc from "./imageInSrc.jpg";
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red"> Hibara </h1>

        <br />

        <img src={imageSrc} alt=" imageInSrc" />

        <br />

        <img src="/imageInPublic.png" alt="imageInPublic" />
      </div>

      <video width="320" height="240" controls>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;