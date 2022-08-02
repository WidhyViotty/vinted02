import "./Publish.css";
import axios from "axios";
import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Publish({ token }) {
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [preview] = useState(null);
  // const [setPosted] = useState(false);

  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price.toString());

      console.log(formData);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data, "bababababa");

      if ((response.data._id, "bibibibi")) {
        navigate(`/offer/${response.data._id}`);
      }
    } catch (error) {
      console.log(error, "bobobobo");
    }
  };
  return token ? (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Vends ton article</h1>
      <input
        className="photo"
        type="file"
        placeholder="Photo"
        accept=".jpeg"
        ref={inputRef}
        // value={picture}
        onChange={(event) => {
          // console.log(event);
          setPicture(event.target.files[0]);
          // setPreview(URL.createObjectURL(event.target.files[0]));
        }}
      />
      <img src={preview} style={{ width: "150px" }} alt="" />
      <br />
      <input
        className="titre"
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <input
        className="description"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />
      <input
        className="marque"
        type="text"
        placeholder="Marque"
        value={brand}
        onChange={(event) => setBrand(event.target.value)}
      />
      <br />
      <input
        className="taille"
        type="text"
        placeholder="Taille"
        value={size}
        onChange={(event) => setSize(event.target.value)}
      />
      <br />
      <input
        className="couleur"
        type="text"
        placeholder="Couleur"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <br />
      <input
        className="etat"
        type="text"
        placeholder="Etat"
        value={condition}
        onChange={(event) => setCondition(event.target.value)}
      />
      <br />
      <input
        className="lieu"
        type="text"
        placeholder="Lieu"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <br />
      <span className="title-prix">Prix</span>
      <input
        className="prix"
        type="number"
        placeholder="Prix"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <br />
      <button
        className="vendre"
        type="submit"
        placeholder="Ajouter"
        onClick={handleSubmit}
      >
        Ajouter
      </button>
    </form>
  ) : (
    <Navigate to="/login" />
  );
}
