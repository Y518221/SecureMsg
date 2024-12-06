import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { encrypt, decrypt, EncryptedData } from '../utils/crypto';

interface Message {
  id: string;
  userId: string;
  encryptedData: EncryptedData;
  createdAt: string;
}

interface MessageState {
  messages: Message[];
  addMessage: (userId: string, message: string, password: string) => void;
  decryptMessage: (messageId: string, password: string) => string | null;
  deleteMessage: (messageId: string) => void;
  clearUserMessages: (userId: string) => void;
}

export const useMessageStore = create<MessageState>()(
  persist(
    (set, get) => ({
      messages: [],
      addMessage: (userId: string, message: string, password: string) => {
        const encryptedData = encrypt(message, password);
        const newMessage: Message = {
          id: crypto.randomUUID(),
          userId,
          encryptedData,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          messages: [...state.messages, newMessage],
        }));
      },
      decryptMessage: (messageId: string, password: string) => {
        const message = get().messages.find((m) => m.id === messageId);
        if (!message) return null;
        return decrypt(message.encryptedData, password);
      },
      deleteMessage: (messageId: string) => {
        set((state) => ({
          messages: state.messages.filter((m) => m.id !== messageId),
        }));
      },
      clearUserMessages: (userId: string) => {
        set((state) => ({
          messages: state.messages.filter((m) => m.userId !== userId),
        }));
      },
    }),
    {
      name: 'message-storage',
    }
  )
);