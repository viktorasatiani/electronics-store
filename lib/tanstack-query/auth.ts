import { useMutation } from "@tanstack/react-query";
import {
  signInWithEmail,
  signOut,
  signUpWithEmail,
} from "../appwrite/appwrite";

export function useAuth() {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signUpWithEmail(email, password),
    onSuccess: (data) => {
      console.log("User signed up successfully:", data);
    },
    onError: (error) => {
      console.error("Error signing up user:", error);
    },
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInWithEmail(email, password),
    onSuccess: (data) => {
      console.log("User logged in successfully:", data);
    },
    onError: (error) => {
      console.error("Error logging in user:", error);
    },
  });
}

export function useLogout() {
  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      console.log("User logged out successfully");
    },
    onError: (error) => {
      console.error("Error logging out user:", error);
    },
  });
}
