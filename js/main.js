let channelslist = document.querySelector("#channels-list")
let player = document.querySelector("#player")

function displaychannel(channel)
{
    player.innerHTML = `
        <h2>${channel.name}</h2>
        <img src ="${channel.previewImage}">
        <p>${channel.category}</p>
        <p>${channel.epg.currentProgram}</p>
    `
}

fetch("./data.json")
.then(function(response){
    return response.json()
})
.then(function(channels){

    function displaychannels(channellist){

        channelslist.innerHTML = ""
        for (let channel of channellist)
        {
            channelslist.innerHTML += `<button class="channel-button">${channel.channelNumber}
            - ${channel.name}</button>`
        }
        let allchannelBtn = document.querySelectorAll(".channel-button")

        allchannelBtn.forEach(function(button){
        button.addEventListener("click", function(){

            console.log("channel licked")

            let selectedchannel = channellist.find(function(channel){
                return button.textContent.startsWith(channel.channelNumber)
            })
            displaychannel(selectedchannel)
        })
    })
    }
     displaychannels(channels)

    let sportchannels = channels.filter(function(channel){
        return channel.category === "SPORT"
    })

    let newschannels = channels.filter(function(channel){
        return channel.category === "NEWS"
    })

    let musicchannels = channels.filter(function(channel){
        return channel.category === "MUSIQUE"
    })

    let sport = document.querySelector("#sport")
    sport.addEventListener("click", function()
    {
        displaychannels(sportchannels)
    })

    let news = document.querySelector("#news")
    news.addEventListener("click", function()
    {
        displaychannels(newschannels)
    })

    let music = document.querySelector("#music")
    music.addEventListener("click", function()
    {
        displaychannels(musicchannels)
    })

    let allchannels = document.querySelector("#all-chanels")
    allchannels.addEventListener("click", function(){
        displaychannels(channels)
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