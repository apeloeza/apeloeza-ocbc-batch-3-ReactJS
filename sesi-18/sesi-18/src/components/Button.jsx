import {Component} from 'react'

// penulisan harus pascalcode
class Button extends Component{
    constructor(props){
        super(props);

        // bind() kita "ikat" sebuah function (tradisional) dengan konteks thsi dari sebuah objek lain

        // this.setTitle.bind(this)

        // mendefiniikan state
        // this state
        this.state={
            title: this.props.title ||'Devault Value'
        };
    }

    componentDidMount() {
        console.log("Component pertama kali dibuat")
        alert ("component berhasil dibuat !!!!!");
    }

    // * shouldComponentUpdate akan bertidak sebagai credential
    // * sebelum component di render ulang
    shouldComponentUpdate() {
        

        // ? jika di return true, maka component akan di render ulang
        // ? selebihnya tidak akan di render ulang
        return false;
    }

    componentDidUpdate() {
        console.log("comonentDidUpdate() => Component berhasil diubah")
        alert ("anda berhasil mengklik sebuah tombol !!!!!");
    }

    componentWillUnmount() {
        alert ("anda berhasil menghancurkan compnen ini !!");
    }



    

    getTitle(){
        let formattedTitle = this.state.title
        return formattedTitle.toLowerCase()
    }

    // action ini harus menggunakan arrow function
    // action untuk mengubah 
    setTitle = () => {
        // this.setState -> mengirimkan data ke dalam store dalam komponent
        //    kemudian mengubah data pada state tersebut
        this.setState({
            title: "Selamat Datang!"
        })
    }

    // akan digunakan untuk menampilkan html
    render() {
        return (
            <>
            <h1>{this.getTitle()}</h1>

            <button onClick={this.setTitle.bind(this)}>Ganti Judul</button>
            </>
        )
    }
}


