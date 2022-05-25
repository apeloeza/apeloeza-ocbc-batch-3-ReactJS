import React, { useEffect, useRef, useState } from 'react';

const Person = (props) => {
// * top level
const [name, setNamme] = useState("")

useEffect(()=>{
        // * componentDidMount() -> component sudah dibuat/di-render
        //  componentDidUpdate() -> adanya perubahan pada component
        setTimeout(() =>{
            setNamme(props.name)// akan menjalankan effect
        }, 2000)
        
        // ? componentWilUnnount() -> component akan dihancurkan
        // ? return -> sebagai cleanup 

        return () => {
            console.log("anda berhasil enghancurkan komponent!!")
        }
    },
    // * shouldComponentUpdate()
    // kosong -> useEffect() akan berjalan selalu, setiap kali terjadi perubahan
    //[]    -> memaksa useEffect() untuk menjalankannya sekali saja
     // * [variable] -> useEffect() akan dijalankan setiap kali "variable" berubah
    Object.value(props)
)

// useEffect ke 2 --> ubah warna background secara random
const [red, setRed] = useState(255)
const [green, setGreen] = useState(255)
const [blue, setBlue] = useState(255)

useEffect(()=> {
    // ubah warnanya berdasarkan angka random
    setRed(Math.random() * 255)
    setGreen(Math.random() * 255)
    setBlue(Math.random() * 255)
})

    return (
        <div style={{backgroundColor: `rgb(${red},${green},${blue})` }}>
        <h2>Hallo nama saya adalah {name}</h2>
        <h3>Saya bekerja sebagai {props.job}</h3>

        {
            users.map ( user =>{
                return (
                    <div key={user.id}>
                        <span>Name: {user.name}</span><br/>
                        <span>Username: {user.username}</span><br/>
                        <span>Email: {user.email}</span><br/>
                    </div>
                )
            })

        }
        <button onClick={() => changeName("Arif")}>Ganti Nama!</button>
        </div>
    );
}

export default Person;
