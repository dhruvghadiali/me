import MEAuthHoc from "@MECommonComponents/hoc/meAuthHoc";

const DashboardScreen = () => {
  window.onpopstate = function () {
    window.history.go(1);
  };

  return (
    <MEAuthHoc>
      <h1> Dashboard </h1>
    </MEAuthHoc>
  );
};

export default DashboardScreen;
