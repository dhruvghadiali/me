import React from 'react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen">
      {/* Main content */}
      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl w-full">
          {/* Welcome Card */}
          <div className="backdrop-blur-md bg-card/50 dark:bg-card/30 rounded-2xl border border-border/20 p-8 md:p-12 shadow-2xl">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl">👋</span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
              Welcome Back!
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-center text-foreground/80 mb-8">
              We're thrilled to have you here
            </p>

            {/* Description */}
            <p className="text-center text-muted-foreground mb-12 text-lg leading-relaxed">
              Your dashboard is ready. Explore amazing features and make the most of your experience.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-primary/90 rounded-lg p-4 border border-success/20 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-secondary mb-1">Fast</h3>
                <p className="text-sm text-secondary">Lightning quick performance</p>
              </div>
              <div className="bg-primary/90 rounded-lg p-4 border border-info/20 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="font-semibold text-secondary mb-1">Secure</h3>
                <p className="text-sm text-secondary">Your data is protected</p>
              </div>
              <div className="bg-primary/90 rounded-lg p-4 border border-warning/20 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">✨</div>
                <h3 className="font-semibold text-secondary mb-1">Modern</h3>
                <p className="text-sm text-secondary">One platform for all your needs</p>
              </div>
            </div>
          </div>

          {/* Stats footer */}
          <div className="grid grid-cols-3 gap-4 mt-8 mb-5">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
