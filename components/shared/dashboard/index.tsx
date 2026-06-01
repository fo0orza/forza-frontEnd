import ClientList from "@/components/shared/dashboard/client-list"
import MiniStats from "@/components/shared/dashboard/mini-stats"
import NutritionCard from "@/components/shared/dashboard/nutrition-card"
import ProgressChart from "@/components/shared/dashboard/progress-chart"
import Sidebar from "@/components/shared/dashboard/sidebar"
import TopBar from "@/components/shared/dashboard/top-bar"


const Dashboard = () => {
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

export default Dashboard