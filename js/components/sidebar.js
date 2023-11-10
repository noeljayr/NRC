const  sideBar = document.querySelector(".side-bar");

sideBar.innerHTML = `
        <a href="dashboard.html" class="side-link">
          <i class="bi bi-house-fill"></i>
          Dashboard
        </a>
        

        <a href="news.html" class="side-link">
          <i class="bi bi-newspaper"></i>
          News
        </a>

    
        <a href="admins " class="side-link  active-side-link">
          <i class="bi bi-people-fill"></i>
          Admins
        </a>

`;