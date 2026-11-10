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
            displaychannel(selectedchannel)
        })
    })

    let sportchannels = channels.filter(function(channel){
        return channel.category === "SPORT"
    })
    console.log(sportchannels)

    let sport = document.querySelector("#sport")

    sport.addEventListener("click", function()
    {
        channelslist.innerHTML = ""

        for (let channelsp of sportchannels)
        {
            channelslist.innerHTML += `<button class="channel-button">${channelsp.channelNumber} - ${channelsp.name}</button>`
        }

        let sportbutton = document.querySelectorAll(".channel-button")

        sportbutton.forEach(function(button){
            button.addEventListener("click", function(){
                let selectedchannel = channels.find(function(channel){
                    
                    return button.textContent.startsWith(channel.channelNumber)
                })
                displaychannel(selectedchannel)
            })
        })
    })
})


let sidebartrigger = document.querySelector("#sidebar-trigger")
let categorysidebar = document.querySelector("#category-sidebar")
let sidebarclose = document.querySelector("#close-sidebar")
let allchannels = document.querySelector("#all-chanels")
let news = document.querySelector("#news")
let entertainment = document.querySelector("#entertainment")

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