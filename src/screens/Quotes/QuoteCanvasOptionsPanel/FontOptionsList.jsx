import React from "react";
import "./Quoteoptions.css";
import { useCanvas } from "../CanvasStore";

const FONT_LIST = [
  "Arial",
  "Verdana",
  "Helvetica",
  "Times New Roman",
  "Georgia",
  "Courier New",
  "Trebuchet MS",
  "Impact",
  "Comic Sans MS",
  "Lucida Console",
  "Roboto",
  "Open Sans",
  "Lato",
  "Montserrat",
  "Poppins",
  "Raleway",
  "Nunito",
  "Inter",
  "Source Sans Pro",
  "Ubuntu",
  "Playfair Display",
  "Merriweather",
  "Libre Baskerville",
  "PT Serif",
  "Crimson Text",
  "Oswald",
  "Bebas Neue",
  "Anton",
  "Archivo Black",
  "Fjalla One",
  "Pacifico",
  "Dancing Script",
  "Great Vibes",
  "Lobster",
  "Sacramento",
  "Inconsolata",
  "Fira Code",
  "JetBrains Mono",
  "Space Mono",
  "IBM Plex Mono",
  "Abril Fatface",
  "Alfa Slab One",
  "Cinzel",
  "Cormorant",
  "Playfair",
  "Rubik",
  "Manrope",
  "Karla",
  "Mulish",
  "Heebo",
  "Quicksand",
  "Josefin Sans",
  "Archivo",
  "Catamaran",
  "Work Sans",
  "Arvo",
  "Bitter",
  "Zilla Slab",
  "Vollkorn",
  "Spectral",
  "Caveat",
  "Indie Flower",
  "Shadows Into Light",
  "Patrick Hand",
  "Handlee",
  "DM Sans",
  "Plus Jakarta Sans",
  "Red Hat Display",
  "Urbanist",
  "Sora",
  "Teko",
  "Yanone Kaffeesatz",
  "Exo",
  "Titillium Web",
  "Asap",
];

export default function FontOptionsList() {
  const { updateCanvas } = useCanvas();
  return (
    <div className="font-options-list">
      {FONT_LIST.map((font) => (
        <div
          key={font}
          className="font-option-tile"
          style={{ fontFamily: font }}
          onClick={() => updateCanvas({ fontFamily: font })}
        >
          <div className="font-name">{font}</div>
          <div className="font-preview">
            The quick brown fox jumps over the lazy dog
          </div>
        </div>
      ))}
    </div>
  );
}
