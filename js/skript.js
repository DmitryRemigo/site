

const animItems = document.querySelectorAll('._anim');
if (animItems.length > 0) {

const animItems = document.querySelectorAll('._anim');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems [index];
			const animItemHight = animItem.offsetHeight;
			const animItemOffset = offset (animItem).top;
			const animItemStart = 4;


			let animPoint = window.innerHeight - animItemHight / animItemStart;
			if (animItemHight > window.innerHeight) {
			animPoint = window.innerHeight - window.innerHeight / animItemStart;
			}

			if ((pageYOffset > animItemOffset - animPoint) && pageYOffset < (animItemOffset + animItemHight)) {
				animItem.classList.add('activ');
			} else{ 
				if (!animItem.classList.contains('_animnon')) {
				animItem.classList.remove('activ');
				}
			}
		}
	}
function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

setTimeout(() => {
animOnScroll();
	},300);
}


$(function(){
	$('.burger').click(function(event){
		$('.wrappburger').toggleClass('activ');
		$('.nav_center').toggleClass('activ');
				$('.line_1').toggleClass('activ');
				$('.line_2').toggleClass('activ');
				$('.line_3').toggleClass('activ');
	});
	$('.usl , .port , .novos , .cont').click(function(event){
		$('.wrappburger').removeClass('activ');
		$('.nav_center').removeClass('activ');
				$('.line_1').removeClass('activ');
				$('.line_2').removeClass('activ');
				$('.line_3').removeClass('activ');
	});
});






	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems [index];
			const animItemHight = animItem.offsetHeight;
			const animItemOffset = offset (animItem).top;
			const animItemStart = 4;


			let animPoint = window.innerHeight - animItemHight / animItemStart;
			if (animItemHight > window.innerHeight) {
			animPoint = window.innerHeight - window.innerHeight / animItemStart;
			}

			if ((pageYOffset > animItemOffset - animPoint) && pageYOffset < (animItemOffset + animItemHight)) {
				animItem.classList.add('activ');
			} else{ 
				if (!animItem.classList.contains('_animnon')) {
				animItem.classList.remove('activ');
				}
			}
		}
	}
function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

setTimeout(() => {
animOnScroll();
	},300);
}


$(function(){
	$('.burger').click(function(event){
		$('.wrappburger').toggleClass('activ');
		$('.nav_center').toggleClass('activ');
				$('.line_1').toggleClass('activ');
				$('.line_2').toggleClass('activ');
				$('.line_3').toggleClass('activ');
	});

});





