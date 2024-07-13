import { sleep } from "@/lib/utils";
import React from "react";
import TodoContainer from "./components/TodoContainer";
import useTodosController from "./hooks/useTodosController";

const page = async () => {
  return (
    <div>
      <TodoContainer />
    </div>
  );
};

export default page;
