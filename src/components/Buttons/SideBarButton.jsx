const SideBarButton = ({ sideBar, toggleSidebar, isDarkMode, buttonClass }) => {
  return (
      <div className={`hidden md:block pl-2 pt-2 ${sideBar ? 'ml-48' : ``}`}>
          <button onClick={toggleSidebar}>
              <img
                  src={isDarkMode ? `./assets/sidebar-left-svgrepo-com(1).svg` : `./assets/sidebar-left-svgrepo-com(2).svg`}
                  alt="Hide or Show Navigation"
                  className={buttonClass + " w-10 h-10"}
              />
          </button>
      </div>
  );
};