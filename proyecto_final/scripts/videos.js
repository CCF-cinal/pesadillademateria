let video_layer = document.getElementById("video-layer");
let video_layer_frame = document.getElementById("video-layer-frame");
let close_btn = document.getElementById("close-btn");
let video_frame = document.getElementById("player")

let image_containers = document.getElementsByClassName("image-container");

for (let i=0; i<image_containers.length; i++){
    image_containers[i].addEventListener("click", () => {
        let container_id = image_containers[i].id;
        player.src = video_list[container_id].src;
        player.title = video_list.title;
        video_layer.classList.remove("hidden");
        video_layer_frame.classList.remove("hidden");
    });
}

close_btn.addEventListener("click", ()=>{
    video_layer.classList.add("hidden");
    video_layer_frame.classList.add("hidden");
});

video_layer_frame.addEventListener("click", (event)=>{
    video_layer.classList.add("hidden");
    video_layer_frame.classList.add("hidden");
});

let video_list = {
    screwpile: {
    src:"https://www.youtube.com/embed/EUNCqGV-Da4",
    title:"Screwpile 2019 at CCE"},
    cone_island:{
        src: "https://www.youtube.com/embed/szFArxDpDF0",
        title: "CCE Spotlight: Cone Island"
    },
    frantz:{
        src:"https://www.youtube.com/embed/FQQouvEpMS8",
        title:"CCE Spotlight: Frantz Roofing"},
    ww19:{
        src:"https://www.youtube.com/embed/ctDj-SmzYLk",
        title:"WIN - WIN Month 2019"},
    em_prom:{
        src:"https://www.youtube.com/embed/X3Wj8nAiTdU",
        title:"Embroidery Promo - CCEINK"},
    scree_prom:{
        src:"https://www.youtube.com/embed/kAVRpt0zXbQ",
        title:"Screen Printing Promo - CCEINK"}
};