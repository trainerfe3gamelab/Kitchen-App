import React, { useState } from "react";
import Card from "../components/common/Card";
import Accordion from "../components/layouts/Accordion";
import { useLocation, useParams } from "react-router-dom";

export default function Search() {
  console.log(searchParams());
  return (
    <main className="mt-24">
      <Accordion />
    </main>
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
