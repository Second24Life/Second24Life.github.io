jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

		// html Chart
		if($('#html').length) {

			var doughnutData = [{
					value: 100,
					color: "#7952b3"
				}
			];
			var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);
		};

		// css Chart
		if($('#css').length) {

			var doughnutData = [{
	        value: 90,
	        color: "#7952b3"
	      },
	      {
	        value: 10,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("css").getContext("2d")).Doughnut(doughnutData);
		};

 	 	// Javascript Chart
		if($('#javascript').length) {

			var doughnutData = [{
	        value: 80,
	        color: "#7952b3"
	      },
	      {
	        value: 20,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
		};

		// php Chart
		if($('#php').length) {

			var doughnutData = [{
	        value: 70,
	        color: "#7952b3"
	      },
	      {
	        value: 30,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("php").getContext("2d")).Doughnut(doughnutData);
		};

		// jquery Chart
		if($('#jquery').length) {

			var doughnutData = [{
	        value: 70,
	        color: "#7952b3"
	      },
	      {
	        value: 30,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("jquery").getContext("2d")).Doughnut(doughnutData);
		};

		// Bootstrap Chart
		if($('#bootstrap').length) {
			var doughnutData = [{
					value: 85,
					color: "#7952b3"
				},
				{
					value: 15,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);
		}

		// 1C-Bitrix Chart
		if($('#1c-bitrix').length) {
			var doughnutData = [{
					value: 60,
					color: "#7952b3"
				},
				{
					value: 40,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("1c-bitrix").getContext("2d")).Doughnut(doughnutData);
		}

		// WordPress Chart
		if($('#wordpress').length) {
			var doughnutData = [{
					value: 40,
					color: "#7952b3"
				},
				{
					value: 60,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);
		}
});
