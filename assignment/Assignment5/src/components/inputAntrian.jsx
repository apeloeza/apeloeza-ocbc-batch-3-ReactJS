import { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import ListQueue from './listAntrian';


function InputQueue({dataToList, dataToCall}) {
  const [queue, setQueue] = useState([]);
  const [data, setData] = useState("");
  const [show, setShow] = useState(true);

  const submitHandler = (ev) => {
    ev.preventDefault();
    queue.unshift(data);
    setQueue([...queue]);
    setData("");
    toast.success(`Submit ${data} Success!`, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  };

  const changeHandler = (ev) => {
    ev.preventDefault();
    setData(String(ev.target.value));
  };

  const hiddenHandler = (x) => {
    if (x.length === 0 || x === undefined) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    hiddenHandler(queue);
  }, [queue, dataToCall]);

  return (
    <div className="py-3 px-md-5">
      <ToastContainer/>
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3 m-5 mt-2">
            <Form.Label>Masukan Nama</Form.Label>
            <Form.Control
              onChange={changeHandler}
              type="text"
              value={data}
              placeholder="Input Nama"
              required={true}
            />
          </Form.Group>
          <Button type="submit" className='btn btn-primary'>
            Antrikan
          </Button>
          <Button className='btn btn-primary mx-2' onClick={() => { dataToList(queue.pop()); }}>
            Dahulukan
          </Button>
        </Form>
        </Container>

        {show ? <ListQueue listData={queue} /> : <></>}
      
    </div>
  )


}

export default InputQueue;