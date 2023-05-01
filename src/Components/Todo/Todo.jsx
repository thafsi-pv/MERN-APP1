import { useEffect, useRef, useState } from "react";
import "../Todo/Todo.css";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editTodoId, setEditTodeId] = useState("");
  const inputRef = useRef(null);
  const inputEditRef = useRef(null);
  const todoListRef = useRef(null);

  useEffect(() => {
    const dt = localStorage.getItem("TFR-TODO");
    dt && setTodoList(JSON.parse(localStorage.getItem("TFR-TODO")));
    inputRef.current.focus();
  }, []);

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

const todolist=todoListRef.current.scrollTo({top:0,behavior: 'smooth'});


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

  return (
    <div className="todo-container">
      <div className="todo">
        <div className="todo-title">
          <p>Todo List</p>
        </div>
        <div className="todo-add">
          <div className="add-input">
            <input
              type="text"
              placeholder="New Todo"
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
                  <p
                    onClick={() => todoIsCompleted(item.id)}
                    className={
                      item.isCompleted
                        ? "item-title item-completed"
                        : "item-title"
                    }
                  >
                    {item.todo}
                  </p>
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
      </div>
    </div>
  );
};
