import React from "react";
import Card from "../components/common/Card.jsx";
import CategoryCard from "../components/common/CategoryCard.jsx";
import banner from "../assets/banner-1.png";
import DragScroll from "react-dragscroll";

export default function Home() {
  const additionalInfo = {
    bahan: JSON.parse(localStorage.getItem("bahan")),
    kategori: JSON.parse(localStorage.getItem("kategori")),
  };

  return (
    <main className="mx-auto mt-24 w-full min-w-[360px] max-w-[1080px] px-5 py-1 lg:mx-auto lg:px-0">
      {/* Banner */}
      <section className="mx-auto my-6 w-full">
        <img src={banner} alt="" />
      </section>

      {/* Terpopuler */}
      <h1 className="mt-10 font-bold lg:text-lg">Resep Terpopuler</h1>
      <section className="mx-auto mt-2 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
        <Card
          id="11111"
          tittle="Martabak m"
          image="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/12/14/578376422.jpg"
          time="45 min"
          likes="242"
          creatorName="Harun Buaran"
          creatorImage="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
        />
        <Card
          id="3333"
          tittle="Martabak Manis Cokelat "
          image="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/12/14/578376422.jpg"
          time="30 min"
          likes="134"
          creatorName="Harun Buaran"
          creatorImage="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
        />
        <Card
          id="22222"
          tittle="Martabak Manis Cokelat Dengan Rasa yangg Lebih Nikmat dan Sangar"
          image="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/12/14/578376422.jpg"
          time="60 min"
          likes="421"
          creatorName="Harun Buaran"
          creatorImage="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
        />
        <Card
          id="0000111"
          tittle="Martabak Keju Cokelat Teflon"
          image="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/12/14/578376422.jpg"
          time="15 min"
          likes="312"
          creatorName="Harun Buaran"
          creatorImage="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
        />
      </section>

      {/* Kategori */}
      <h1 className="mt-10 font-bold lg:text-lg">Berdasarkan Kategori</h1>
      <DragScroll
        height={"h-fit"}
        width={"w-full"}
        className="no-scrollbar mt-2 h-fit w-full"
      >
        <div className="flex w-full gap-3 whitespace-nowrap">
          {additionalInfo.kategori.map((item, index) => (
            <CategoryCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
      </DragScroll>
    </main>
  );
}
