//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <div classname="container">
        <div classname="row">
          <div classname="col">
            <h1>Story</h1>
            <p classname="ui-story" id="ui-story">
              A wizard has turned you into a whale. Is this awesome?
            </p>
          </div>
          <div classname="col">
            <div classname="ui-map" id="ui-map">
              Map, needs to update position
            </div>
            <div classname="ui-inventory" id="ui-inventory">
              Carrying
            </div>
            <div classname="ui-actions" id="ui-actions">            
            </div>
            <div classname="ui-user-input" id="ui-user-input">
              <input autofocus type="text" />
              <input type="submit" />
            </div>
            <div classname="" id="ui-error-message">
                Invalid command
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
