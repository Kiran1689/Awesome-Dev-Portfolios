// "use client"
import * as React from "react"
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { cn } from "../lib/utils"
import { Icons } from "./ui/icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_API_KEY);

export function UserAuthSignUpForm({ className, ...props }) {
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
  
  const signUpWithEmailPassword = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error('Email/password sign-up error:', error.message);
      } else {
        console.log('Email/password sign-up successful:', data);
        // Redirect to main page after successful signup
        navigate('/');
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
        console.error('GitHub sign-in error:', error.message);
      } else {
        console.log('GitHub sign-in successful:', user, session);
      }
    } catch (error) {
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
          <Button disabled={isLoading} onClick={signUpWithEmailPassword}>
            {isLoading && (
              // eslint-disable-next-line 
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up with Email
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
