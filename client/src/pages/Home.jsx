import React from "react";
import RoundedButton from "../components/common/RoundedButton.jsx";
import Logo from "/kitchen-craft-logo.svg";
import Banner from "/BannerM.svg";
import Card from "../components/Card/Card.jsx"
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (

    <>

      <div className=" m-4 bg-white grid place-content-center">
        <img src={Banner} alt="" className="mx-auto w-[550px]" /> 

      </div>
      <h3 className="text-left text-black ml-5 font-semibold mb-2 text-2xl">Rekomendasi Resep</h3>
      <div className="flex max-w-full justify-center flex-wrap items-center gap-3">
        <Card className="w-full mx-auto mb-4">
          <Card.title>
            <p>Masakan</p>
          </Card.title>
          <Card.Body>
            <img src={Logo} alt="" className="mx-auto" />
          </Card.Body>
          <Card.footer className="flex flex-col items-center">
            <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, necessitatibus.</p>
            <RoundedButton name="Lihat Resep" />
          </Card.footer>
        </Card>
        <Card className="w-full mx-auto mb-4">
          <Card.title>
            <p>Masakan</p>
          </Card.title>
          <Card.Body>
            <img src={Logo} alt="" className="mx-auto " />
          </Card.Body>
          <Card.footer className="flex flex-col items-center">
            <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, necessitatibus.</p>
            <RoundedButton name="Lihat Resep" />
          </Card.footer>
        </Card>
      </div>

      <Footer/>
    </>


  )


}
