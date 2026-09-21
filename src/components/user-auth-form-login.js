import * as React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Import the client
import { cn } from "../lib/utils";
import { Icons } from "./ui/icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function UserAuthLoginForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Email/password login error:', error.message);
      alert(error.message); // Show error to the user
    } else {
      console.log('Email/password login successful');
      navigate('/portfolios'); // Redirect after successful login
    }
    setIsLoading(false);
  };

  async function signInWithGithub() {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    if (error) {
      console.error('GitHub login error:', error.message);
      alert(error.message);
    }
    // No need to set isLoading to false here, as the page will redirect
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleLogin}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your Password"
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />}
            Login
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-background text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading} onClick={signInWithGithub}>
        {isLoading ? (
          <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Icons.gitHub className="w-4 h-4 mr-2" />
        )}{" "}
        Github
      </Button>
    </div>
  );
}