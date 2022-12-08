import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import QualitiesTable from "../components/ui/qualitiesTable";
import axios from "axios";
import qualityService from "../services/quality.service";

const QualitiesListPage = () => {
  const [qualities, setQualitites] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    qualityService.fetchAll().then((data) => setQualitites(data.content));
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
