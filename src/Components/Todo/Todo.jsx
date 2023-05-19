import { useEffect, useRef, useState } from "react";
import "../Todo/Todo.css";
import { BsFillPencilFill, BsFillTrash3Fill, BsCircle } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editTodoId, setEditTodeId] = useState("");
  const inputRef = useRef(null);
  const inputEditRef = useRef(null);
  const todoListRef = useRef(null);
  const [itemLeft, setItemLeft] = useState();

  useEffect(() => {
    const dt = localStorage.getItem("TFR-TODO");
    dt && setTodoList(JSON.parse(localStorage.getItem("TFR-TODO")));
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    let count = todoList.filter((item) => item.isCompleted == false).length;
    setItemLeft(count);
  }, [todoList]);

  const handleAddTodo = () => {
    //const data = localStorage.getItem("TFR-TODO");
    console.log("🚀 ~ file: Todo.jsx:21 ~ handleAddTodo ~ newTodo:", newTodo);
    if (newTodo) {
      const newTd = {
        //id: todoList.length + 1,
        id: Math.random().toString(36).substr(2, 9),
        todo: newTodo,
        isCompleted: false,
      };
      const newTdList = [newTd, ...todoList];
      setTodoList(newTdList);
      localStorage.setItem("TFR-TODO", JSON.stringify(newTdList));
      setNewTodo("");

      todoListRef.current.scrollTo({ top: 0, behavior: "smooth" });

      // const listdiv = document.getElementById("todolist");
      // const lastItem = listdiv.lastChild;
      // lastItem.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("An empty world is impossible!");
    }
    inputRef.current.focus();
  };

  const todoIsCompleted = (id) => {
    const newlist = todoList.map((item) => {
      if (item.id == id) {
        return { ...item, isCompleted: !item.isCompleted };
      } else {
        return { ...item };
      }
    });
    setTodoList(newlist);
    localStorage.setItem("TFR-TODO", JSON.stringify(newlist));
  };

  const todoDelete = (id) => {
    const newlist = todoList.filter((item) => item.id != id);
    setTodoList(newlist);
    localStorage.setItem("TFR-TODO", JSON.stringify(newlist));
  };

  const handleTodoEdit = (id) => {
    setEditTodeId(id);
    const editTodoList = JSON.parse(localStorage.getItem("TFR-TODO"));
    const index = editTodoList.findIndex((obj) => obj.id == id);
    setEditTodo(editTodoList[index].todo);
    setTimeout(() => inputEditRef.current.focus(), 0);
  };

  const updateTodo = () => {
    if (editTodo) {
      const editTodoList = JSON.parse(localStorage.getItem("TFR-TODO"));
      const index = editTodoList.findIndex((obj) => obj.id == editTodoId);
      editTodoList[index].todo = editTodo;
      editTodoList[index].isCompleted = false;
      setTodoList(editTodoList);
      localStorage.setItem("TFR-TODO", JSON.stringify(editTodoList));
      setEditTodeId("");
    } else alert("An empty world is impossible!..");
  };

  const clearCompleted = () => {
    const newList = todoList.filter((item) => item.isCompleted != true);
    setTodoList(newList);
    localStorage.setItem("TFR-TODO", JSON.stringify(newList));
  };

  return (
    <div className="todo-container">
      <div className="main-container">
        <div className="todo">
          <div className="todo-title">
            <p>Todo List</p>
          </div>
          <div className="todo-add">
            <div className="add-input">
              <input
                type="text"
                placeholder="What needs to be done?"
                name="addnew"
                id=""
                ref={inputRef}
                value={newTodo}
                onChange={() => setNewTodo(event.target.value)}
              />
              {newTodo && (
                <span>
                  <IoIosClose
                    className="clear-icon"
                    onClick={() => {
                      setNewTodo("");
                      inputRef.current.focus();
                    }}
                  />
                </span>
              )}
            </div>
            <button onClick={() => handleAddTodo()}>ADD TODO</button>
          </div>
          <div className="todo-list" ref={todoListRef}>
            {todoList?.map((item) => (
              <div key={item.id} className="todo-item">
                {editTodoId != "" && editTodoId === item.id ? (
                  <div className="edit-todo">
                    <div className="edit-input">
                      <input
                        type="text"
                        name=""
                        id=""
                        ref={inputEditRef}
                        value={editTodo}
                        onChange={() => setEditTodo(event.target.value)}
                      />
                      {editTodo && (
                        <span>
                          <IoIosClose
                            className="clear-icon"
                            onClick={() => {
                              setEditTodo("");
                              setTimeout(() => inputEditRef.current.focus(), 0);
                            }}
                          />
                        </span>
                      )}
                    </div>
                    <div className="edit-action">
                      <button onClick={() => updateTodo(item.id)}>Save</button>
                      <button
                        className="btn-cancel"
                        onClick={() => setEditTodeId("")}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      className="todo-name"
                      onClick={() => todoIsCompleted(item.id)}
                    >
                      <span>
                        {!item.isCompleted ? (
                          <BsCircle className="uncheck-icon" />
                        ) : (
                          <AiOutlineCheckCircle className="check-icon" />
                        )}
                      </span>
                      <p
                        className={
                          item.isCompleted
                            ? "item-title item-completed"
                            : "item-title"
                        }
                      >
                        {item.todo}
                      </p>
                    </div>
                    <div className="item-action">
                      <BsFillPencilFill
                        className="action-edit"
                        onClick={() => handleTodoEdit(item.id)}
                      />
                      <BsFillTrash3Fill
                        className="action-delete"
                        onClick={() => todoDelete(item.id)}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="todo-footer">
            <div className="">
              <p>{itemLeft} Item left</p>
            </div>
            <div className="btn-filter">
              <p className="active">All</p>
              <p>Active</p>
              <p>Completed</p>
            </div>
            <div className="">
              <p className="clear-completed" onClick={() => clearCompleted()}>
                Clear Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
