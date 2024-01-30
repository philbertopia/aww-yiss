import Image from "next/image";

export default function Hero() {
    return (
      <section className="relative h-screen min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
                <Image 
                    src="/yiss-hero.png" 
                    alt="Home of $YISS"
                    width={375}
                    height={375} 
                />
                <h1 className="text-6xl font-bold py-5">Aww Yiss</h1>
                <p>Motha Fuckin $YISS</p>
            </div>
        </div>
      </section>
    );
  }