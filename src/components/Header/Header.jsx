import "./Header.css";

const Header = () => {
  return (
    <header className="header_container__B2IBR" role="banner">
      <div className="header_inner__fSE9x">
        <div className="header_container__left__GPX29">
          <div
            id="nav-item--menu"
            className="header_nav-item__PWSg9 header_nav-item--menu__Kci1M menuKeshowi"
          >
            <button
              className="button-base_outer__lo8Kr button-base_sm-32-16__Ab_82 button-base_secondary__N_MRW  button-base_empty__YOyMD header_nav-item--menu__button__I_Nz9"
              aria-expanded="false"
              type="button"
            >
              <div className="button-base_inner__k9W0g">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      d="M0 3.33333C0 2.8731 0.373096 2.5 0.833333 2.5H19.1667C19.6269 2.5 20 2.8731 20 3.33333C20 3.79357 19.6269 4.16667 19.1667 4.16667H0.833333C0.373096 4.16667 0 3.79357 0 3.33333Z"
                      fill="#F1DAC4"
                    ></path>
                    <path
                      d="M0 10C0 9.53976 0.373096 9.16667 0.833333 9.16667H19.1667C19.6269 9.16667 20 9.53976 20 10C20 10.4602 19.6269 10.8333 19.1667 10.8333H0.833333C0.373096 10.8333 0 10.4602 0 10Z"
                      fill="#F1DAC4"
                    ></path>
                    <path
                      d="M0 16.6667C0 16.2064 0.373096 15.8333 0.833333 15.8333H19.1667C19.6269 15.8333 20 16.2064 20 16.6667C20 17.1269 19.6269 17.5 19.1667 17.5H0.833333C0.373096 17.5 0 17.1269 0 16.6667Z"
                      fill="#F1DAC4"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
            <div id="menu-dropdown" className="header_nav-menu-dropdown__BkFid">
              <div className="header_nav-menu-dropdown__container__SRExQ">
                <div className="header_nav-menu-dropdown__container__close__ZJBV0">
                  <button type="button" aria-label="Close">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.7274 12.3033C14.6875 12.2635 14.6558 12.2162 14.6342 12.1641C14.6126 12.112 14.6015 12.0562 14.6015 11.9999C14.6015 11.9435 14.6126 11.8877 14.6342 11.8356C14.6558 11.7835 14.6875 11.7362 14.7274 11.6964L22.6405 3.78329C22.8043 3.62515 22.9349 3.43599 23.0247 3.22684C23.1146 3.01769 23.1618 2.79274 23.1638 2.56512C23.1658 2.3375 23.1224 2.11176 23.0362 1.90108C22.95 1.6904 22.8227 1.499 22.6618 1.33804C22.5008 1.17708 22.3094 1.04979 22.0987 0.963594C21.8881 0.877399 21.6623 0.834024 21.4347 0.836002C21.2071 0.83798 20.9821 0.885271 20.773 0.975115C20.5638 1.06496 20.3747 1.19556 20.2165 1.35929L12.3034 9.27243C12.2636 9.31234 12.2163 9.34401 12.1642 9.36561C12.1122 9.38722 12.0563 9.39834 12 9.39834C11.9436 9.39834 11.8878 9.38722 11.8357 9.36561C11.7836 9.34401 11.7363 9.31234 11.6965 9.27243L3.78339 1.35929C3.46008 1.04702 3.02704 0.874227 2.57756 0.878133C2.12808 0.882039 1.69812 1.06233 1.38028 1.38017C1.06243 1.69801 0.882144 2.12798 0.878239 2.57746C0.874333 3.02694 1.04712 3.45997 1.35939 3.78329L9.27254 11.6964C9.31245 11.7362 9.34411 11.7835 9.36572 11.8356C9.38732 11.8877 9.39845 11.9435 9.39845 11.9999C9.39845 12.0562 9.38732 12.112 9.36572 12.1641C9.34411 12.2162 9.31245 12.2635 9.27254 12.3033L1.35939 20.2164C1.04712 20.5397 0.874333 20.9728 0.878239 21.4223C0.882144 21.8717 1.06243 22.3017 1.38028 22.6195C1.69812 22.9374 2.12808 23.1177 2.57756 23.1216C3.02704 23.1255 3.46008 22.9527 3.78339 22.6404L11.6965 14.7273C11.7363 14.6874 11.7836 14.6557 11.8357 14.6341C11.8878 14.6125 11.9436 14.6014 12 14.6014C12.0563 14.6014 12.1122 14.6125 12.1642 14.6341C12.2163 14.6557 12.2636 14.6874 12.3034 14.7273L20.2165 22.6404C20.5399 22.9527 20.9729 23.1255 21.4224 23.1216C21.8718 23.1177 22.3018 22.9374 22.6197 22.6195C22.9375 22.3017 23.1178 21.8717 23.1217 21.4223C23.1256 20.9728 22.9528 20.5397 22.6405 20.2164L14.7274 12.3033Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="header_nav-menu-dropdown__container__list-item__1kqEE header_nav-menu-dropdown__container__logo__KAc6B">
                  <button type="button">
                    <svg
                      width="226"
                      height="40"
                      viewBox="0 0 226 40"
                      fill="#ff601c"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 19.9986C0 31.0447 8.95808 39.9972 20.007 39.9972H27.6774V31.3575H22.2642C13.8387 31.3575 9.49067 26.2712 9.49067 19.9986C9.49067 13.726 13.8387 8.63966 22.2642 8.63966H27.6774V0H20.007C8.95808 0 0 8.95527 0 19.9986ZM102.628 19.9986C102.628 31.0447 111.586 39.9972 122.635 39.9972H130.305V31.3575H124.892C116.466 31.3575 112.118 26.2712 112.118 19.9986C112.118 13.726 116.466 8.63966 124.892 8.63966H130.305V0H122.635C111.586 0 102.628 8.95527 102.628 19.9986ZM61.7767 13.1624C61.7767 3.80416 55.0701 0 46.8926 0H31.3575V40H40.3043V7.5745H46.6587C50.6009 7.5745 53.3765 9.78936 53.3061 13.5174C53.2356 17.1751 50.0261 19.435 46.7601 19.4773H41.8091L53.6583 40H63.0701L54.143 24.7214C58.7897 22.8954 61.7767 19.2237 61.7767 13.1624ZM181.701 0H171.923V40H196.734V31.366H181.701V0ZM209.584 31.5238V23.9239H222.895V15.4477H209.584V8.57767H224.888V0H199.806V40H225.389V31.5238H209.584ZM78.019 0L64.4959 40H74.5586L77.3709 31.3237H91.3815L94.2839 40H104.454L91.0546 0H78.019ZM79.5858 23.5379L84.4551 8.40296L89.2145 23.5379H79.5858ZM133.985 40H143.958V0H133.985V40ZM157.523 0L145.431 19.5928L157.599 40H169.575L156.066 19.6435L169.615 0H157.523Z"></path>
                    </svg>
                  </button>
                </div>
                <div
                  id="menu-nav-item--search"
                  className="header_nav-menu-dropdown__container__list-item__1kqEE header_nav-menu-dropdown__container__search__LSRMk "
                >
                  <button
                    className="button-base_outer__lo8Kr button-base_sm-32-16__Ab_82 button-base_secondary__N_MRW  button-base_empty__YOyMD     "
                    type="button"
                  >
                    <div className="button-base_inner__k9W0g">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.7">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.66667 0C4.89856 0 3.20286 0.702379 1.95262 1.95262C0.702379 3.20286 0 4.89856 0 6.66667C0 8.43478 0.702379 10.1305 1.95262 11.3807C3.20286 12.631 4.89856 13.3333 6.66667 13.3333C8.21114 13.3333 9.70037 12.7974 10.8857 11.8285L14.2905 15.2333C14.5509 15.4937 14.973 15.4937 15.2333 15.2333C15.4937 14.973 15.4937 14.5509 15.2333 14.2905L11.8285 10.8857C12.7974 9.70037 13.3333 8.21114 13.3333 6.66667C13.3333 4.89856 12.631 3.20286 11.3807 1.95262C10.1305 0.702379 8.43478 0 6.66667 0ZM2.89543 2.89543C3.89562 1.89524 5.25218 1.33333 6.66667 1.33333C8.08116 1.33333 9.43771 1.89524 10.4379 2.89543C11.4381 3.89562 12 5.25218 12 6.66667C12 8.08116 11.4381 9.43771 10.4379 10.4379C9.43771 11.4381 8.08116 12 6.66667 12C5.25218 12 3.89562 11.4381 2.89543 10.4379C1.89524 9.43771 1.33333 8.08116 1.33333 6.66667C1.33333 5.25218 1.89524 3.89562 2.89543 2.89543Z"
                            fill="#F1DAC4"
                          ></path>
                        </g>
                      </svg>
                      <span>Search</span>
                    </div>
                  </button>
                </div>
                <div
                  id="menu-nav-item--movies"
                  className="header_nav-menu-dropdown__container__list-item__1kqEE header_nav-menu-dropdown__container__movies__0M2yj "
                >
                  <button
                    className="button-base_outer__lo8Kr button-base_sm-32-16__Ab_82 button-base_secondary__N_MRW  button-base_empty__YOyMD     "
                    type="button"
                  >
                    <div className="button-base_inner__k9W0g">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.7">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.13593 0.304482C3.62124 0.103463 4.14138 0 4.66667 0C5.19195 0 5.7121 0.103463 6.1974 0.304482C6.6827 0.505501 7.12366 0.800139 7.49509 1.17157C7.86653 1.54301 8.16117 1.98396 8.36218 2.46927C8.5632 2.95457 8.66667 3.47471 8.66667 4C8.66667 4.52529 8.5632 5.04543 8.36218 5.53073C8.16117 6.01604 7.86653 6.45699 7.49509 6.82843C7.12366 7.19986 6.6827 7.4945 6.1974 7.69552C5.7121 7.89654 5.19195 8 4.66667 8C4.14138 8 3.62124 7.89654 3.13593 7.69552C2.65063 7.4945 2.20967 7.19986 1.83824 6.82843C1.46681 6.45699 1.17217 6.01604 0.971148 5.53073C0.77013 5.04543 0.666667 4.52529 0.666667 4C0.666667 3.47471 0.77013 2.95457 0.971148 2.46927C1.17217 1.98396 1.46681 1.54301 1.83824 1.17157C2.20967 0.800139 2.65063 0.505501 3.13593 0.304482ZM4.66667 1.33333C4.31647 1.33333 3.96971 1.40231 3.64618 1.53632C3.32264 1.67033 3.02867 1.86676 2.78105 2.11438C2.53343 2.36201 2.337 2.65598 2.20299 2.97951C2.06898 3.30305 2 3.64981 2 4C2 4.35019 2.06898 4.69695 2.20299 5.02049C2.337 5.34402 2.53343 5.638 2.78105 5.88562C3.02867 6.13324 3.32264 6.32967 3.64618 6.46368C3.96971 6.59769 4.31647 6.66667 4.66667 6.66667C5.01686 6.66667 5.36362 6.59769 5.68716 6.46368C6.01069 6.32967 6.30466 6.13324 6.55228 5.88562C6.79991 5.638 6.99633 5.34402 7.13034 5.02049C7.26436 4.69695 7.33333 4.35019 7.33333 4C7.33333 3.64981 7.26436 3.30305 7.13034 2.97951C6.99633 2.65598 6.79991 2.362 6.55228 2.11438C6.30466 1.86676 6.01069 1.67033 5.68716 1.53632C5.36362 1.40231 5.01686 1.33333 4.66667 1.33333Z"
                            fill="#F1DAC4"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.8787 2.87868C11.4413 2.31607 12.2044 2 13 2C13.7956 2 14.5587 2.31607 15.1213 2.87868C15.6839 3.44129 16 4.20435 16 5C16 5.79565 15.6839 6.55871 15.1213 7.12132C14.5587 7.68393 13.7956 8 13 8C12.2044 8 11.4413 7.68393 10.8787 7.12132C10.3161 6.55871 10 5.79565 10 5C10 4.20435 10.3161 3.44129 10.8787 2.87868ZM13 3.33333C12.558 3.33333 12.134 3.50893 11.8215 3.82149C11.5089 4.13405 11.3333 4.55797 11.3333 5C11.3333 5.44203 11.5089 5.86595 11.8215 6.17851C12.134 6.49107 12.558 6.66667 13 6.66667C13.442 6.66667 13.866 6.49107 14.1785 6.17851C14.4911 5.86595 14.6667 5.44203 14.6667 5C14.6667 4.55797 14.4911 4.13405 14.1785 3.82149C13.866 3.50893 13.442 3.33333 13 3.33333Z"
                            fill="#F1DAC4"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.33333 10.6667C3.33333 9.5621 4.22876 8.66667 5.33333 8.66667H11.8095C12.9141 8.66667 13.8095 9.5621 13.8095 10.6667V14C13.8095 15.1046 12.9141 16 11.8095 16H5.33333C4.22876 16 3.33333 15.1046 3.33333 14V10.6667ZM5.33333 10C4.96514 10 4.66667 10.2985 4.66667 10.6667V14C4.66667 14.3682 4.96514 14.6667 5.33333 14.6667H11.8095C12.1777 14.6667 12.4762 14.3682 12.4762 14V10.6667C12.4762 10.2985 12.1777 10 11.8095 10H5.33333Z"
                            fill="#F1DAC4"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.3333 10C15.7015 10 16 10.2985 16 10.6667V14.6667C16 15.0349 15.7015 15.3333 15.3333 15.3333C14.9651 15.3333 14.6667 15.0349 14.6667 14.6667V10.6667C14.6667 10.2985 14.9651 10 15.3333 10Z"
                            fill="#F1DAC4"
                          ></path>
                        </g>
                      </svg>
                      <span>Movies</span>
                    </div>
                  </button>
                </div>
                <div
                  id="menu-nav-item--shows"
                  className="header_nav-menu-dropdown__container__list-item__1kqEE header_nav-menu-dropdown__container__shows__AG_4q "
                >
                  <button
                    className="button-base_outer__lo8Kr button-base_sm-32-16__Ab_82 button-base_secondary__N_MRW  button-base_empty__YOyMD     "
                    type="button"
                  >
                    <div className="button-base_inner__k9W0g">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.7">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.51122 0.378029C5.24664 0.121982 4.82459 0.128901 4.56854 0.393483C4.31249 0.658065 4.31941 1.08012 4.58399 1.33617L6.64769 3.33329H2C0.895431 3.33329 0 4.22872 0 5.33329V12.6666C0 13.7712 0.89543 14.6666 2 14.6666H14C15.1046 14.6666 16 13.7712 16 12.6666V5.33329C16 4.22872 15.1046 3.33329 14 3.33329H9.35229L11.416 1.33617C11.6806 1.08012 11.6875 0.658065 11.4314 0.393483C11.1754 0.128901 10.7533 0.121982 10.4888 0.378029L7.99999 2.78651L5.51122 0.378029ZM1.33333 5.33329C1.33333 4.9651 1.63181 4.66663 2 4.66663H14C14.3682 4.66663 14.6667 4.9651 14.6667 5.33329V12.6666C14.6667 13.0348 14.3682 13.3333 14 13.3333H2C1.63181 13.3333 1.33333 13.0348 1.33333 12.6666V5.33329Z"
                            fill="#F1DAC4"
                          ></path>
                        </g>
                      </svg>
                      <span>TV Shows</span>
                    </div>
                  </button>
                </div>
                <div
                  id="menu-nav-item--watchlist"
                  className="header_nav-menu-dropdown__container__list-item__1kqEE header_nav-menu-dropdown__container__watchlist__g3S8m "
                >
                  <button
                    className="button-base_outer__lo8Kr button-base_sm-32-16__Ab_82 button-base_secondary__N_MRW  button-base_empty__YOyMD     "
                    type="button"
                  >
                    <div className="button-base_inner__k9W0g">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.7">
                          <path
                            d="M8 0C7.63181 0 7.33333 0.298477 7.33333 0.666667V7.33333H0.666667C0.298477 7.33333 0 7.63181 0 8C0 8.36819 0.298477 8.66667 0.666667 8.66667H7.33333V15.3333C7.33333 15.7015 7.63181 16 8 16C8.36819 16 8.66667 15.7015 8.66667 15.3333V8.66667H15.3333C15.7015 8.66667 16 8.36819 16 8C16 7.63181 15.7015 7.33333 15.3333 7.33333H8.66667V0.666667C8.66667 0.298477 8.36819 0 8 0Z"
                            fill="#F1DAC4"
                          ></path>
                        </g>
                      </svg>
                      <span>Watchlist</span>
                    </div>
                  </button>
                </div>
                <div className="header_nav-menu-dropdown__container__list-item__1kqEE header_nav-menu-dropdown__container__account__IwUeQ  ">
                  <button
                    className="button-base_outer__lo8Kr button-base_sm-32-14__ADzLo button-base_primary__2nq0a  button-base_solid__rqePh header_nav-menu-dropdown__container__account--button-sign-up__MT5vB    "
                    id="menu-nav-item--sign-up"
                    type="button"
                  >
                    <div className="button-base_inner__k9W0g">
                      <span>Create Account</span>
                    </div>
                  </button>
                  <button
                    className="button-base_outer__lo8Kr button-base_sm-32-14__ADzLo button-base_primary__2nq0a  button-base_transparent__d3kp_     "
                    id="menu-nav-item--sign-in"
                    type="button"
                  >
                    <div className="button-base_inner__k9W0g">
                      <span>Sign In</span>
                    </div>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            id="nav-item--logo"
            className="header_nav-item__PWSg9 header_nav-item--logo__ZfDwA"
          >
            <button aria-label="Crackle Logo" type="button">
              <svg
                width="226"
                height="40"
                viewBox="0 0 226 40"
                fill="#ff601c"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 19.9986C0 31.0447 8.95808 39.9972 20.007 39.9972H27.6774V31.3575H22.2642C13.8387 31.3575 9.49067 26.2712 9.49067 19.9986C9.49067 13.726 13.8387 8.63966 22.2642 8.63966H27.6774V0H20.007C8.95808 0 0 8.95527 0 19.9986ZM102.628 19.9986C102.628 31.0447 111.586 39.9972 122.635 39.9972H130.305V31.3575H124.892C116.466 31.3575 112.118 26.2712 112.118 19.9986C112.118 13.726 116.466 8.63966 124.892 8.63966H130.305V0H122.635C111.586 0 102.628 8.95527 102.628 19.9986ZM61.7767 13.1624C61.7767 3.80416 55.0701 0 46.8926 0H31.3575V40H40.3043V7.5745H46.6587C50.6009 7.5745 53.3765 9.78936 53.3061 13.5174C53.2356 17.1751 50.0261 19.435 46.7601 19.4773H41.8091L53.6583 40H63.0701L54.143 24.7214C58.7897 22.8954 61.7767 19.2237 61.7767 13.1624ZM181.701 0H171.923V40H196.734V31.366H181.701V0ZM209.584 31.5238V23.9239H222.895V15.4477H209.584V8.57767H224.888V0H199.806V40H225.389V31.5238H209.584ZM78.019 0L64.4959 40H74.5586L77.3709 31.3237H91.3815L94.2839 40H104.454L91.0546 0H78.019ZM79.5858 23.5379L84.4551 8.40296L89.2145 23.5379H79.5858ZM133.985 40H143.958V0H133.985V40ZM157.523 0L145.431 19.5928L157.599 40H169.575L156.066 19.6435L169.615 0H157.523Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <nav className="header_container__middle__zAGEw" role="navigation">
          <div
            id="nav-item--movies"
            className="header_container__middle__nav__uv5qs header_nav-item__PWSg9 header_nav-item--movies__efO_b"
          >
            <button
              className="button-base_outer__lo8Kr button-base_sm-32-16__Ab_82 button-base_secondary__N_MRW  button-base_empty__YOyMD header_movies-button__guUAI    "
              id="movies_opener"
              aria-expanded="false"
              data-submenu-index="1"
              type="button"
            >
              <div className="button-base_inner__k9W0g">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.13593 0.304482C3.62124 0.103463 4.14138 0 4.66667 0C5.19195 0 5.7121 0.103463 6.1974 0.304482C6.6827 0.505501 7.12366 0.800139 7.49509 1.17157C7.86653 1.54301 8.16117 1.98396 8.36218 2.46927C8.5632 2.95457 8.66667 3.47471 8.66667 4C8.66667 4.52529 8.5632 5.04543 8.36218 5.53073C8.16117 6.01604 7.86653 6.45699 7.49509 6.82843C7.12366 7.19986 6.6827 7.4945 6.1974 7.69552C5.7121 7.89654 5.19195 8 4.66667 8C4.14138 8 3.62124 7.89654 3.13593 7.69552C2.65063 7.4945 2.20967 7.19986 1.83824 6.82843C1.46681 6.45699 1.17217 6.01604 0.971148 5.53073C0.77013 5.04543 0.666667 4.52529 0.666667 4C0.666667 3.47471 0.77013 2.95457 0.971148 2.46927C1.17217 1.98396 1.46681 1.54301 1.83824 1.17157C2.20967 0.800139 2.65063 0.505501 3.13593 0.304482ZM4.66667 1.33333C4.31647 1.33333 3.96971 1.40231 3.64618 1.53632C3.32264 1.67033 3.02867 1.86676 2.78105 2.11438C2.53343 2.36201 2.337 2.65598 2.20299 2.97951C2.06898 3.30305 2 3.64981 2 4C2 4.35019 2.06898 4.69695 2.20299 5.02049C2.337 5.34402 2.53343 5.638 2.78105 5.88562C3.02867 6.13324 3.32264 6.32967 3.64618 6.46368C3.96971 6.59769 4.31647 6.66667 4.66667 6.66667C5.01686 6.66667 5.36362 6.59769 5.68716 6.46368C6.01069 6.32967 6.30466 6.13324 6.55228 5.88562C6.79991 5.638 6.99633 5.34402 7.13034 5.02049C7.26436 4.69695 7.33333 4.35019 7.33333 4C7.33333 3.64981 7.26436 3.30305 7.13034 2.97951C6.99633 2.65598 6.79991 2.362 6.55228 2.11438C6.30466 1.86676 6.01069 1.67033 5.68716 1.53632C5.36362 1.40231 5.01686 1.33333 4.66667 1.33333Z"
                      fill="#F1DAC4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.8787 2.87868C11.4413 2.31607 12.2044 2 13 2C13.7956 2 14.5587 2.31607 15.1213 2.87868C15.6839 3.44129 16 4.20435 16 5C16 5.79565 15.6839 6.55871 15.1213 7.12132C14.5587 7.68393 13.7956 8 13 8C12.2044 8 11.4413 7.68393 10.8787 7.12132C10.3161 6.55871 10 5.79565 10 5C10 4.20435 10.3161 3.44129 10.8787 2.87868ZM13 3.33333C12.558 3.33333 12.134 3.50893 11.8215 3.82149C11.5089 4.13405 11.3333 4.55797 11.3333 5C11.3333 5.44203 11.5089 5.86595 11.8215 6.17851C12.134 6.49107 12.558 6.66667 13 6.66667C13.442 6.66667 13.866 6.49107 14.1785 6.17851C14.4911 5.86595 14.6667 5.44203 14.6667 5C14.6667 4.55797 14.4911 4.13405 14.1785 3.82149C13.866 3.50893 13.442 3.33333 13 3.33333Z"
                      fill="#F1DAC4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.33333 10.6667C3.33333 9.5621 4.22876 8.66667 5.33333 8.66667H11.8095C12.9141 8.66667 13.8095 9.5621 13.8095 10.6667V14C13.8095 15.1046 12.9141 16 11.8095 16H5.33333C4.22876 16 3.33333 15.1046 3.33333 14V10.6667ZM5.33333 10C4.96514 10 4.66667 10.2985 4.66667 10.6667V14C4.66667 14.3682 4.96514 14.6667 5.33333 14.6667H11.8095C12.1777 14.6667 12.4762 14.3682 12.4762 14V10.6667C12.4762 10.2985 12.1777 10 11.8095 10H5.33333Z"
                      fill="#F1DAC4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.3333 10C15.7015 10 16 10.2985 16 10.6667V14.6667C16 15.0349 15.7015 15.3333 15.3333 15.3333C14.9651 15.3333 14.6667 15.0349 14.6667 14.6667V10.6667C14.6667 10.2985 14.9651 10 15.3333 10Z"
                      fill="#F1DAC4"
                    ></path>
                  </g>
                </svg>
                <span>Movies</span>
              </div>
            </button>
          </div>
          <div
            id="nav-item--shows"
            className="header_container__middle__nav__uv5qs header_nav-item__PWSg9 header_nav-item--shows__pleUj  "
          >
            <button
              className="button-base_outer__lo8Kr button-base_sm-32-16__Ab_82 button-base_secondary__N_MRW  button-base_empty__YOyMD header_tv-shows-button__uhvsY    "
              id="series_opener"
              aria-expanded="false"
              data-submenu-index="2"
              type="button"
            >
              <div className="button-base_inner__k9W0g">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.51122 0.378029C5.24664 0.121982 4.82459 0.128901 4.56854 0.393483C4.31249 0.658065 4.31941 1.08012 4.58399 1.33617L6.64769 3.33329H2C0.895431 3.33329 0 4.22872 0 5.33329V12.6666C0 13.7712 0.89543 14.6666 2 14.6666H14C15.1046 14.6666 16 13.7712 16 12.6666V5.33329C16 4.22872 15.1046 3.33329 14 3.33329H9.35229L11.416 1.33617C11.6806 1.08012 11.6875 0.658065 11.4314 0.393483C11.1754 0.128901 10.7533 0.121982 10.4888 0.378029L7.99999 2.78651L5.51122 0.378029ZM1.33333 5.33329C1.33333 4.9651 1.63181 4.66663 2 4.66663H14C14.3682 4.66663 14.6667 4.9651 14.6667 5.33329V12.6666C14.6667 13.0348 14.3682 13.3333 14 13.3333H2C1.63181 13.3333 1.33333 13.0348 1.33333 12.6666V5.33329Z"
                      fill="#F1DAC4"
                    ></path>
                  </g>
                </svg>
                <span>TV Shows</span>
              </div>
            </button>
          </div>
          <div
            id="nav-item--watchlist"
            className="header_container__middle__nav__uv5qs header_nav-item__PWSg9 header_nav-item--watchlist__viXJq "
          >
            <button
              className="button-base_outer__lo8Kr button-base_sm-32-16__Ab_82 button-base_secondary__N_MRW  button-base_empty__YOyMD     "
              data-submenu-index="3"
              type="button"
            >
              <div className="button-base_inner__k9W0g">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      d="M8 0C7.63181 0 7.33333 0.298477 7.33333 0.666667V7.33333H0.666667C0.298477 7.33333 0 7.63181 0 8C0 8.36819 0.298477 8.66667 0.666667 8.66667H7.33333V15.3333C7.33333 15.7015 7.63181 16 8 16C8.36819 16 8.66667 15.7015 8.66667 15.3333V8.66667H15.3333C15.7015 8.66667 16 8.36819 16 8C16 7.63181 15.7015 7.33333 15.3333 7.33333H8.66667V0.666667C8.66667 0.298477 8.36819 0 8 0Z"
                      fill="#F1DAC4"
                    ></path>
                  </g>
                </svg>
                <span>Watchlist</span>
              </div>
            </button>
          </div>
        </nav>
        <div className="header_container__right__qpB9n">
          <div
            id="nav-item--search"
            className="header_container__right__nav__mZeNw header_nav-item__PWSg9 header_nav-item--search__Y1z7F "
          >
            <button
              className="button-base_outer__lo8Kr button-base_sm-32-16__Ab_82 button-base_secondary__N_MRW  button-base_empty__YOyMD     "
              data-submenu-index="4"
              type="button"
            >
              <div className="button-base_inner__k9W0g">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.66667 0C4.89856 0 3.20286 0.702379 1.95262 1.95262C0.702379 3.20286 0 4.89856 0 6.66667C0 8.43478 0.702379 10.1305 1.95262 11.3807C3.20286 12.631 4.89856 13.3333 6.66667 13.3333C8.21114 13.3333 9.70037 12.7974 10.8857 11.8285L14.2905 15.2333C14.5509 15.4937 14.973 15.4937 15.2333 15.2333C15.4937 14.973 15.4937 14.5509 15.2333 14.2905L11.8285 10.8857C12.7974 9.70037 13.3333 8.21114 13.3333 6.66667C13.3333 4.89856 12.631 3.20286 11.3807 1.95262C10.1305 0.702379 8.43478 0 6.66667 0ZM2.89543 2.89543C3.89562 1.89524 5.25218 1.33333 6.66667 1.33333C8.08116 1.33333 9.43771 1.89524 10.4379 2.89543C11.4381 3.89562 12 5.25218 12 6.66667C12 8.08116 11.4381 9.43771 10.4379 10.4379C9.43771 11.4381 8.08116 12 6.66667 12C5.25218 12 3.89562 11.4381 2.89543 10.4379C1.89524 9.43771 1.33333 8.08116 1.33333 6.66667C1.33333 5.25218 1.89524 3.89562 2.89543 2.89543Z"
                      fill="#F1DAC4"
                    ></path>
                  </g>
                </svg>
                <span>Search</span>
              </div>
            </button>
          </div>
          <div
            id="nav-item--sign-up"
            className="header_container__right__nav__mZeNw header_nav-item__PWSg9 header_nav-item--sign-up__jpGVE"
          >
            <button
              className="button-base_outer__lo8Kr button-base_sm-32-14__ADzLo button-base_primary__2nq0a  button-base_solid__rqePh     "
              data-submenu-index="5"
              type="button"
            >
              <div className="button-base_inner__k9W0g">
                <span>Create Account</span>
              </div>
            </button>
          </div>
          <div
            id="nav-item--sign-in"
            className="header_container__right__nav__mZeNw header_nav-item__PWSg9 header_nav-item--sign-in__ZOnNW"
          >
            <button
              className="button-base_outer__lo8Kr button-base_sm-32-14__ADzLo button-base_primary__2nq0a  button-base_transparent__d3kp_     "
              data-submenu-index="6"
              type="button"
            >
              <div className="button-base_inner__k9W0g">
                <span>Sign In</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
