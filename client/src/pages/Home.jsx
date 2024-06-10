import React, { useEffect, useState, useRef, useContext } from "react";
import Card from "../components/common/Card.jsx";
import CategoryCard from "../components/common/CategoryCard.jsx";
import banner from "../assets/banner-1.png";
import { useDraggable } from "react-use-draggable-scroll";
import axios from "axios";
import RoundedButton from "../components/common/RoundedButton.jsx";
import {
  AdditionalInfoContext,
  AdditionalInfoProvider,
} from "../context/additionalInfoContext.jsx";

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
      <AdditionalInfoProvider>
        <CategorySection />
      </AdditionalInfoProvider>

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
      <AdditionalInfoProvider>
        <BasedOnIngredients />
      </AdditionalInfoProvider>
      <div className="flex w-full justify-center">        <button className="mx-auto mt-4 font-semibold text-primary underline transition-all hover:text-opacity-75 active:scale-95">
          Lihat Bahan Lainya
        </button>
      </div>
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
  const { additionalInfo, loading } = useContext(AdditionalInfoContext);
  const kategori = additionalInfo?.kategori;

  if (loading) {
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
  const { additionalInfo, loading } = useContext(AdditionalInfoContext);
  const bahan = additionalInfo?.bahan;

  if (loading) {
    return (
      <section className="mx-auto mt-2 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
        <RoundedButton btnStroke />
        <RoundedButton btnStroke />
        <RoundedButton btnStroke />
        <RoundedButton btnStroke />
      </section>
    );
  }

  return (
    <section className="mt-3 flex w-full flex-wrap justify-center gap-2">
      {/* Taruh kodingan section 'berdasarkan bahan' disini */}
      {bahan.slice(0, 28).map((item, index) => (
        <RoundedButton btnStroke key={index} name={item} />
      ))}
    </section>
  );
}
