import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader className="space-y-4">
          <div className="mx-auto w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-destructive" />
          </div>
          <CardTitle className="text-6xl font-bold text-destructive">404</CardTitle>
          <CardDescription className="text-xl">
            Oops! Page not found
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={handleGoBack} 
              variant="outline" 
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
            
            <Link to="/">
              <Button className="flex items-center gap-2 w-full sm:w-auto">
                <Home className="w-4 h-4" />
                Home Page
              </Button>
            </Link>
          </div>
          
          <div className="pt-4 text-sm text-muted-foreground">
            <p>Lost? Here are some helpful links:</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <Link to="/" className="text-primary hover:underline">Home</Link>
              <span>•</span>
              <Link to="/sign-in" className="text-primary hover:underline">Sign In</Link>
              <span>•</span>
              <Link to="/sign-up" className="text-primary hover:underline">Sign Up</Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;
