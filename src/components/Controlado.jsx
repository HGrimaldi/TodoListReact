import React, { useState } from "react";


const Controlado = () => {
    const [todo, setTodo] = useState({
        todoNombre: "Tarea 1",
        todoDescripcion: "Tarea realizda de ...",
        todoEstado: "completado",
    });

    
    const TodoF = JSON.parse(localStorage.getItem("TodoF")) || []

    const [tarea, setTareas] = useState([]);


    // Formulario controlado
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
        TodoF.push(todo);
        setTareas(TodoF);
        localStorage.setItem('TodoF', JSON.stringify(TodoF));
    };

    const handleOnChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
         //setTodo({ ...todo, [e.target.name]: e.target.value });
        // utilizando el callback
        setTodo((todo) => ({
            ...todo,
            [e.target.name]: e.target.value,
        }));
    };

    const handleDelete = index => {
        const reduce = [...TodoF];
        reduce.splice(index);
        localStorage.setItem('TodoF', JSON.stringify(reduce));
        setTodo(reduce);
    };

      
    
    return (
        <div className="col-sm-6">
            <h2 className="text-info">Todo list</h2>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoNombre"
                    value={todo.todoNombre}
                    onChange={handleOnChange}
                />
                <textarea
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoDescripcion"
                    value={todo.todoDescripcion}
                    onChange={handleOnChange}
                />
                <select
                    className="form-select mb-2"
                    name="todoEstado"
                    value={todo.todoEstado}
                    onChange={handleOnChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button
                    className="btn btn-info"
                    type="submit"
                >
                    Agregar
                </button>
               
            </form>
            <hr />
            <br />
            <table className="table table-hover">
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Descripcion</th>
            <th>Estado</th>
            <th></th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
        {TodoF.map((todo, index) => (
            <tr key={index}>
              <td>{todo.todoNombre}</td>
              <td>{todo.todoDescripcion}</td>
              <td>{todo.todoEstado}</td>
              <td></td>
              <td>
                <button   className="btn btn-danger m-3"  onClick={() => handleDelete(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default Controlado;

