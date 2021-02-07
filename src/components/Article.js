import intro from '../data/intro';
import help from '../data/help';

export default function Article(props) {
  function text() {
    let text = [];

    switch (props.display) {
      case 'menu':
        text = text.concat(intro.text);
        break;
      case 'help':
        text = text.concat(help.text);
        break;
      case 'win':
        text = text.concat('Win');
        break;
      case 'lose':
        text = text.concat('Lose');
        break;
      case 'game':
        // many possibilities here
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
