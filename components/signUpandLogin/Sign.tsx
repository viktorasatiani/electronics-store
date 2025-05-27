"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth, useLogin } from "@/lib/tanstack-query/auth";
import { useState } from "react";

export function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync: signUp } = useAuth();
  const { mutateAsync: signIn } = useLogin();
  async function handleSignUp(email: string, password: string) {
    console.log("Signing up with email:", email, "and password:", password);
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    await signUp({ email, password });
  }
  async function handleSignIn(email: string, password: string) {
    console.log("Signing in with email:", email, "and password:", password);
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    await signIn({ email, password });
  }
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Log In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription>
              Log in to your account using your email and password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  console.log("Email changed to:", e.target.value);
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  console.log("Password changed to:", e.target.value);
                  setPassword(e.target.value);
                }}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleSignIn(email, password)}>
              Log In
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Create a new account using your email and password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  console.log("Email changed to:", e.target.value);
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  console.log("Password changed to:", e.target.value);
                  setPassword(e.target.value);
                }}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleSignUp(email, password)}>
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
