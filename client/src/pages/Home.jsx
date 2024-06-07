import React, { useEffect, useState, useRef } from "react";
import Card from "../components/common/Card.jsx";
import CategoryCard from "../components/common/CategoryCard.jsx";
import banner from "../assets/banner-1.png";
import { additionalInfo } from "../services/getAdditionalInfo.js";
import { useDraggable } from "react-use-draggable-scroll";
import axios from "axios";
import RoundedButton from "../components/common/RoundedButton.jsx";

export default function Home() {
  return (
    <main className="mx-auto my-24 w-full min-w-[360px] max-w-[1080px] px-5 py-1 lg:mx-auto lg:px-0">
      {/* Banner */}
      <section className="mx-auto my-6 w-full">
        <img src={banner} alt="" />
      </section>

      {/* SECTION Terpopuler */}
      <h1 className="mt-10 font-bold lg:text-lg">Resep Terpopuler</h1>
      <PopularSection />

      {/* SECTION Kategori */}
      <h1 className="mt-10 font-bold lg:text-lg">Berdasarkan Kategori</h1>
      <CategorySection />

      {/* SECTION Untuk Kamu */}
      <h1 className="mt-10 font-bold lg:text-lg">Untuk Kamu</h1>
      <ForYouSection />
      <div className="flex w-full justify-center">
        <RoundedButton
          className="mx-auto mt-10"
          btnStroke
          name="Lihat resep menarik lainya"
        />
      </div>

      {/* SECTION Berdasarkan Bahan */}
      <h1 className="mt-10 font-bold lg:text-lg">Berdasarkan Bahan</h1>
      <BasedOnIngredients />
    </main>
  );
}

function PopularSection() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/recipes?popular=true&limit=4");
        setPopular(data.recipes);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopular();
  }, []);
  if (loading || error)
    return (
      <section className="mx-auto mt-2 grid w-full grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
      </section>
    );

  return (
    <section className="mx-auto mt-2 grid w-full grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
      {popular.map((item, index) => (
        <Card
          key={index}
          id={item._id}
          tittle={item.title}
          image={item.image}
          time={item.total_time}
          likes={item.likes}
          creatorName={item.user_id.fullName}
          creatorImage={item.user_id.image}
        />
      ))}
    </section>
  );
}

function CategorySection() {
  const ref = useRef();
  const { events } = useDraggable(ref);
  const [kategori, setKategori] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddInfo = async () => {
      try {
        setLoading(true);
        const data = await additionalInfo();
        setKategori(data.kategori);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAddInfo();
  }, []);

  if (loading || error) {
    return (
      <section
        height={"h-fit"}
        width={"w-full"}
        className="no-scrollbar mt-2 h-fit w-full overflow-x-scroll"
        {...events}
        ref={ref}
      >
        <div className="flex w-full gap-3 whitespace-nowrap">
          <CategoryCard isLoad={true} />
          <CategoryCard isLoad={true} />
          <CategoryCard isLoad={true} />
          <CategoryCard isLoad={true} />
          <CategoryCard isLoad={true} />
          <CategoryCard isLoad={true} />
          <CategoryCard isLoad={true} />
        </div>
      </section>
    );
  }

  return (
    <section
      height={"h-fit"}
      width={"w-full"}
      className="no-scrollbar mt-2 h-fit w-full overflow-x-scroll"
      {...events}
      ref={ref}
    >
      <div className="flex w-full gap-3 whitespace-nowrap">
        {kategori.map((item, index) => (
          <CategoryCard key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </section>
  );
}

function ForYouSection() {
  const [forYou, setForYou] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchPopular = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get("/recipes?popular=true&limit=4");
  //       setForYou(data.recipes);
  //     } catch (error) {
  //       console.error(error);
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPopular();
  // }, []);

  if (error || loading) {
    return (
      <section className="mx-auto mt-2 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
        {/* Taruh kodingan section 'untuk kamu' disini */}
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
      </section>
    );
  }
  return (
    <section className="mx-auto mt-2 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
      {forYou.map((item, index) => (
        <Card
          key={index}
          id={item._id}
          tittle={item.title}
          image={item.image}
          time={item.total_time}
          likes={item.likes}
          // creatorName={item.creator.name}
          // creatorImage={item.creator.image}
        />
      ))}
    </section>
  );
}
function BasedOnIngredients() {
  return (
    <section>
      {/* Taruh kodingan section 'berdasarkan bahan' disini */}
      <div></div>
    </section>
  );
}
