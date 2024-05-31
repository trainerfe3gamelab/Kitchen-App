import React from 'react'

export default function Home() {
    return (
        <main>
           <section id='home' className='hero'>
                <div id='background'>
                    <div className='content-hero'>
                        <img src="../src/assets/Hero.png" alt="Hero-Image" />
                        <h1>Temukan berbagai resep makanan dengan Kitchen Craft, teman dapur serba bisa anda.</h1>
                    </div>
                    <div className='right'>
                        <img src="../src/assets/LOGO.png" alt="Hero-Logo" />
                    </div>
                </div>
            </section>
            <div id='div-resep-terpopuler'>
                <h2>Resep Terpopuler</h2>
                <div className='list-porduct' id='listprod-resep'> </div>
            </div>
            <div id='div-berdasarkan-kategori'>
                <h2>Berdasarkan Kategori</h2>
                <div className='list-porduct' id='listprod-kategori'> </div>   
            </div>
            <div id='div-untuk-kamu'>
                <h2>Untuk Kamu</h2>
                <div className='list-porduct' id='listprod-kamu'> </div>
                <button className='btn-lihat-resep' href=''>Lihat Resep Menarik Lainnya</button>
            </div>
            <div id='div-bedasarkan-bahan'>
                <h2>Berdasarkan Bahan</h2>
                <div className='list-bahan'> </div>
            </div>      
                <a className='cta-lihat-bahan' href="">Lihat Bahan Lainnya</a>
        </main>
    )
}
