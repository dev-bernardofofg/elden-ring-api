import { Card } from "@/components/Card";
import { useDarkMode } from "@/context/DarkModeContext";
import { Layout } from "@/layout";
import { FaLocationDot } from "react-icons/fa6";
import { GiChestArmor } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";
import { LuSword } from "react-icons/lu";
import { SiNodemon } from "react-icons/si";

export const Home = () => {
  const { darkMode } = useDarkMode();
  return (
    <Layout title="Início" className="max-h-full min-h-full">
      <div className="flex flex-col w-full mx-auto gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Elden Ring Documentação</h1>
          <p>
            Nessa aplicação estaremos listando algumas informação sobre o jogo,
            para facilitar, e expandir seus conhecimentos no jogo.
          </p>
        </div>
        <div className="flex w-full">
          <Card
            title="Vamos começar!"
            subtitle="Aqui você vai ter acesso a todos os itens do elden ring."
            icon={
              <IoRocketSharp size={32} color={darkMode ? "#fff" : "#000"} />
            }
            link="ammos"
          />
        </div>

        <div className="grid base:grid-cols-1 lg:grid-cols-2 gap-4">
          <Card
            title="Clique aqui para acessar as armas."
            subtitle="Aqui você terá acesso a todas as armas do elden ring."
            icon={<LuSword size={32} color={darkMode ? "#fff" : "#000"} />}
            link="weapon"
          />
          <Card
            title="Clique aqui para acessar as armaduras."
            subtitle="Aqui você vai terá acesso a todos as armaduras do elden ring."
            icon={<GiChestArmor size={32} color={darkMode ? "#fff" : "#000"} />}
            link="armor"
          />
          <Card
            title="Clique aqui para acessar os bosses."
            subtitle="Aqui você vai terá acesso a todos os bosses do elden ring."
            icon={<SiNodemon size={32} color={darkMode ? "#fff" : "#000"} />}
            link="bosses"
          />
          <Card
            title="Clique aqui para acessar todos os locais."
            subtitle="Aqui você vai terá acesso a todos os locais do elden ring."
            icon={
              <FaLocationDot size={32} color={darkMode ? "#fff" : "#000"} />
            }
            link="location"
          />
        </div>
      </div>
    </Layout>
  );
};
