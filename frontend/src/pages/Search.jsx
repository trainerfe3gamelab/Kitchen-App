import React, { useState, useContext, useEffect } from "react";
import Card from "../components/common/Card";
import Accordion from "../components/layouts/Accordion";
import { Icon } from "@iconify/react";
import { useLocation, useParams } from "react-router-dom";
import { Sidebar, Checkbox, Label } from "flowbite-react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  AdditionalInfoContext,
  AdditionalInfoProvider,
} from "../context/additionalInfoContext";
import InputWbtn from "../components/common/InputWbtn";

export default function Search() {
  console.log(searchParams());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="mx-auto my-24 flex w-full min-w-[360px] max-w-[1080px] gap-5 px-5 py-1 lg:mx-auto lg:px-0">
      <AdditionalInfoProvider>
        <SidebarFilter />
      </AdditionalInfoProvider>
      <section className="mt-4 w-full">
        <header className="mb-6 flex flex-col gap-4">
          <h1 className="line-clamp-1 w-full font-medium text-primary">
            {`Menampilkan Hasil Pencarian "${searchParams().recipe ? searchParams().recipe : "All"}"`}
          </h1>
          <div className="flex flex-wrap gap-2">
            {searchParams().category?.length > 0 &&
              searchParams().category.map((category, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full border border-gray-400 bg-bg px-3 py-1 text-xs font-medium text-primary"
                >
                  {category}
                </span>
              ))}
            {searchParams().ingredients?.length > 0 &&
              searchParams().ingredients.map((ingredients, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full border border-gray-400 bg-bg px-3 py-1 text-xs font-medium text-primary"
                >
                  {ingredients}
                </span>
              ))}
          </div>
        </header>
        <ResultSearch />
      </section>
    </main>
  );
}

function ResultSearch() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log(popular);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/recipes?limit=12");
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
      <div className="mx-auto mt-2 grid w-full grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3">
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
        <Card isLoad />
      </div>
    );

  return (
    <div className="mx-auto mt-2 grid w-full grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3">
      {popular.map((item, index) => (
        <Card
          key={index}
          id={item._id}
          tittle={item.title}
          image={item.image}
          time={item.total_time}
          likes={item.likes}
          creatorName={item.user?.fullName || item.user_id?.fullName}
          creatorImage={item.user?.image || item.user_id?.image}
        />
      ))}
    </div>
  );
}

function SidebarFilter() {
  const params = searchParams();
  const navigate = useNavigate();
  const { additionalInfo } = useContext(AdditionalInfoContext);
  const [filter, setFilter] = useState({
    category: params.category,
    ingredients: params.ingredients,
  });
  console.log(filter);
  const [checkedCategories, setCheckedCategories] = useState(
    additionalInfo?.kategori?.reduce((acc, category) => {
      acc[category.title] = false;
      return acc;
    }, {}),
  );
  useEffect(() => {
    filter.category.map((category) => {
      setCheckedCategories((prevCheckedCategories) => ({
        ...prevCheckedCategories,
        [category]: true,
      }));
    });
  }, [filter]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedCategories((prevCheckedCategories) => ({
      ...prevCheckedCategories,
      [name]: checked,
    }));
  };

  const getCheckedCategories = () => {
    if (!checkedCategories) return [];
    return Object.keys(checkedCategories).filter(
      (category) => checkedCategories[category],
    );
  };

  const handleBahan = (bahan) => [
    setFilter((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, bahan],
    })),
  ];
  const handleRemoveBahan = (bahan) => {
    setFilter((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((item) => item !== bahan),
    }));
  };

  const terapkanFilter = () => {
    setFilter((prev) => ({
      ...prev,
      category: getCheckedCategories(),
    }));
    // console.log(filter);
    const query = {
      recipe: encodeURIComponent(params.recipe),
      category: encodeURIComponent(getCheckedCategories().join(",")),
      ingredients: encodeURIComponent(filter.ingredients.join(",")),
      page: 1,
    };
    navigate(
      `/search?recipe=${query.recipe}&category=${query.category}&ingredients=${query.ingredients}&page=${query.page}`,
    );
  };

  return (
    <>
      <Sidebar
        aria-label="sidebar-filter"
        className="mt-4 max-w-[255px] rounded-lg border border-gray-300 bg-gray-100 shadow"
      >
        <Sidebar.Items>
          {/* Filter Header */}
          <Sidebar.ItemGroup className="m-0 border-none p-0">
            <Sidebar.Item className="justify-start">
              <div className="flex items-center gap-2">
                <Icon className="text-primary" icon="uil:filter" width={22} />
                <h1 className="font-semibold">Filter</h1>
              </div>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <hr className="my-2 border border-gray-300" />
          {/* Filter Berdasarkan Kategori */}
          <Sidebar.ItemGroup className="m-0 border-none p-0">
            <Sidebar.Collapse
              className="gap-4 font-medium hover:bg-gray-200"
              label="Berdasarkan Kategori"
            >
              {additionalInfo?.kategori.map((kat, i) => (
                <Sidebar.Item key={i} className="ml-2 justify-start">
                  <div key={i} className="flex items-center gap-2">
                    <Checkbox
                      id={`kat-${i}`}
                      name={kat.title}
                      checked={
                        checkedCategories ? checkedCategories[kat.title] : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <Label htmlFor={`kat-${i}`}>{kat.title}</Label>
                  </div>
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
          <hr className="my-1 border border-gray-200" />
          {/* Filter Berdasarkan Bahan */}
          <Sidebar.ItemGroup className="m-0 border-none p-0">
            <Sidebar.Item className="justify-start">
              <div className="flex flex-col gap-4">
                <h1 className="font-medium">Berdasarkan Bahan</h1>
                <Autocomplete
                  data={additionalInfo?.bahan || []}
                  onDone={(value) => handleBahan(value)}
                />
                <div className="flex flex-col gap-2">
                  {filter.ingredients.map((bahan, i) => (
                    <div
                      key={i}
                      className="flex justify-between gap-2 border px-2 py-1"
                    >
                      <h1 className="line-clamp-1 max-w-full">{bahan}</h1>
                      <button onClick={() => handleRemoveBahan(bahan)}>
                        <Icon icon="iconoir:cancel" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <hr className="my-2 border border-gray-200" />
          {/* Button Terapkan */}
          <Sidebar.ItemGroup className="m-0 border-none p-0">
            <Sidebar.Item>
              <button
                className="rounded-full border border-gray-300 bg-primary px-4 py-2 text-bg shadow-sm hover:bg-opacity-90 active:scale-95"
                onClick={() => terapkanFilter()}
              >
                Terapkan
              </button>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}

function Autocomplete({ data, onDone }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (value) => {
    // const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filteredSuggestions = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      );
      setSuggestions(filteredSuggestions.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  const handleDone = () => {
    if (!inputValue) {
      toast.error("Masukan bahan terlebih dahulu");
      return;
    }
    onDone(inputValue);
    setInputValue("");
  };

  return (
    <div className="relative">
      <InputWbtn
        type="text"
        iconify="entypo:check"
        value={inputValue}
        onChange={(value) => handleChange(value)}
        placeholder="Pilih bahan..."
        onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
        onClick={(value) => handleDone()}
        required
      />
      {showSuggestions && (
        <ul className="absolute z-50 mt-2 w-full list-none overflow-hidden rounded-lg bg-bg shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="cursor-pointer border p-2 hover:bg-gray-200"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function searchParams() {
  const urlSearchParams = new URLSearchParams(useLocation().search);
  const category = urlSearchParams.get("category");
  const ingredients = urlSearchParams.get("ingredients");
  const search = {
    recipe: urlSearchParams.get("recipe"),
    category: category ? category.split(",") : [],
    ingredients: ingredients ? ingredients.split(",") : [],
    page: urlSearchParams.get("page"),
  };
  return search;
}
