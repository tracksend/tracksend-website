import { useEffect, useState } from "react";

export interface LocalUser {
  id: string;
  email: string;
  name: string;
  plan: string;
  country?: string;
  phone?: string;
  [key: string]: any;
}

export function useLocalUser() {
  const [user, setUser] = useState<LocalUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Read from localStorage on mount
    try {
      const stored = localStorage.getItem("ts_user");
      if (stored) {
        const parsed = JSON.parse(stored);
        setUser(parsed);
      }
    } catch (error) {
      console.error("Failed to parse ts_user from localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { user, isLoading };
}

export function getInitials(name: string): string {
  if (!name) return "";
  const parts = name.trim().split(" ");
  if (parts.length === 1) {
    return parts[0][0]?.toUpperCase() || "";
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
