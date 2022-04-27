import React, { useContext } from "react";
import appContext from "../context/app/appContext";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { KEY_NOMADA, API_KEY_TMDB } from "../variables";

const DragyDrop = () => {
  const history = useNavigate();
  const AppContext = useContext(appContext);
  const { infoActor } = AppContext;

  const { Dragger } = Upload;
  var nameActor = "";

  const props = {
    name: "file",
    accept: ".png,.jpg",
    action: "https://whois.nomada.cloud/upload",
    listType: "picture",
    headers: { Nomada: KEY_NOMADA },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        if (info.file.response.actorName) {
          history("/lista-peilculas");
          nameActor = info.file.response.actorName;
          callTheMovieDatabase(nameActor);
        } else {
          message.error(
            `${info.file.name} No se ha encontrado información con esta fotografia.`
          );
        }
      }
      if (status === "error") {
        message.error(`${info.file.name} error al cargar el archivo.`);
      }
    },
  };

  const callTheMovieDatabase = async (actor) => {
    fetch(
      `https://api.themoviedb.org/3/search/person?api_key=${API_KEY_TMDB}&language=es-mx&query=${actor}&page=1&include_adult=false`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return infoActor(response.results);
      });
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Haz click o arrastra una imagen</p>
      <p className="ant-upload-hint">
        Selecciona la foto de un actor famoso para conocer quién es y en qué
        películas ha salido.
      </p>
    </Dragger>
  );
};

export default DragyDrop;
