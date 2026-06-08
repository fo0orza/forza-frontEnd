import FooterBottom from "@/components/shared/footer/FooterBottom"
import FooterBrand from "@/components/shared/footer/FooterBrand"
import FooterLinksColumn from "@/components/shared/footer/FooterLinksColumn"
import FooterNewsletter from "@/components/shared/footer/FooterNewsletter"
import GridPattern from "@/components/shared/grid-pattern"
import { FOOTER_COLUMNS } from "@/constants/footer"

const Footer = () => {
    return (
        <footer className="relative w-full overflow-hidden border-t border-white/6 bg-background ">
            <div className="opacity-50">
                <GridPattern />
            </div>
            <div className="container-wrapper relative z-10 px-6 pt-20 pb-8 md:pt-24">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <FooterBrand />
                        <FooterNewsletter />
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 gap-10 sm:grid-cols-3">
                        {FOOTER_COLUMNS.map((column) => (
                            <FooterLinksColumn key={column.translationKey} column={column} />
                        ))}
                    </div>
                </div>

                <div className="mt-16">
                    <FooterBottom />
                </div>
            </div>
        </footer>
    )
}

export default Footer
