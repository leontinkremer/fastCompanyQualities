import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import QualitiesTable from "../components/ui/qualitiesTable";
import axios from "axios";

const QualitiesListPage = () => {
  const [qualities, setQualitites] = useState([]);

  const history = useHistory();
  useEffect(async () => {
    const { data } = await axios.get("quality");
    console.log("data", data);
    data && setQualitites(data.content);
  }, []);

  const handleEdit = (param) => {
    history.push(`/edit/${param}`);
  };
  const handleDelete = (param) => {};
  return (
    <>
      <h1>Qualitites List Page</h1>
      <QualitiesTable
        onDelete={handleDelete}
        onEdit={handleEdit}
        data={qualities}
      />
    </>
  );
};

export default QualitiesListPage;
