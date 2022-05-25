
// keuntungannya

/**
 * ? External Object variable CSS
 * * keuntungannya
 * * 1. kita nggak perlu set style yang sama di beberapa komponent yang berbeda
 * * 2. kita bisa ambil value yangb saa dari 1 fariabel kedalam variabel yang baru, untuk menggunakan style sejenis
 * 
 * ! kekurangannya
 * ! 1. kita tidak punya fitur auto-complete, dan akan diangap sebagai objek biasa
 */

import { cardStyle, largeCardStyle } from "./Card.style.js";
/**
 * sintaks di dalam css dengan style di react
 * * css --> snake case (border-radius)
 * ? react --> camelCase (borderradius)
 */

const CardExternalStyle = () => {
    return(
        <>
        <div style={cardStyle}>
            <h2>ini adalah judul
            </h2>
            <p>ini adalah kontent sederhana dari card biasa pada objek. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cupiditate quis quisquam voluptates. Tenetur necessitatibus tempore maiores fugiat iure corporis quos mollitia recusandae, iste, explicabo exercitationem sunt laboriosam dignissimos blanditiis.</p>
        </div>
        <div style={largeCardStyle}>
            <h2>ini adalah judul
            </h2>
            <p>ini adalah kontent sederhana. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cupiditate quis quisquam voluptates. Tenetur necessitatibus tempore maiores fugiat iure corporis quos mollitia recusandae, iste, explicabo exercitationem sunt laboriosam dignissimos blanditiis.</p>
        </div>
        </>
    )
}

export default CardExternalStyle;