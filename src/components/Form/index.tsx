import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

type FormSearchProps = {
  setName: Dispatch<SetStateAction<string>>;
};

export const FormSearch = ({ setName }: FormSearchProps) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFilter = (data: any) => {
    setName(data.name);
  };

  const handleResetForm = () => {
    setName("");
    reset();
  };
  return (
    <form className="flex gap-4" onSubmit={handleSubmit(handleFilter)}>
      <input
        type="text"
        className="text-yellow-800 p-2 rounded"
        placeholder="Buscar pelo nome"
        {...register("name")}
      />
      <button
        type="submit"
        className="bg-white text-yellow-800 font-bold p-2 rounded min-w-36 hover:opacity-70"
      >
        Buscar
      </button>

      <button
        onClick={handleResetForm}
        className="bg-white text-yellow-800 font-bold p-2 rounded min-w-36 hover:opacity-70"
      >
        Resetar busca
      </button>
    </form>
  );
};
