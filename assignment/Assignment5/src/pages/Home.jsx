import { useState } from "react";
import InputQueue from "../components/inputAntrian";
import { ToastContainer, toast } from "react-toastify";


function Home() {
    const [call, setCall] = useState(null);

    const dataToList = (x) => {
        setCall(x);
        toast.warning(`${x} sudah di dahulukan!`, {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <>
        <ToastContainer/>
            <InputQueue dataToCall={call} dataToList={dataToList} />
        </>
    )
}

export default Home;