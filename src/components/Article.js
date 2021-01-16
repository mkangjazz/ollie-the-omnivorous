export default function Article(props) {
  return (
    <article className="ui-story" id="ui-story">
      {props.text.length > 0
        ? props.text.map((item, index) => {
            return <p key={`text-${index}`}>{item}</p>
          })
        : null
      }
    </article>
  );
}
