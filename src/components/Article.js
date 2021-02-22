export default function Article(props) {
  // we could add on syntax highlighting for recognized interactive objects
  // and rooms
  // things to display
    // story description
    // what did i input
    // what was the response to that input, error message or else

  return (
    <article className="ui-story" id="ui-story">
      {props.history.length > 0
        ? props.history.map((item, index) => {
            // if it's the last item in the array, add Aria- announcement polite?
            return (
              <div key={`text-${index}`}>
                {item}
              </div>
            );
          })
        : null
      }
    </article>
  );
}
