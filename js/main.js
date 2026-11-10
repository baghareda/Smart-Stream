let channelslist = document.querySelector("#channels-list")

let player = document.querySelector("#player")

fetch("./data.json")
.then(function(response){
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
        button.addEventListener("click", function(){

            console.log("channel licked")

            let selectedchannel = channels.find(function(channel){
                return button.textContent.startsWith(channel.channelNumber)
            })
            console.log(selectedchannel)

            player.innerHTML = ""
            player.textContent = selectedchannel.name
            player.innerHTML += `<img src="${selectedchannel.previewImage}">`
        })
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