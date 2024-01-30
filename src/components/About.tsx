import Image from "next/image";
import { Button } from "./ui/button";

export default function About() {
    return (
      <section className="relative py-20">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-3/5 mb-10">
                    <div className="flex flex-col items-center">
                        <Image 
                            src="/breadcrumbs.png"
                            alt="Motha fucking breadcrumbs"
                            width={75}
                            height={75}
                        />
                    </div>
                    <h1 className="flex flex-col items-center py-5 text-7xl font-bold">Yiss?</h1>
                    <p>$YISS is a happy goose ERC20 meme token inspired by "Aww Yiss" meme popularized circa 2009. $YISS transcends mere internet nostalgia and good times. $YISS aims to create a thriving community driven ecosystem on the Ethereum blockchain, where playful collaboration meets real-world utility. </p>
                    <p className="my-5">Holding your $YISS isn't just about owning a meme or being cool; it's about motha fuckin breadcrumbs, shaping the future of finance and spreading $YISS to all.</p>
                </div>

                <div className="md:w-2/5 flex flex-col items-center border rounded-md py-5 mx-20">
                        <Button>Connect Wallet</Button>
                        <h1 className="mt-5 text-3xl font-bold">$YISS</h1>
                        <Image 
                            className="py-10"
                            src="/yiss-logo.png"
                            alt="Motha fucking breadcrumbs"
                            width={100}
                            height={100}
                        />
                        
                        <div className="grid grid-cols-5 gap-2 mx-5 mb-5">
                            <input className="col-span-4 border rounded-md" />
                            <Button className="col-span-1">Buy</Button>
                        </div>

                        <p>Marketcap: 000</p>
                        <p>Circulating supply: 000</p>
                        <p>Owned: 000</p>
                </div>

                
            </div>
            <div className="flex flex-col">
                <h1>Links</h1>
                        <div className="flex py-5">
                            <Image 
                                className="mr-5"
                                src="/breadcrumbs.png"
                                alt="Motha fucking breadcrumbs"
                                width={40}
                                height={40}
                                />
                            <p className="my-auto text-lg">$YISS on etherscan.io</p>
                        </div>

                        <div className="flex pb-5">
                            <Image 
                                className="mr-5"
                                src="/breadcrumbs.png"
                                alt="Motha fucking breadcrumbs"
                                width={40}
                                height={40}
                                />
                            <p className="my-auto text-lg mr-5">$YISS on Uniswap</p>
                        </div>

                        <div className="flex pb-5">
                            <Image 
                                className="mr-5"
                                src="/breadcrumbs.png"
                                alt="Motha fucking breadcrumbs"
                                width={40}
                                height={40}
                            />
                            <p className="my-auto text-lg mr-5">$YISS on Pancake Swap</p>
                        </div>

                        <div className="flex pb-5">
                            <Image 
                                className="mr-5"
                                src="/breadcrumbs.png"
                                alt="Motha fucking breadcrumbs"
                                width={40}
                                height={40}
                            />
                            <p className="my-auto text-lg mr-5">$YISS on Metamask</p>
                        </div>
                    </div>
        </div>
      </section>
    );
  }