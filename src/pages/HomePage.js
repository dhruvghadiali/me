import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { useTheme } from "../contexts/ThemeProvider";

const HomePage = () => {
  const { theme } = useTheme();
  const isDevelopment = import.meta.env.DEV;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div>
            <h1 className="text-5xl font-bold text-foreground mb-2">
              Welcome!
            </h1>
            {isDevelopment && (
              <Link to="/theme">
                <Button variant="link">Explore Theme Showcase</Button>
              </Link>
            )}
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
