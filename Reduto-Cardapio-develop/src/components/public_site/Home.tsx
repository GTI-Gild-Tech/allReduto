import imgBackground from "./../../assets/Background.png";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { CoffeeIllustration } from "./CoffeeIllustration";
import { HomeContent } from "../home/HomeContent";

const handleScroll = () => {
    const element = document.getElementById("homeForprint");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

type HomeProps = {
  onOpenCart: () => void;
};

export function Home({ onOpenCart }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-[100vh] justify-center align-center flex flex-col pt-20"
        style={{ backgroundImage: `url('${imgBackground}')` }}
      >
        <div className="relative mx-auto max-w-[1129px] px-4">
          {/* Navbar pública */}
          <Navigation onOpenCart={onOpenCart} />

          {/* Ilustração */}
          <CoffeeIllustration />

          {/* Scroll Indicator */}
          <div onClick={handleScroll} className="cursor-pointer" >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center"
            >
              <div className="w-6 h-10 border-2 border-[#E4DDCD] rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#c1a07b] rounded-full mt-2"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center pt-1 text-[#E4DDCD]"
            >
              Veja mais
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-[#f0eee9] ">
        <div className="max-w-[1129px] mx-auto px-4 ">
          {/* Usamos o HomeContent que lê do ProductsContext (mesmo da dashboard) */}
          <HomeContent />
        </div>
      </div>
    </div>
  );
}
