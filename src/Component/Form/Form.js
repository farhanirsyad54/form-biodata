import React, { useState } from "react";
import Modal from "../Modal/Modal";
//import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [ava, setAva] = useState("");
  const [openModal, setOpen] = useState(false);

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const jobHandler = (event) => {
    setJob(event.target.value);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const avaHandler = (e) => {
    if (e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      setAva(src);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const closeHandler = (event) => {
    setOpen(false);
  };

  return (
    <>
      {openModal && <Modal onClose={closeHandler} name={name} job={job} phone={phone} email={email} ava={ava} />}

      <div className="body">
        <div className="container">
          <h1>Isikan Biodata Anda!</h1>
          <form className="input" onSubmit={submitHandler}>
            <table className="table">
              <tr>
                <td>Nama</td>
                <td>
                  <input type="text" id="name" name="name" value={name} onChange={nameHandler}></input>
                </td>
              </tr>

              <tr>
                <td>Posisi</td>
                <td>
                  <input type="text" id="job" name="job" value={job} onChange={jobHandler}></input>
                </td>
              </tr>

              <tr>
                <td>Nomor Telepon</td>
                <td>
                  <input type="text" id="phone" name="phone" value={phone} onChange={phoneHandler}></input>
                </td>
              </tr>

              <tr>
                <td>Alamat Email</td>
                <td>
                  <input type="text" id="email" name="email" value={email} onChange={emailHandler}></input>
                </td>
              </tr>

              <tr>
                <td>Unggah Foto</td>
                <td>
                  <input type="file" id="ava" name="ava" onChange={avaHandler}></input>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="submit" className="button" id="button">
                    Buat Kartu Nama
                  </button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
