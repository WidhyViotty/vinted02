import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Publish({ token }) {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [preview, setPreview] = useState(null);
  const [posted, setPosted] = useState(false);

  const navigate = useNavigate();

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
      formData.append("price", price);

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
      console.log(response.data);
      setPosted(true);
    } catch (error) {
      console.log(error.response);
    }
  };
  return token ? (
    <form className="container" onSubmit={handleSubmit}>
      <input
        type="file"
        placeholder="Photo"
        onChange={(event) => {
          console.log(event);
          setPicture(event.target.files);
          setPreview(URL.createObjectURL(event.target.files[0]));
        }}
      />
      <img src={preview} style={{ width: "150px" }} alt="" />
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
  ) : (
    navigate("/login")
  );
}
