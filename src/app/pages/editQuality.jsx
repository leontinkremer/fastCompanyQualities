import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/ui/editForm";
import qualityService from "../services/quality.service";

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null);
  // const [errors, setErrors] = useState(null);
  const id = useParams().id;

  const updateQuality = async (content) => {
    try {
      const data = await qualityService.update(id, content);
      return data.content;
    } catch (error) {
      console.log("errorski", error);
      // const { message } = error.response.data;
      // setErrors({ message, code });
    }
  };

  const getQuality = async (id) => {
    try {
      const data = await qualityService.get(id);
      // console.log("data", data);
      return data.content;
    } catch (error) {
      const { message } = error.response.data;
      console.log("Expected Error");
    }
  };

  useEffect(() => {
    getQuality(id).then((data) => setQuality(data));
  }, []);
  // Verwende die get-Methode deines http-Services um eine Request zu machen und anschließend diese Daten zu verarbeiten.
  const handleSubmit = (data) => {
    updateQuality(data);
  };

  return (
    <>
      <h1>Edit Quality Page</h1>{" "}
      {quality !== null ? (
        <EditForm data={quality} onSubmit={handleSubmit} />
      ) : (
        "Loading"
      )}
    </>
  );
};

export default EditQualityPage;
