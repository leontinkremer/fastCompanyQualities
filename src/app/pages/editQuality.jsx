import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/ui/editForm";
// editQuality.jsx
import httpService from "../services/http.service";
import configData from "../services/configData.json";

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null);
  const id = useParams().id;
  const qualityEndpoint = configData.SERVER_URL + `quality/${id}`;

  const getQuality = async (id) => {
    try {
      const { data } = await httpService.get(qualityEndpoint);
      return data;
    } catch (error) {
      console.log("Expected Error");
    }
  };

  const updateQuality = async (data) => {
    try {
      const data = await httpService.put(qualityEndpoint, data);
      return data;
    } catch (error) {}
  };

  useEffect(() => {
    getQuality(id).then((data) => data && setQuality(data.content));
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
