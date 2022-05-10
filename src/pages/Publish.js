import { useState } from "react";

export default function Publish() {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState();

  //   const [preview, setPreview] = useState(null);

  return (
    <form className="container">
      <input
        type="file"
        placeholder="Photo"
        value={picture}
        onChange={(event) => {
          console.log(event);
          setPicture(event.target.files);
        }}
      />
      {/* <img src={preview} alt="" /> */}
      <br />
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Marque"
        value={brand}
        onChange={(event) => setBrand(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Taille"
        value={size}
        onChange={(event) => setSize(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Couleur"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Etat"
        value={condition}
        onChange={(event) => setCondition(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Lieu"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Prix"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <br />
      <input type="submit" placeholder="Ajouter" />
    </form>
  );
}
