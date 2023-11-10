const navbar = document.querySelector(".navbar")


if(navbar){
  var icon = "tabler-icon-arrow-right.svg";
  if(navbar.classList.contains("navbar-2")){
    icon = "tabler-icon-arrow-right-white.svg";
  }else{
    icon = "tabler-icon-arrow-right.svg";
  }
  navbar.innerHTML = `
 <a href="/" class="logo">
        <img src="/public/logos/logo.png" alt="" />
      </a>
      <span class="links">
        <a class="navlink" href="/index.html">Home</a>

        <a class="navlink" href="Youth Governance.html">Youth Governance</a>
        <a class="navlink" href="philosophy.html">Philosophy</a>
        <a class="navlink" href="projects.html">Projects</a>
        <a class="navlink" href="news.html">News</a>
        <a class="navlink" href="profile.html">Profile</a>

        <a class="cta nav-cta" href="get involved.html">
          Get involved
          <img
            src="public/icons/${icon}"
            alt="right-icon"
          />
        </a>

        <span class="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </span>
      </span>

      <span class="menu-list">
        <a class="" href="/index.html">Home</a>

        <a class="" href="Youth Governance.html">Youth Governance</a>
        <a class="" href="philosophy.html">Philosophy</a>
        <a class="" href="projects.html">Projects</a>
        <a class="" href="news.html">News</a>
        <a class="" href="profile.html">Profile</a>

        <a class="cta nav-cta" href="get involved.html">
          Get involved
          <img
            src="public/icons/tabler-icon-arrow-right.svg"
            alt="right-icon"
          />
        </a>
      </span>


`;
}

