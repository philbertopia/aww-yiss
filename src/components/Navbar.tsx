import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="z-10 fixed top-0 left-0 right-0 bg-gray-800 text-white py-4 px-4 flex items-center justify-between w-full">
        <div className="flex items-center">
            <Image 
                src="/yiss-logo.png" 
                alt="Aww Yiss Logo"
                width={50}
                height={50}
                />
            <h1 className="ml-4 font-bold">Aww Yiss</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
            <p className="text-sm font-medium">links</p>
            <p className="text-sm font-medium">links</p>
            <p className="text-sm font-medium">links</p>
        </div>
        <div>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">click me</Button>
        </div>
    </nav>
  );
}
