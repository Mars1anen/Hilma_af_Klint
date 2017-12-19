var pictures = document.querySelectorAll(".gallery_item");
var previousImageArrow = document.querySelector("#previous_pic");
var nextImageArrow = document.querySelector("#next_pic");
var count = 1;

function previousImage (handler) {
	if (count > 1) {
		pictures[count-1].parentNode.classList.remove('current');
		pictures[count-2].parentNode.classList.add('current');	
		count -= 1;
	} else if (count === 1) {
		pictures[count-1].parentNode.classList.remove('current');
		pictures[2].parentNode.classList.add('current');
		count = 3;
	}
}

function nextImage (handler) {
	if (count < 3) {
		pictures[count-1].parentNode.classList.remove('current');
		pictures[count].parentNode.classList.add('current');	
		count += 1;
	} else if (count === 3) {
		pictures[count-1].parentNode.classList.remove('current');
		pictures[0].parentNode.classList.add('current');
		count = 1;	
	}
}

previousImageArrow.addEventListener("click", previousImage, false);
nextImageArrow.addEventListener("click", nextImage, false);
