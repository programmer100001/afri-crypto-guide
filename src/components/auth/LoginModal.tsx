
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { Mail, Lock, Chrome, AlertCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const { login, loginWithGoogle, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await login(email, password);
      onClose();
      setEmail('');
      setPassword('');
    } catch (error: any) {
      setError(error.message || 'Authentication failed');
      console.error('Authentication error:', error);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await loginWithGoogle();
      onClose();
    } catch (error: any) {
      setError('Google sign-in failed. Please try again.');
      console.error('Google login error:', error);
    }
  };

  const handleClose = () => {
    setError('');
    setEmail('');
    setPassword('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-slate-900 border-slate-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-orange-500">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </DialogTitle>
        </DialogHeader>
        
        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-md">
            <AlertCircle className="h-4 w-4 text-red-400" />
            <span className="text-red-400 text-sm">{error}</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-slate-300">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800 border-slate-600 pl-10 text-white"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="password" className="text-slate-300">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-800 border-slate-600 pl-10 text-white"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </Button>
        </form>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-600" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-900 px-2 text-slate-400">Or continue with</span>
          </div>
        </div>
        
        <Button
          onClick={handleGoogleLogin}
          variant="outline"
          className="w-full border-slate-600 text-white hover:bg-slate-800"
          disabled={isLoading}
        >
          <Chrome className="mr-2 h-4 w-4" />
          Google
        </Button>
        
        <p className="text-center text-sm text-slate-400">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError('');
            }}
            className="text-orange-500 hover:underline"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
        
        <div className="text-xs text-slate-500 text-center">
          <p>Demo: Use any email/password combination</p>
          <p>For real Google sign-in, set VITE_GOOGLE_CLIENT_ID environment variable</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
