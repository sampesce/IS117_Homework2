
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var screen1 = document.getElementById('screen1');
var screen2 = document.getElementById('screen2');

var app = {
    // Application Constructor
		
    initialize: function() {
        this.bindEvents();

    },

    bindEvents: function() {
		button1.addEventListener('click', this.moveScreen2, false);
		button2.addEventListener('click', this.moveScreen1, false);
    },

    moveScreen2: function() {

		//screen1.classList.add('horizTranslate');
		//screen1.style.display = 'none';
		//screen2.style.display = 'block';
		//screen1.classList.remove('horizTranslate');
		//screen1.style.margin = '30px';
		$('#screen1').animate({
			'margin-left': '15%',
		}, {
			duration: 500,
			complete: function () {
				screen1.style.display = 'none';
				screen2.style.display = 'block';
				screen1.style.margin = '30px';
			}	
		});
		
    },
	moveScreen1: function() {
	
		//screen2.classList.add('horizTranslate');
        //screen2.style.display = 'none';
		//screen1.style.display = 'block';
		//screen2.classList.remove('horizTranslate');
		//screen2.style.margin = '30px';
		$('#screen2').animate({
			'margin-left': '15%',
		}, {
			duration: 500,
			complete: function () {
				screen2.style.display = 'none';
				screen1.style.display = 'block';
				screen2.style.margin = '30px';
			}	
		});		
    }

};
