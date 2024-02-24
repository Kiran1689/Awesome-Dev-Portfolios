"use client"
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import * as React from "react"
import { cn } from "../lib/utils"
import { Icons } from "./ui/icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_API_KEY);


export function UserAuthLoginForm({ className, ...props }) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const signInWithEmailPassword = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Email/password login error:', error.message);
      } else {
        console.log('Email/password login successful:', data);
        // Redirect to localhost page after successful signup
        navigate('/portfolios'); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  async function signInWithGithub() {
    try {
      const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
      });
  
      if (error) {
        // Handle GitHub sign-in error
        console.error('GitHub login error:', error.message);
      } else {
        // Handle successful GitHub sign-in
        console.log('GitHub login successful:', user, session);
      }
    } catch (error) {
      // Handle other errors
      console.error(error);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
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
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your Password"
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
          <Button disabled={isLoading} onClick={signInWithEmailPassword}>
            {isLoading && (
              // eslint-disable-next-line 
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Login
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading} onClick={signInWithGithub}>
        {isLoading ? (
          // eslint-disable-next-line 
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          // eslint-disable-next-line 
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button>
    </div>
  )
}
