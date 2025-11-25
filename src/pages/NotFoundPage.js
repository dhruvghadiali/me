import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Home, ArrowLeft, SearchX, AlertCircle } from 'lucide-react';
import {root, signIn, signUp} from "@MEUtils/pageRoutes"

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-destructive/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Card className="w-full max-w-lg text-center relative z-10 border-border/50 backdrop-blur-sm shadow-2xl">
        <CardHeader className="space-y-6 pb-4">
          {/* Animated icon */}
          <div className="mx-auto relative">
            <div className="w-28 h-28 bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-full flex items-center justify-center ring-8 ring-destructive/10 animate-bounce-slow">
              <SearchX className="w-14 h-14 text-destructive" strokeWidth={2} />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-muted rounded-full flex items-center justify-center border-2 border-background">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
          </div>

          {/* 404 Title */}
          <div className="space-y-2">
            <CardTitle className="text-8xl font-black bg-gradient-to-br from-destructive to-destructive/60 bg-clip-text text-transparent tracking-tighter">
              404
            </CardTitle>
            <CardDescription className="text-2xl font-semibold text-foreground">
              Page Not Found
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6 pt-2">
          <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to a different location.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button 
              onClick={handleGoBack} 
              variant="outline" 
              size="lg"
              className="flex items-center gap-2 hover:bg-muted transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
            
            <Link to={root} className="w-full sm:w-auto">
              <Button size="lg" className="flex items-center gap-2 w-full">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          {/* Helpful links */}
          <div className="pt-6 border-t border-border/50">
            <p className="text-sm font-medium text-muted-foreground mb-3">
              Need help? Try these pages:
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link to={root} className="text-sm text-primary hover:underline underline-offset-4 transition-all hover:text-primary/80 font-medium">
                Home
              </Link>
              <span className="text-muted-foreground/50">•</span>
              <Link to={signIn} className="text-sm text-primary hover:underline underline-offset-4 transition-all hover:text-primary/80 font-medium">
                Sign In
              </Link>
              <span className="text-muted-foreground/50">•</span>
              <Link to={signUp} className="text-sm text-primary hover:underline underline-offset-4 transition-all hover:text-primary/80 font-medium">
                Sign Up
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
