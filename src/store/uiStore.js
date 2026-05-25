import { create } from 'zustand'

export const useUIStore = create((set) => ({
  activeSection: 'hero',
  setActiveSection: (sectionId) => set({ activeSection: sectionId }),
  navOpen: false,
  toggleNav: () => set((state) => ({ navOpen: !state.navOpen })),
  closeNav: () => set({ navOpen: false }),
}))
