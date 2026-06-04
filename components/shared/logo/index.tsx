import Image from "next/image"
import logo from "@/assets/imgs/Froza-logo.svg"
const Logo = () => {
    return (
        <div className="flex items-center gap-3 rtl:flex-row-reverse">
            <div className="p-2.5 bg-secondary/5 backdrop-blur-sm border border-secondary/50 rounded-xl">
                <Image src={logo} alt="Froza Logo" width={30} height={30} />
            </div>
            <span className="text-[26px] font-bold uppercase text-secondary font-oswald tracking-wider">Forza</span>
        </div>
    )
}

export default Logo