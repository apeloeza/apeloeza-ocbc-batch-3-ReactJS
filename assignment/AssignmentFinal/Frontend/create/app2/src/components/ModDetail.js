import { useDispatch, useSelector } from 'react-redux'
import { Header, Modal, } from 'semantic-ui-react'

export default function ModDetail(props) {
    const { userOne } = useSelector(state => state)
    const dispatch = useDispatch()
    const { modalState } = props
    return (
        <Modal
            onClose={() => dispatch({
                type: 'EMPTY_ONE'
            })}

            open={modalState}
        >
            <Modal.Header>
                Detail
            </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>{userOne.firstName} {userOne.lastName}</Header>
                    <p>Key: {userOne.key}</p>
                    <p> First Name: {userOne.firstName}</p>
                    <p> Last Name:  {userOne.lastName}</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}