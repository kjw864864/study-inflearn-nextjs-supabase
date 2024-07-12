"use client";
import {
  getTodos,
  getTodosById,
  getTodosBySearch,
  createTodos,
  deleteTodosSoft,
  updateTodos,
} from "@/apis/totos-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    getTodos();
  }, []);
  return <div>TodoContainer</div>;
};

export default TodoContainer;
