const code = `
<nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: forestgreen;">
  <div class="container-fluid">
    <a class="navbar-brand" href="../index.html"><img src="../images/logo.png" alt="ForestCraft" class="img-fluid rounded-pill" style="width: 40px;"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="../index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../play.html">Play</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../gallery.html">Gallery</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Updates
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="changelog.html">Changelog</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="../updates/mobupdates.html">Mob Updates</a></li>
            <li><a class="dropdown-item" href="../updates/boulderupdates.html">Boulder Updates</a></li>
            <li><a class="dropdown-item" href="../updates/forestupdate.html">Forest Update</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="../updates/update-chains.html">Update Chains</a></li>
          </ul>
        </li>
    </div>
  </div>
</nav>
`;

document.getElementById("navSlot").innerHTML = code;

const toTop = document.createElement("a");
toTop.classList.add("btn", "btn-secondary", "fixed-bottom");
toTop.setAttribute("href", "#top");
toTop.setAttribute("style", "margin-left: 90%;");
toTop.innerHTML = "&uarr;";
document.body.appendChild(toTop);

const faviconCode = `
<link rel="icon" type="image/png" href="../images/logo.png">
`;

document.head.innerHTML += faviconCode;