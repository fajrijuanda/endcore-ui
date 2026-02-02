import { create } from "zustand";

interface UIState {
  isIslandExpanded: boolean;
  setIslandExpanded: (val: boolean) => void;
  toggleIsland: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isIslandExpanded: false,
  setIslandExpanded: (val) => set({ isIslandExpanded: val }),
  toggleIsland: () =>
    set((state) => ({ isIslandExpanded: !state.isIslandExpanded })),
}));
