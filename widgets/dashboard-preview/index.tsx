import ClientList from "@/widgets/dashboard-preview/client-list"
import MiniStats from "@/widgets/dashboard-preview/mini-stats"
import NutritionCard from "@/widgets/dashboard-preview/nutrition-card"
import ProgressChart from "@/widgets/dashboard-preview/progress-chart"
import Sidebar from "@/widgets/dashboard-preview/sidebar"
import TopBar from "@/widgets/dashboard-preview/top-bar"



const DashboardPreview = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-secondary/20 bg-background/60 p-4 text-left backdrop-blur-xl sm:p-6">
            <TopBar />
            <div className="mt-5 grid grid-cols-12 gap-4">
                <Sidebar />
                <ClientList />
                <div className="col-span-12 space-y-4 md:col-span-4">
                    <ProgressChart />
                    <NutritionCard />
                    <MiniStats />
                </div>
            </div>
        </div>
    )
}

export default DashboardPreview