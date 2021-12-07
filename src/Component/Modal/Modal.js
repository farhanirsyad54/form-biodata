import react from "react";
import Card from "../Card/Card";
import "../Modal/Modal.css";

const Modal = (props) => {
  return (
    <>
      <div className="background" onClick={props.onClose}>
        <div className="modalA">
          <Card ava={props.ava} name={props.name} job={props.job} phone={props.phone} email={props.email} />
        </div>
      </div>
    </>
  );
};

export default Modal;
