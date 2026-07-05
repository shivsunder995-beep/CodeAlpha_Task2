const images = [
    "image8.jpeg",
    "image3.jpg.jpg",
    "image2.jpg.jpg",
    "image7.jpg.jpg",
    "image5.jpg.jpg",
    "image4.jpg.jpg"
];

let current = 0;

function openLightbox(index){

    current = index;

    document.getElementById("lightbox").style.display="flex";

    document.getElementById("lightbox-img").src=images[current];

}

function closeLightbox(){

    document.getElementById("lightbox").style.display="none";

}

function changeImage(step){

    current += step;

    if(current < 0){
        current = images.length-1;
    }

    if(current >= images.length){
        current = 0;
    }

    document.getElementById("lightbox-img").src=images[current];

}

function filterSelection(category){

    let items = document.getElementsByClassName("image");

    for(let i=0;i<items.length;i++){

        if(category=="all"){

            items[i].style.display="block";

        }

        else if(items[i].classList.contains(category)){

            items[i].style.display="block";

        }

        else{

            items[i].style.display="none";

        }

    }

}