import { useDarkMode } from "@/context/DarkModeContext";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";

type FormSearchProps = {
  setName: Dispatch<SetStateAction<string>>;
  name: string;
};

export const FormSearch = ({ setName, name }: FormSearchProps) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { darkMode } = useDarkMode();

  const handleFilter = (data: any) => {
    setName(data.name);
  };

  const handleResetForm = () => {
    setName("");
    reset();
  };

  useEffect(() => {
    setValue("name", name);
  }, [name]);
  return (
    <form
      className="flex base:flex-col md:flex-row gap-4"
      onSubmit={handleSubmit(handleFilter)}
    >
      <input
        type="text"
        className={`text-yellow-800 p-2 rounded w-full ${
          !darkMode ? "bg-white" : "bg-stone-700 placeholder:text-stone-400"
        }`}
        placeholder="Buscar pelo nome"
        {...register("name")}
      />
      <button
        type="submit"
        className={`${
          !darkMode
            ? "bg-white  text-yellow-800"
            : "bg-stone-700 text-orange-400"
        } font-bold p-2 rounded min-w-36 hover:opacity-70`}
      >
        Buscar
      </button>

      <button
        onClick={handleResetForm}
        className={`${
          !darkMode
            ? "bg-white  text-yellow-800"
            : "bg-stone-700 text-orange-400"
        } font-bold p-2 rounded min-w-36 hover:opacity-70`}
      >
        Resetar busca
      </button>
    </form>
  );
};
