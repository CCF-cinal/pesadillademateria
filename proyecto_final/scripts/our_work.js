let layer = document.getElementById("layer");
let layer_frame = document.getElementById("layer-frame");
let close_btn = document.getElementById("close-btn");

let images = document.getElementsByClassName("mosaic-card");

for (let i=0; i<images.length; i++){
    images[i].addEventListener("click", () => {
        let current_id = images[i].id;
        let focus_image = document.getElementById("focus-image");
        let focus_title = document.getElementById("focus-title");
        let focus_text = document.getElementById("focus-text");
        let focus_btn = document.getElementById("focus-btn");

        focus_image.src=image_data[current_id].src;
        focus_title.textContent=image_data[current_id].title;
        focus_text.textContent=image_data[current_id].desciption;
        focus_btn.textContent=image_data[current_id].button_text;
        focus_btn.href=image_data[current_id].button_src;

        layer.classList.remove("hidden");
        layer_frame.classList.remove("hidden");
    });
}

close_btn.addEventListener("click", ()=>{
    layer.classList.add("hidden");
    layer_frame.classList.add("hidden");
});

layer_frame.addEventListener("click", (event)=>{
    layer.classList.add("hidden");
    layer_frame.classList.add("hidden");
});

let image_data = {
    des1 : {
        src : "imagenes/work-des1.png",
        title: "AB&H Excavating INC Shirt",
        desciption: "Make your business official with company t-shirts. Send us your logo or start from scratch. It's that easy.",
        button_text: "Go to our Design Page",
        button_src: "design.html"
    },
    des2 : {
        src : "imagenes/work-des2.png",
        title: "Star 98.3 Separations feat. Scott",
        desciption: "Every design has its separations. Let us help you with your new design today!",
        button_text: "Go to our Design Page",
        button_src: "design.html"
    },
    emb1 : {
        src : "imagenes/work-emb1.png",
        title: "Custom Backpack for Zack",
        desciption: "Zack tends to lose his stuff, but not anymore! Make sure your kid is prepared for the school year with a personalized embroidered backpack.",
        button_text: "Go to our Embroidery Page",
        button_src: "embroidery.html"
    },
    emb2 : {
        src : "imagenes/work-emb2.png",
        title: "Embroidered Aircraft Jacket",
        desciption: "Name that Aircraft!🤔"+"#SupportTheVets 🇺🇸",
        button_text: "Go to our Embroidery Page",
        button_src: "embroidery.html"
    },
    lett1 : {
        src : "imagenes/work-lett1.png",
        title: "Finished Decal",
        desciption: "rgertg gr",
        button_text: "Go to our Signs & Vehicle Lettering Page",
        button_src: "signs_and_vehicle_lettering.html"
    },
    lett2 : {
        src : "imagenes/work-lett2.png",
        title: "Vehicle Decal",
        desciption: "tgetgrrtg",
        button_text: "Go to our Signs & Vehicle Lettering Page",
        button_src: "signs_and_vehicle_lettering.html"
    },
    prom1 : {
        src : "imagenes/work-prom1.png",
        title: "Koozies",
        desciption: "Custom Koozie? ✅Keeps Drink Cold? ✅Cool Background? ✅Alcohol? 👎 On the clock… #PromotionalProducts",
        button_text: "Go to our Promotional Products Page",
        button_src: "promotional_products.html"
    },
    prom2 : {
        src : "imagenes/work-prom2.png",
        title: "Ryken Knights Lanyards",
        desciption: "Show your company pride on a multi-functional custom lanyard. Thanks to St. Mary's Ryken for your recent order!",
        button_text: "Go to our Promotional Products Page",
        button_src: "promotional_products.html"
    },
    scree1 : {
        src : "imagenes/work-scree1.png",
        title: "St. Mary's County Fair Horse Pull 2019 Shirts",
        desciption: "J.M. Tennyson Construction is supporting the community with these GREAT looking shirts!",
        button_text: "Go to our Screen Printing Page",
        button_src: "screen_printing.html"
    },
    scree2 : {
        src : "imagenes/work-scree2.png",
        title: "A & G Electric Shirts",
        desciption: "Sometimes a 2 color print is all you need to stand out!",
        button_text: "Go to our Screen Printing Page",
        button_src: "screen_printing.html"
    }
};