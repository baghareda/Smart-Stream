let sidebartrigger = document.querySelector("#sidebar-trigger")
let categorysidebar = document.querySelector("#category-sidebar")

sidebartrigger.addEventListener("mouseenter", function()
{
    categorysidebar.classList.remove("-translate-x-full")
});

sidebartrigger.addEventListener("mouseleave", function()
{
    categorysidebar.classList.add("-translate-x-full")
});
