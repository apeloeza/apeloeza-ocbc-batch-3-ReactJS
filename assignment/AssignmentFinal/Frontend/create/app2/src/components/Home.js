import { useEffect, useState } from "react"
import { getAll, postData, delete2Data, updateData} from "../store/action"
import { useSelector, useDispatch } from 'react-redux'
import CardList from "./CardList"
import ModalPost from "./ModalPost"
import ModDetail from "./ModDetail"

function Home() {
    const [key, setKeys] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => dispatch(getAll()), [])
    function post() {
        dispatch(postData(key, first, last))
        setKeys('')
        setFirst('')
        setLast('')
    }
    function update() {
        dispatch(updateData(key, first, last))
        setKeys('')
        setFirst('')
        setLast('')
    }
    function del() {
        dispatch(delete2Data(key, first, last))
        setKeys('')
        setFirst('')
        setLast('')
    }

    return (
        <>

            <form>
                <div>
                    <label>Keys </label>
                    <input
                        type="text"
                        value={key}
                        name="key"
                        onChange={(evt) => setKeys(evt.target.value)}
                        className="form-control"
                        placeholder="Keys"
                    />
                </div>
                <br />
                <div>
                    <label>First Name </label>
                    <input
                        type="text"
                        value={first}
                        name="first"
                        onChange={(evt) => setFirst(evt.target.value)}
                        className="form-control"
                        placeholder="First Name"
                    />
                    <br />
                </div>
                <div>
                    <label>Last Name </label>
                    <input
                        type="text"
                        value={last}
                        name="last"
                        validators={['required']}
                        errorMessages={['this field is required']}
                        onChange={(evt) => setLast(evt.target.value)}
                        className="form-control"
                        placeholder="Last Name"
                    />
                </div>
                <br></br>

                <button
                    disabled={key === '' && first === '' && last === ''}
                    onClick={update}
                >
                    Update
                </button>
                <button color='green'
                    disabled={key === '' && first === '' && last === ''}
                    onClick={post}>
                   Save
                </button>
                <button
                    disabled={key === '' && first === '' && last === ''}
                    onClick={del}>
                   Delete
                </button>
            </form>
            <br />

            <ModalPost />
            <ModDetail modalState={Object.keys(state.userOne).length}/>
            <CardList />

        </>
    )
}

export default Home