import Image from "next/image";
import InvoiceStatus from "./ui/invoice/status";
import { Lusitana } from "next/font/google";

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: "400"
});


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1 className="text-blue-500">I &apos;m blue</h1>
     <div
  className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
/>
<p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>HHHHHH</p>
<InvoiceStatus status="pending" />
<InvoiceStatus status="paid" />

<Image
        src="/crown.jpg"
        width={50}
        height={50}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
   </div>
  );
}
