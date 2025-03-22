const DashboardScreen = () => {
  window.onpopstate = function () {
    window.history.go(1); // Prevent back navigation
  };

  return <h1> Dashboard </h1>;
};

export default DashboardScreen;
