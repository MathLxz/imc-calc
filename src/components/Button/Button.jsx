
import './Button.css';

// eslint-disable-next-line react/prop-types
export default function Button({id, text, action}) {
  const handleAction = (e) =>{
    action(e);  
  }

  return (
    <button id={id} onClick={handleAction}>{text}</button>
  )
}
