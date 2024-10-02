import { useDarkMode } from "@/context/DarkModeContext";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormSearchProps = {
  setName: Dispatch<SetStateAction<string>>;
  name: string;
};

const FormSearchSchema = z.object({
  name: z.string(),
});

type FormSearchSchemaType = z.infer<typeof FormSearchSchema>;

export const FormSearch = ({ setName, name }: FormSearchProps) => {
  const { register, handleSubmit, reset, setValue } = useForm<FormSearchSchemaType>({
    resolver: zodResolver(FormSearchSchema),
  });
  const { darkMode } = useDarkMode();

  const handleFilter = (data: { name: string }) => {
    setName(data.name);
  };

  const handleResetForm = () => {
    setName("");
    reset();
  };

  useEffect(() => {
    setValue("name", name);
  }, [name, setValue]);

  return (
    <form
      className="flex base:flex-col md:flex-row gap-4"
      onSubmit={handleSubmit(handleFilter)}
    >
      <input
        type="text"
        className={` p-2 rounded w-full ${
          !darkMode ? "bg-white text-yellow-950" : "bg-stone-700 placeholder:text-stone-400 text-yellow-50"
        }`}
        placeholder="Buscar pelo nome"
        {...register("name")}
      />
      <button
        type="submit"
        className={`${
          !darkMode
            ? "bg-white text-yellow-800"
            : "bg-stone-700 text-orange-400"
        } font-bold p-2 rounded min-w-36 hover:opacity-70`}
      >
        Buscar
      </button>

      <button
        type="button"
        onClick={handleResetForm}
        className={`${
          !darkMode
            ? "bg-white text-yellow-800"
            : "bg-stone-700 text-orange-400"
        } font-bold p-2 rounded min-w-36 hover:opacity-70`}
      >
        Resetar busca
      </button>
    </form>
  );
};
