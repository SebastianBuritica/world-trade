// src/hooks/usePersistedAuth.ts
import { useEffect, useState } from "react";
import { useAuth } from "../auth/context/AuthContext";
import { restoreAuthState } from "../firebase/config";

export const usePersistedAuth = () => {
  const [isRestoring, setIsRestoring] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const restoreAuth = async () => {
      try {
        const savedUser = await restoreAuthState();
        // If we have a saved user but no current user in AuthContext,
        // we could manually update the AuthContext here if needed

        // Your AuthContext already listens to Firebase auth state changes,
        // so we don't need to manually set the user here
      } catch (error) {
        console.error("Error in auth restoration:", error);
      } finally {
        setIsRestoring(false);
      }
    };

    if (!user) {
      restoreAuth();
    } else {
      setIsRestoring(false);
    }
  }, [user]);

  return { isRestoring };
};
