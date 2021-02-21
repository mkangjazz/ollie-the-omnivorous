export default function Map(props) {
  // this map just displays them
  // in the right place

  return (
    <div className="ui-map" id="ui-map">
      I display the Room and Description you are in: {props.currentRoom}
    </div>
  );
}
