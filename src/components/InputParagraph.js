export default function InputParagraph(props) {
  return (
    <p
      className='input-paragraph'
      tabIndex='0'
    >
      {props.children}
    </p>
  );
}
