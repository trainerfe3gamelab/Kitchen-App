import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Recipe() {
  const { id } = useParams();
  console.log(id);
  return (
    <main className="mt-24">
      <section>Halaman Resep</section>
    </main>
  );
}
