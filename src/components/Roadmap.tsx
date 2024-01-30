import Image from "next/image";
import { Button } from "./ui/button";

export default function Roadmap() {
    return (
      <section className="relative flex items-center justify-center">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-3">Roadmap</h1>
                <p className="mb-5">All Things $YISS</p>
                <div>
                    <div className="border flex flex-col items-center max-w-96 my-5 p-10 rounded-md">
                        <h1 className="text-3xl font-semibold mb-5">Community Building</h1>
                        <p className="mb-5">Join our Discord community. Discord is the best place to learn about the latest $YISS developements, meet fellow Yiss members, get the most up-to-date information & qualify for potential airdrops and giveaways.</p>
                        <div className="flex gap-4">
                            <Button className="w-24">Discord</Button>
                            <Button className="w-24">X</Button>
                        </div>
                        
                    </div>
                    <div className="border flex flex-col items-center max-w-96 mb-5 p-10 rounded-md">
                        <p>COMING SOON</p>
                        <h1>Token Airdrop</h1>
                        <p>$YISS will be airdropped to select number of people who are stong community members, select collaborators & contributors.</p>
                    </div>
                    <div className="border flex flex-col items-center max-w-96 mb-5 p-10 rounded-md">
                        <p>COMING SOON</p>
                        <h1>Token Whitelist</h1>
                        <p>Yiss token is dropped and people can buy it.</p>
                        <p>uniswap</p>
                        <p>minting dapp</p>
                    </div>
                    <div className="border flex flex-col items-center max-w-96 mb-5 p-10 rounded-md">
                        <p>COMING SOON</p>
                        <h1>Token Drop</h1>
                        <p>$YISS will be open to the public.</p>
                        <p>Uniswap</p>
                        <p>Pancake Swap</p>
                        <p>Minting Dapp</p>
                    </div>
                    
                    <div className="border flex flex-col items-center max-w-96 mb-5 p-10 rounded-md">
                        <p>COMING SOON</p>
                        <h1>Happy Goose NFT</h1>
                        <p>Special NFT gated content</p>
                        <p>Merchandise</p>
                        <p>Airdrops & Giveaways</p>
                        <p>NFT Staking</p>
                        <p>Whitelist</p>
                        <p>Preorder</p>
                        <p>Public Sale</p>
                        <p>minting Dapp</p>
                        <p>Opensea</p>
                        <p>Rarible</p>
                        
                    </div>
                    <div className="border flex flex-col items-center max-w-96 mb-5 p-10 rounded-md">
                        <p>COMING SOON</p>
                        <h1>YISS DAO</h1>
                        <p>Get YISS to govern.</p>
                        <p>uniswap</p>
                        <p>minting dapp</p>
                    </div>
                    <div className="border flex flex-col items-center max-w-96 mb-5 p-10 rounded-md">
                        <p>COMING SOON</p>
                        <h1>YISS NFT Staking Dapp</h1>
                        <p>Earn Yiss by staking you yiss NFT.</p>
                        <p>staking app</p>
                        <p>minting dapp</p>
                    </div>
                    <div className="border flex flex-col items-center max-w-96 mb-5 p-10 rounded-md">
                        <p>COMING SOON</p>
                        <h1>$YISS Burn</h1>
                        <p>$YISS is deflationary.</p>
                    </div>

                </div>
                <div className="flex flex-col items-center py-20">
                    <Image 
                        src="/aww-yiss.gif"
                        alt="yiss meme" 
                        width={500}
                        height={500}
                    />
                    <p>Motha Fuckin $YISS</p>
                </div>
                {/* <Image 
                    src="/yiss-hero.png" 
                    alt="Home of $YISS"
                    width={375}
                    height={375} 
                /> */}
                {/* <h1>Aww Yiss</h1>
                <p>Motha fuckin $YISS</p> */}
            </div>
        </div>
      </section>
    );
  }