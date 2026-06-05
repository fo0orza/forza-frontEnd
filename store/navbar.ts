import { create } from "zustand"

interface NavbarStore {
    isDrawerOpen: boolean
    openDrawer: () => void
    closeDrawer: () => void
    toggleDrawer: () => void
}

export const useNavbarStore = create<NavbarStore>((set) => ({
    isDrawerOpen: false,
    openDrawer: () => set({ isDrawerOpen: true }),
    closeDrawer: () => set({ isDrawerOpen: false }),
    toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
}))
