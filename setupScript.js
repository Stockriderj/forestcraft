const code = `
<nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: forestgreen;">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">ForestCraft</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./play.html">Play</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="gallery.html">Gallery</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Updates
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="./updates/changelog.html">Changelog</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="./updates/commandsupdates.html">Commands Updates</a></li>
            <li><a class="dropdown-item" href="./updates/forestupdate.html">Forest Update</a></li>
          </ul>
        </li>
    </div>
  </div>
</nav>
`;

document.getElementById("navSlot").innerHTML = code;