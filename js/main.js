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
    let sportchannels = channels.filter(function(channel){
        return channel.category === "SPORT"
    })
    console.log(sportchannels)

    let allchannelBtn = document.querySelectorAll(".channel-button")

    allchannelBtn.forEach(function(button){
        button.addEventListener("click", function(){

            console.log("channel licked")

            let selectedchannel = channels.find(function(channel){
                return button.textContent.startsWith(channel.channelNumber)
            })
            console.log(selectedchannel)
            console.log(Object.keys(selectedchannel))
            console.log(selectedchannel.epg)

            player.textContent = selectedchannel.name

            player.innerHTML += `<img src="${selectedchannel.previewImage}">`
            player.innerHTML += `<p>${selectedchannel.category}"</p>`
            player.innerHTML += `<p>${selectedchannel.epg.currentProgram}</p>`
        })
    })
})


let sidebartrigger = document.querySelector("#sidebar-trigger")
let categorysidebar = document.querySelector("#category-sidebar")
let sidebarclose = document.querySelector("#close-sidebar")
let allchannels = document.querySelector("#all-chanels")
let sport = document.querySelector("#sport")
let news = document.querySelector("#news")
let entertainment = document.querySelector("#entertainment")

sport.addEventListener("click", function()
{
    console.log("sport clicked")
})

news.addEventListener("click", function()
{
    console.log("news clicked")
})

entertainment.addEventListener("click", function()
{
    console.log("entertainment cliked")
})

sidebartrigger.addEventListener("mouseenter", function()
{
    categorysidebar.classList.remove("-translate-x-full")
});

sidebarclose.addEventListener("click", function()
{
    categorysidebar.classList.add("-translate-x-full")
});