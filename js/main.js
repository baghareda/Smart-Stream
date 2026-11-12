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

const furl = "https://api.npoint.io/b623f45eec11093d64aa"

fetch(furl)
.then(function(response){
    return response.json()
})
.then(function(channels){

    function displaychannels(channellist){

        channelslist.innerHTML = ""
        for (let channel of channellist)
        {
            channelslist.innerHTML += `<button class="channel-button bg-gray-700 hover:bg-gray-600 p-4 mb-4
            rounded-lg cursor-pointer w-full text-left">${channel.channelNumber}
            - ${channel.name}</button>`
        }
        let allchannelBtn = document.querySelectorAll(".channel-button")

        allchannelBtn.forEach(function(button){
        button.addEventListener("click", function(){

            console.log("channel licked")

            let selectedchannel = channellist.find(function(channel){
                return button.textContent.startsWith(channel.channelNumber)
            })

            allchannelBtn.forEach(function(btn){
                btn.style.backgroundColor = ""
            })
            button.style.backgroundColor = "#f72585"
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
        categorysidebar.classList.add("-translate-x-full")
        currentchannel = sportchannels
    })

    let news = document.querySelector("#news")
    news.addEventListener("click", function()
    {
        displaychannels(newschannels)
        categorysidebar.classList.add("-translate-x-full")
        currentchannel = newschannels
    })

    let music = document.querySelector("#music")
    music.addEventListener("click", function()
    {
        displaychannels(musicchannels)
        categorysidebar.classList.add("-translate-x-full")
        currentchannel = musicchannels
    })

    let allchannels = document.querySelector("#all-chanels")
    allchannels.addEventListener("click", function(){
        displaychannels(channels)
        categorysidebar.classList.add("-translate-x-full")
    })

    let searchbar = document.querySelector("#search-bar")
    let currentchannel = channels

    searchbar.addEventListener("input", function(){
        let searchvalue = searchbar.value
            searchvalue = searchvalue.toLowerCase().trim()

        let filtredchannels = currentchannel.filter(function(channel){
            return channel.channelNumber.toString().includes(searchvalue) ||
                channel.name.toLowerCase().includes(searchvalue)
        })
        displaychannels(filtredchannels)
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
