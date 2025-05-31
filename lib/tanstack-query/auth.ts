import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getLoggedInUser,
  signInWithEmail,
  signOut,
  signUpWithEmail,
  subscribeAccount,
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

export function useGetLoggedInUser() {
  return useQuery({
    queryKey: ["loggedInUser"],
    queryFn: getLoggedInUser,
    refetchOnWindowFocus: false,
  });
}
export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInWithEmail(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["loggedInUser"] });
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

export function useSubscribe() {
  return useMutation({
    mutationFn: (email: string) => subscribeAccount(email),
    onSuccess: () => {
      console.log("User subscribed successfully");
    },
    onError: (error) => {
      console.error("Error subscribing user:", error);
    },
  });
}
