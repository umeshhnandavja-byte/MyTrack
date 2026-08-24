import { useState } from "react";

export function useDeleteVar() {
  const [deleteTask, setDelete] = useState(false);

  const toggleDelete = () => {
    setDelete(!deleteTask);
  };

  return [deleteTask, setDelete, toggleDelete] as const;
}