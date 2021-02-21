export default function Article(props) {
  function text() {
    let text = [];

    switch (props.display) {
      case 'menu':
        text = text.concat(
          props.gameData.screens.filter(obj => obj.name === 'menu')[0].description
        );
        break;
      case 'help':
        text = text.concat(
          props.gameData.screens.filter(obj => obj.name === 'help')[0].description
        );
        break;
      case 'win':
        text = text.concat(
          props.gameData.screens.filter(obj => obj.name === 'win')[0].description
        );
        break;
      case 'lose':
        text = text.concat(
          props.gameData.screens.filter(obj => obj.name === 'lose')[0].description
        );
        break;
      case 'game':
        text = text.concat(
          props.gameData.rooms.filter(obj => obj.name === props.currentRoom)[0].description
        );
        // we need to split up the descriptions into parts?
          // room
            // exits
            // surroundings
            // objects
          // object (inspect item)

        break;
      default:
        break;
    }

    return text;
  };

  return (
    <article className="ui-story" id="ui-story">
      {text().length > 0
        ? text().map((item, index) => {
            return (
              <p key={`text-${index}`}>
                {item}
              </p>
            );
          })
        : null
      }
    </article>
  );
}
