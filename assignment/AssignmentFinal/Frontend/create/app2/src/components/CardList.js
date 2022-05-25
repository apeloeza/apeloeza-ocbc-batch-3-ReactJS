import { useEffect, useState } from "react"
import { getAll, deleteData, getWan } from "../store/action"
import { useSelector, useDispatch } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Icon, Table, Menu } from "semantic-ui-react";


function CardList() {
  const [setKeys] = useState('')
  const [setFirst] = useState('')
  const [setLast] = useState('')
  
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => dispatch(getAll()), )
  useEffect(() => {
    console.log(state.userOne)
    if (Object.keys(state.userOne).length > 0) {
      setKeys(state.userOne.keys)
      setFirst(state.userOne.fisrt)
      setLast(state.userOne.last)
    }
  },[state.userOne])
  function getTok(keys) {
    dispatch(getWan(keys));
  }

  function del(keysd) {
    dispatch(deleteData(keysd))
  }

  return (
    <Card.Group >
      {Object.keys(state.user).map(index => (
        <Card key={index}>
          <Card.Content>

           <Button animated='vertical' onClick={() => getTok(state.user[index].key)}>
              <Button.Content hidden>Detail</Button.Content>
              <Button.Content visible>
                <Icon name='clone' />
              </Button.Content>
            </Button>
            <Card.Header>{state.user[index].lastName}</Card.Header>

            <Card.Description>
              <p>
              <strong> Full Name: </strong>{state.user[index].firstName} {state.user[index].lastName} 
              </p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='blue' >
                Update
              </Button>
              <Button basic color='red' onClick={(() => { del(state.user[index].key) })}>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      ))
      }
    </Card.Group>
    



  )
}
export default CardList