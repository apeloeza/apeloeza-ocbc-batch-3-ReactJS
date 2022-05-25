import swal from 'sweetalert'
const base_url = "http://localhost:5000";

export function getAll(){
    return (dispatch) =>{
        fetch(`${base_url}/debug`)
        .then((response) => response.json())
        .then((data) => dispatch({
            type:'GET_ALL',
            payload: data
        }))
    }
}
export function getWan(keys){
    const request = {
        method:'GET',
        headers: { 'Content-Type': 'application/json'},
    }
    return (dispatch) =>{
        console.log(keys)
        fetch(`${base_url}/keys/`+keys, request)
        .then((response) => response.json())
        .then((data) => dispatch({
            type:'GET_WAN',
            payload: data
        }))
    }
}

export function postData(keys, first, last){
    const request = {
        method:'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            key: keys,
            firstName: first,
            lastName: last
        })
    }
    return (dispatch) =>{
        fetch(`${base_url}/keys`, request)
        .then((response) => {
            if(response.status === 400){
                swal("ERROR", "Key is already exist", "error")
            }
            else if(response.status === 201){
                swal("POST Success", "Successful POST", "success")
            }
        })
        .then(() => dispatch(getAll()))
    }
}

export function updateData(keys, first, last){
    const request = {
        method:'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            key: keys,
            firstName: first,
            lastName: last
        })
    }
    return (dispatch) =>{
        fetch(`${base_url}/keys/`+keys, request)
        .then((response) => {
            if(response.status === 400){
                swal("ERROR", "Key doesn't exist", "error")
            }
            else if(response.status === 200){
                swal("UPDATE Success", "Successful UPDATE", "success")
            }
        })
        .then(() => dispatch(getAll()))
    }
}

export function deleteData(keys){
    const request = {
        method:'DELETE',
        headers: { 'Content-Type': 'application/json'},
    }
    return (dispatch) =>{
        fetch(`${base_url}/keys/`+keys, request)
        .then((response) => {
            if(response.status === 200){
                swal("DELETE Success", "Successful DELETE", "success")
            }
        })
        .then(() => dispatch(getAll()))
    }
}

export function delete2Data(keys, first, last){
    const request = {
        method:'DELETE',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            key: keys,
            firstName: first,
            lastName: last
        })
    }
    return (dispatch) =>{
        fetch(`${base_url}/keys/`+keys, request)
        .then((response) => {
            if(response.status === 200){
                swal("DELETE Success", "Successful DELETE", "success")
            }
        })
        .then(() => dispatch(getAll()))
    }
}