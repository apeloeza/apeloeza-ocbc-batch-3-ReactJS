import React from 'react';


function Home() {
    return(
      <>
      <div className='p-5 mb-4 bg-light rounded-3 border'>
        <div className='container-fluid py-5'>
          <h1 className='display-5 fw-bold'></h1>
          <p className='col-md-8 fs-4'>
          pengalaman yang didapat ketika mengikuti bootcamp sangat banyak, diantaranya menjadi wawasan baru dalam belajar sebagai fullstack developer, serta banyaknya praktik yang lumayan mengasah pribadi untuk lebih mengeksplore kembali dari materi yang telah diberikan.
        <br/>
          Tugu tersebut terletak dipertigaan  Jalan Raya Muchtar, Sawangan, Kota Depok, dari arah Parung Bingung menuju Bojongsari, anda akan menemukan sebuah monumen dari batu di persimpangan jalan menuju Jalan Raya Pasir Putih.
        <br/>
          Monumen itu tegak berdiri di pinggir jalan tidak jauh dari pintu gerbang Perumahan Sawangan Permai.
        <br/>
          Itulah Tugu Batu Sawangan.
        <br/>
          Meskipun bentuknya tidak terlalu menyolok, tugu batu ini ternyata menyimpan kenangan yang bersejarah bagi perjalanan bangsa ini.
        <br/>
          Bagaimana tidak, Tugu Batu Sawangan ini merupakan simbol yang mengingatkan perjuangan rakyat Depok melawan penjajahan Belanda.
        <br/>
          "Di sini tentara NICA (Belanda) pada bulan November 1945 pernah dihancurkan oleh TKR para pemuda pejuang berserta rakyat wilayah Sawangan dalam perang kemerdekaan," demikian tulisan di Tugu Batu Sawangan ini.
        </p>
        <button className='btn btn-primary btn-lg' type='button' data-bs-toggle="modal" data-bs-target='#exampleModal'>Click here to show Modal box</button>
        </div>
        </div>
  
    {/*  Modal */}
       <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
          <div className="modal-modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div  className="modal-body">
              This is my first modal box
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save change</button>
              </div>
            </div>
          </div>
         </div>
       </div>
        </>
    );
  }

  export default Home