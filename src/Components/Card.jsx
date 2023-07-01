import React from "react";

const getTodosFromStorage = () => {
  const localData = localStorage.getItem("todos");
  return localData ? JSON.parse(localData) : [];
};

const saveTodosFromStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
