import { getTranslations } from "next-intl/server"
import { CLIENTS } from "@/constants"
import ClientCard from "@/widgets/dashboard-preview/client-card"


const ClientList = async () => {
    const t = await getTranslations("Dashboard.clientList")
    return (
        <div className="col-span-12 md:col-span-5">
            <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-primary">{t("title")}</h3>
                <span className="text-[10px] text-muted-foreground">{t("total")}</span>
            </div>
            <div className="space-y-2">
                {CLIENTS.map((client) => (
                    <ClientCard key={client.name} {...client} />
                ))}
            </div>
        </div>
    )
}

export default ClientList
