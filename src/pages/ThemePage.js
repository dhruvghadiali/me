import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { useTheme } from "../contexts/ThemeProvider";

const ThemePage = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto p-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Link to="/">
                <Button variant="outline" size="sm">
                    Back to Home
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              Theme Showcase
            </h1>
            <p className="text-muted-foreground mt-2">
              Current theme:{" "}
              <span className="font-semibold capitalize">{theme}</span>
            </p>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default ThemePage;
