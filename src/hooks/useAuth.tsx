
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  avatar?: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Google OAuth configuration
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const savedUser = localStorage.getItem('crypto-edu-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);

    // Load Google Sign-In script
    if (GOOGLE_CLIENT_ID && !window.google) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real application, this would make an API call to your authentication endpoint
      // For now, we'll simulate it with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: email.includes('admin') ? 'admin' : 'user',
        preferences: {
          theme: 'dark',
          notifications: true
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('crypto-edu-user', JSON.stringify(mockUser));
      console.log('User logged in:', mockUser);
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      if (GOOGLE_CLIENT_ID && window.google) {
        // Real Google Sign-In implementation
        return new Promise<void>((resolve, reject) => {
          window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: (response: any) => {
              try {
                // Decode the JWT token to get user info
                const payload = JSON.parse(atob(response.credential.split('.')[1]));
                
                const googleUser: User = {
                  id: payload.sub,
                  email: payload.email,
                  name: payload.name,
                  role: 'user',
                  avatar: payload.picture,
                  preferences: {
                    theme: 'dark',
                    notifications: true
                  }
                };
                
                setUser(googleUser);
                localStorage.setItem('crypto-edu-user', JSON.stringify(googleUser));
                console.log('Google login successful:', googleUser);
                setIsLoading(false);
                resolve();
              } catch (error) {
                console.error('Google login failed:', error);
                setIsLoading(false);
                reject(error);
              }
            }
          });
          
          window.google.accounts.id.prompt();
        });
      } else {
        // Fallback for development/demo
        const mockUser: User = {
          id: 'google-' + Date.now(),
          email: 'user@gmail.com',
          name: 'Google User',
          role: 'user',
          avatar: 'https://via.placeholder.com/40',
          preferences: {
            theme: 'dark',
            notifications: true
          }
        };
        
        setUser(mockUser);
        localStorage.setItem('crypto-edu-user', JSON.stringify(mockUser));
        console.log('Google login successful (mock):', mockUser);
      }
    } catch (error) {
      console.error('Google login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('crypto-edu-user');
    console.log('User logged out');
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('crypto-edu-user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      loginWithGoogle,
      logout,
      updateProfile,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Extend window object for Google Sign-In
declare global {
  interface Window {
    google: any;
  }
}
