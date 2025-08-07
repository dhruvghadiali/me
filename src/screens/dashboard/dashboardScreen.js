const DashboardScreen = () => {
  window.onpopstate = function () {
    window.history.go(1);
  };

  return <h1> Dashboard </h1>;
};

export default DashboardScreen;
