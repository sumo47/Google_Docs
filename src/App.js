import { useEffect } from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import { gapi } from 'gapi-script'

const CLIENT_ID = "275676399174-b3h7agfuofkjp4h0qlkj86g145dbvmdg.apps.googleusercontent.com"
// const CLIENT_SECRET = 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
const API_KEY = "AIzaSyDh0B7001QY0iATJyhzfO04oLc_A0fzyJ0"

const SCOPES = 'https://www.googleapis.com/auth/drive'

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        apikey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES
      })
    }
    gapi.load('client:auth2', start);
  })

  function zerofill(i) {
    return (i < 10? '0': '') +i //10
  }

  function getDateString(){
    const date = new Date();
    const year = date.getFullYear()
    const month = zerofill(date.getMonth()+1)
    const day = zerofill(date.getDate())
    return year + '-' + month + '-' + day
  }

  function getTimeString(){
    const date = new Date();
    return date.toLocaleTimeString()
  }

  function createFile(tag) {

    var accessToken = gapi.auth.getToken().access_token;
    var fieName = tag + "Notes. "  + getDateString() + " " + getTimeString()
    fetch('https://docs.googleapis.com/v1/documents?title=' + fieName , {
      method: 'POST',
      headers: new Headers({ 'Authorization': 'Bearer ' + accessToken })
    }).then((res) => {
      return res.json();
    }).then(function (val) {
      console.log(val);
      console.log(val.documentId)
      window.open("https://docs.google.com/document/d/" + val.documentId + "/edit", "_blank");//open doc in new tab
    });
  }

  return (
    <div className="App" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Login />
      <Logout />
      <button onClick={() => createFile('SumitDocs ')}>CreateDocs</button>
      <button onClick={() => createFile('Science ')}>Science</button>
      <button onClick={() => createFile('Python ')}>Python</button>
    </div>
  );
}

export default App;
