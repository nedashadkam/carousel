
const backgroundImagesArray = ['./assets/images/img-1.jpg', './assets/images/img-2.jpg', './assets/images/img-3.jpg', './assets/images/img-4.jpg'] ;




let currentIndex = 0;

    document.getElementById("container").style.backgroundImage = `url('${backgroundImagesArray[currentIndex]}')`;




    

let x = backgroundImagesArray.length;

function increase() {

    document.getElementById("icon1").style.display = 'inline';

    if(currentIndex < (x - 1)) {
    currentIndex++;
    document.getElementById("container").style.backgroundImage = `url('${backgroundImagesArray[currentIndex]}')`;
    }
    

    if(currentIndex == (x - 1)) {
        document.getElementById("icon2").style.display = "none";
    }

}







function decrease() {


    document.getElementById("icon2").style.display = 'inline';

    if(currentIndex > 0) {
       currentIndex--;
    document.getElementById("container").style.backgroundImage = `url('${backgroundImagesArray[currentIndex]}')`;     
    }
    
    if(currentIndex == 0) {
        document.getElementById("icon1").style.display = 'none';
    }


}



