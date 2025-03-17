import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I am <br /> <span className="text-accent">Tanapol Chaijaroen</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I am a beginner who is determined to develop myself in both front-end and back-end programming
              and I am proficient in various programming languages and technologies.</p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <Button
                variant="outline"
                size="lg"
                ref="https://drive.google.com/file/d/12zFxZin605EtgTcYdtIwOJWhHCw4hu8s/view?usp=sharing"
                className="uppercase flex items-center gap-2">
                <span>Dowload CV</span>
                <FiDownload />
              </Button> */}
              <div className="mb-8 xl:mb-0">
                <Socials iconStyles="h-10 w-10 border border-accent rounded-full flex justify-center items-center text-accent text-base 
                hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  )
}

export default Home;