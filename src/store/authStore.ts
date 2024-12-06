import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, createToken, verifyToken } from '../utils/auth';

interface AuthState {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      login: (user: User, token: string) => {
        set({ user, token });
      },
      logout: () => {
        set({ user: null, token: null });
      },
      checkAuth: async () => {
        const { token } = get();
        if (!token) return false;

        const user = await verifyToken(token);
        if (!user) {
          set({ user: null, token: null });
          return false;
        }

        return true;
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);