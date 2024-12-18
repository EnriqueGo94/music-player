import { create } from 'zustand';

export const useSearchStore = create((set) => ({
  searchedTerm: '', // Estado inicial para el término de búsqueda
  setSearchedTerm: (term) => set({ searchedTerm: term }), // Función para actualizar el estado
}));
