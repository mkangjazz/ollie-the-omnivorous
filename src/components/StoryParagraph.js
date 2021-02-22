export default function InputParagraph(props) {
  return (
    <p 
      className='story-paragraph'
      tabIndex='0'
    >
      {props.children}
    </p>
  );
}
