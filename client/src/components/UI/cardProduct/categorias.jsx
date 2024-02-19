import React from "react";
import { Avatar } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";

export default function Categorias({ imgC }) {
  return (
    <div className="flex gap-4 items-center justify-center">
      <a href="todas-las-categorias">
        <figure className="relative w-40 h-40 sm:w-32 md:w-24">
          <img src={imgC} alt="Imagen" className="w-full h-full object-cover" />
          <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            Todo
          </figcaption>
        </figure>
      </a>
      <a href="pulseras">
        <figure className="relative w-40 h-40 sm:w-32 md:w-24">
          <img src={imgC} alt="Imagen" className="w-full h-full object-cover" />
          <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            Pulseras
          </figcaption>
        </figure>
      </a>
      <a href="aretes">
        <figure className="relative w-40 h-40 sm:w-32 md:w-24">
          <img src={imgC} alt="Imagen" className="w-full h-full object-cover" />
          <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            Aretas
          </figcaption>
        </figure>
      </a>
      <a href="chockers">
        <figure className="relative w-40 h-40 sm:w-32 md:w-24">
          <img src={imgC} alt="Imagen" className="w-full h-full object-cover" />
          <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            Chockers
          </figcaption>
        </figure>
      </a>
      <a href="anillos">
        <figure className="relative w-40 h-40 sm:w-32 md:w-24">
          <img src={imgC} alt="Imagen" className="w-full h-full object-cover" />
          <figcaption className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            Anillos
          </figcaption>
        </figure>
      </a>
      <Spacer y={8} />
    </div>
  );
}