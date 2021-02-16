import Header from "./component/Header";
import "./component/style.css"
function App() {
  return (
    <div className={styles.container}>
      <Header title={'TASK TRACKER'} paint='red'/>
    </div>

  );
}


export default App;
