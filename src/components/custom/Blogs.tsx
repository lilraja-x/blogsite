import React from "react";
import CardWithForm from "./Card";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

export default async function Blogs() {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  const data = await response.json();
  console.log(data);

  return (
    <section className=" flex justify-center shadow-lg min-h-screen">
      <div className=" w-11/12 m-4 rounded-sm bg-white">
        <h1 className={`${mont.className} text-center mt-3 font-bold text-3xl`}>
          Our Featured Blogs
        </h1>

        <div className="flex items-center flex-wrap mt-20 justify-center gap-4">
          {data.map((book: any) => {
            return (
              <CardWithForm
                key={book.id}
                title={book.name}
                description={book.type}
                // image={book.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
