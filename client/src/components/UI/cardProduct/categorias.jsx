import React from "react";
import { Spacer } from "@nextui-org/react";
import './categorias.css';
import imgC from "../../../img/pulsera.jpg";
import imgC2 from "../../../img/are.jpg";
import imgC3 from "../../../img/anillo.jpg";
import imgC4 from "../../../img/cho.jpg";
import imgC5 from "../../../img/del.jpg";

export default function Categorias() {
  return (
    <div className="flex gap-4 items-center justify-center" style={{marginBottom:'30px'}}>
      <a href="todas-las-categorias">
        <figure className="figure relative w-full h-40 sm:w-32 md:w-24">
          <img src={imgC5} alt="Imagen" className="figure__img" />
          <figcaption className="figure__caption texto">
            Todo
          </figcaption>
        </figure>
      </a>
      <a href="pulseras">
        <figure className="figure relative w-full h-40 sm:w-32 md:w-24">
          <img src={imgC} alt="Imagen" className="figure__img" />
          <figcaption className="figure__caption texto">
            Pulseras
          </figcaption>
        </figure>
      </a>
      <a href="aretes">
        <figure className="figure relative w-full h-40 sm:w-32 md:w-24">
          <img src={imgC2} alt="Imagen" className="figure__img" />
          <figcaption className="figure__caption texto">
            Aretes
          </figcaption>
        </figure>
      </a>
      <a href="chockers">
        <figure className="figure relative w-full h-40 sm:w-32 md:w-24">
          <img src={imgC4} alt="Imagen" className="figure__img" />
          <figcaption className="figure__caption texto">
            Chockers
          </figcaption>
        </figure>
      </a>
      <a href="anillos">
        <figure className="figure relative w-full h-40 sm:w-32 md:w-24">
          <img src={imgC3} alt="Imagen" className="figure__img" />
          <figcaption className="figure__caption texto">
            Anillos
          </figcaption>
        </figure>
      </a>
      <Spacer y={8} />
    </div>
  );
}