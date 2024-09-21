import EmptyElement from "@/assets/jair-warrior.jpg";

export const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="h-auto object-contain flex flex-col items-center gap-2 font-bold">
        <img src={EmptyElement} className="rounded-3xl shadow-md" />
        <span>Olá meu aventureiro(a)</span>
        <span>Nada encontrado! Verifique sua busca.</span>
      </div>
    </div>
  );
};
