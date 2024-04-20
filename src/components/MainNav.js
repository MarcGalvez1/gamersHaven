function createMainNavbar() {
  // Create <nav> element
  const nav = document.createElement("nav");
  nav.className = "navbar navbar-expand-lg navbar-light custom-bg";

  // Create container for navbar
  const container = document.createElement("div");
  container.className = "container-fluid";

  // Create collapsible navigation div
  const collapseDiv = document.createElement("div");
  collapseDiv.className = "collapse navbar-collapse";
  collapseDiv.id = "nav-toggle";

  // Create unordered list for left-aligned items
  const ulLeft = document.createElement("ul");
  ulLeft.className = "navbar-nav me-auto mb-2 mb-lg-0";

  // Array of links for left-aligned items
  const links = ["Home", "Saved", "New Release", "Log-In"];
  // Create list items and anchor tags for each link
  links.forEach((linkText) => {
    const li = document.createElement("li");
    li.className = "nav-item";
    const a = document.createElement("a");
    a.className = "nav-link text-light";
    a.href = "#";
    a.textContent = linkText;
    li.appendChild(a);
    ulLeft.appendChild(li);
  });

  // Append left-aligned items to collapsible navigation div
  collapseDiv.appendChild(ulLeft);

  // Create unordered list for right-aligned items
  const ulRight = document.createElement("ul");
  ulRight.className = "navbar nav mx-auto";

  // Array of dropdown items with their respective sub-items
  const dropdownItems = [
    {
      text: "Console Type",
      items: ["Action", "Another action", "Something else here"],
    },
    {
      text: "Genre",
      items: ["Action", "Another action", "Something else here"],
    },
  ];

  // Create dropdown items and their respective sub-items
  dropdownItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "nav-item dropdown badge bg-dark ms-2";
    const a = document.createElement("a");
    a.className = "nav-link dropdown-toggle text-light";
    a.href = "#";
    a.setAttribute("role", "button");
    a.setAttribute("data-bs-toggle", "dropdown");
    a.setAttribute("aria-expanded", "false");
    a.textContent = item.text;

    const dropdownMenu = document.createElement("ul");
    dropdownMenu.className = "dropdown-menu";

    item.items.forEach((subItemText) => {
      const subItem = document.createElement("li");
      const subLink = document.createElement("a");
      subLink.className = "dropdown-item";
      subLink.href = "#";
      subLink.textContent = subItemText;
      subItem.appendChild(subLink);
      dropdownMenu.appendChild(subItem);
    });

    li.appendChild(a);
    li.appendChild(dropdownMenu);
    ulRight.appendChild(li);
  });

  // Append right-aligned items to container
  container.appendChild(collapseDiv);
  container.appendChild(ulRight);

  // Append container to nav
  nav.appendChild(container);

  return nav;
}

export default createMainNavbar;
