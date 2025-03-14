import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Selamat datang di Website saya</h1>
      <p>Ini adalah halaman utama.</p>
      <Link href={"/about"}>Tentang Kami</Link>
    </div>
  );
}

export default HomePage;