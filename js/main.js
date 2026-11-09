let channelslist = document.querySelector("#channels-list")

fetch("./data.json")
.then(function(response) {
    return response.json()
})
.then(function(channels){
    for (let channel of channels)
    {
        channelslist.innerHTML += `<button class="channel-button">${channel.channelNumber}
         - ${channel.name}</button>`
    }
    let allchannelBtn = document.querySelectorAll(".channel-button")

    allchannelBtn.forEach(function(button){
        
    })
})


let sidebartrigger = document.querySelector("#sidebar-trigger")
let categorysidebar = document.querySelector("#category-sidebar")
let sidebarclose = document.querySelector("#close-sidebar")

sidebartrigger.addEventListener("mouseenter", function()
{
    categorysidebar.classList.remove("-translate-x-full")
});

sidebarclose.addEventListener("click", function()
{
    categorysidebar.classList.add("-translate-x-full")
});