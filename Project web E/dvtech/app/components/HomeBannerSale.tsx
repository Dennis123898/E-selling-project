import Image from "next/image";


const HomeBannerSale = () => {
    return ( <div className="relative bg-gradient-to-r from-sky-500 
    to-sky-700 mb-8">
     <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row
       items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
            <h1 className="text-4x1 md:text-6x1 font-bold
            text-white mb-4">Summer sale</h1>
            <p className="text-lg md:text-x1 text-white mb-2">
            Enjoy discouts on selected items</p>
            <p className="text-2x1 md:text-5x1 text-yellow-400
            font-bold"> GET 50% OFF</p>
            </div>
            <div className="w-1/3 relative aspect-video">
             <Image src="/banner-image.png" fill 
             alt ="Banner Image"
             className="object-contain"
             />
            </div>
        </div>
    </div> 
    );
};
 
export default HomeBannerSale;