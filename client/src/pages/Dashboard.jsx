import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios";
import Accordion from "../components/layouts/Accordion.jsx";
import Card from "../components/common/Card.jsx";

export default function Dashboard() {
  return (
    <section className="mx-auto my-24 w-full min-w-[360px] max-w-[1080px] px-5 py-1 lg:mx-auto lg:px-0">
      {/* Mobile view */}
      <div className="flex justify-center items-center gap-3 m-3 pt-5 lg:hidden">
        <Accordion />
        <div>
          <p className="text-sm font-medium">Menampilkan hasil pencarian "Resep Makanan Nikmat"</p>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex lg:justify-start lg:items-start lg:gap-3 lg:m-3 lg:pt-5">
        <Accordion />
        <div>
          <p className="text-base font-medium">Menampilkan hasil pencarian "Resep Makanan Nikmat"</p>
          <div className="flex gap-2 mt-2">
            <button className="px-3 py-1 bg-gray-200 rounded-full">Manis</button>
            <button className="px-3 py-1 bg-gray-200 rounded-full">Roti</button>
            <button className="px-3 py-1 bg-gray-200 rounded-full">Tepung Terigu</button>
          </div>
        </div>
      </div>

      <div className="m-5">
        <h1 className="mt-10 font-bold lg:text-lg">Resep Terpopuler</h1>
        <section className="mx-auto mt-2 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
          <Card
            id="11111"
            title="Martabak m"
            image="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/12/14/578376422.jpg"
            time="45 min"
            likes="242"
            creatorName="Harun Buaran"
            creatorImage="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          />
          <Card
            id="3333"
            title="Martabak Manis Cokelat "
            image="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/12/14/578376422.jpg"
            time="30 min"
            likes="134"
            creatorName="Harun Buaran"
            creatorImage="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          />
          <Card
            id="22222"
            title="Martabak Manis Cokelat Dengan Rasa yangg Lebih Nikmat dan Sangar"
            image="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/12/14/578376422.jpg"
            time="60 min"
            likes="421"
            creatorName="Harun Buaran"
            creatorImage="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          />
          <Card
            id="0000111"
            title="Martabak Keju Cokelat Teflon"
            image="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/12/14/578376422.jpg"
            time="15 min"
            likes="312"
            creatorName="Harun Buaran"
            creatorImage="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          />
        </section>
      </div>
    </section>
  );
}
