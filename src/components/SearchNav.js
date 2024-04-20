function createSearchNavbar() {
  // Create <nav> element
  const nav = document.createElement("nav");
  nav.className = "navbar navbar-light";
  nav.id = "search-nav";

  // Create <div> element for container
  const container = document.createElement("div");
  container.className = "container-fluid";

  // Create toggle button for collapsible navigation
  const toggleButton = document.createElement("button");
  toggleButton.className = "navbar-toggler";
  toggleButton.type = "button";
  toggleButton.setAttribute("data-bs-toggle", "collapse");
  toggleButton.setAttribute("data-bs-target", "#nav-toggle");
  toggleButton.setAttribute("aria-controls", "nav-toggle");
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.setAttribute("aria-label", "Toggle navigation");
  toggleButton.id = "toggle-icon";

  // Create icon inside toggle button
  const toggleIcon = document.createElement("span");
  toggleIcon.className = "navbar-toggler-icon";
  toggleButton.appendChild(toggleIcon);

  // Create title for the navbar
  const title = document.createElement("a");
  title.className = "title-font";
  title.id = "title";
  title.textContent = "Gamer's Haven";

  // Create search form
  const form = document.createElement("form");
  form.className = "d-flex search-size";

  // Create search input field
  const input = document.createElement("input");
  input.className = "form-control me-2";
  input.type = "search";
  input.placeholder = "Search";
  input.setAttribute("aria-label", "Search");
  form.appendChild(input);

  // Append elements to container
  container.appendChild(toggleButton);
  container.appendChild(title);
  container.appendChild(form);

  // Append container to nav
  nav.appendChild(container);

  return nav;
}

export default createSearchNavbar;
