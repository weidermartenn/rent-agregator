import { User } from '@/shared/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    isAuth: boolean;
    user: User | null;
    isLoading: boolean;
    expiresAt: number | null;
    setAuth: (user: User, expiresAt: number) => void;
    setUser: (user: User) => void;
    clearAuth: () => void;
    setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuth: false,
            user: null,
            isLoading: true,
            expiresAt: null,

            setAuth: (user, expiresAt) => set({
                isAuth: true,
                user,
                expiresAt,
                isLoading: false
            }),

            setUser: (user) => set({ user, isAuth: !!user }),

            clearAuth: () => set({
                isAuth: false,
                user: null,
                expiresAt: null,
                isLoading: true
            }),

            setLoading: (loading) => set({ isLoading: loading })
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                expiresAt: state.expiresAt,
                user: state.user,
                isAuth: state.isAuth
            }),
        }
    )
)