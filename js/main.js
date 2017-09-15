(function () {
	var  zip_code = document.getElementById('zip'),
		 zip_code_value = document.getElementById('zip').value;
	

	$( zip_code ).change(
		function () {
		    if (zip_code.value !== ""){
				$('.confirm_zip, .great').css({
					'display':'inherit',
				});

		}
	})
	.change();


$(document).ready(function(){
  $(document).scroll(function(){
    // проверяем
    checkPositionFix();
  });
  
  // после загрузки страницы сразу проверяем
  checkPositionFix();
  
  // проверка при ресайзе страницы
  $(window).resize(function(){
    checkPositionFix();
  });
  
});
	function checkPositionFix(){
		  // координаты дива
		  var div_position = $('.Enter_Zip').offset();
		  // отступ сверху
		  var div_top = div_position.top;
		  // отступ слева
		  var div_left = div_position.left;
		  // ширина
		  var div_width = $('.Enter_Zip').width();
		  // высота
		  var div_height = $('.Enter_Zip').height();
		  
		  // проскроллено сверху 
		  var top_scroll = $(document).scrollTop();
		  // проскроллено слева
		  var left_scroll = $(document).scrollLeft();
		  // ширина видимой страницы
		  var screen_width = $(window).width();
		  // высота видимой страницы
		  var screen_height = $(window).height();
		  
		  // координаты углов видимой области
		  var see_x1 = left_scroll;
		  var see_x2 = screen_width + left_scroll;
		  var see_y1 = top_scroll;
		  var see_y2 = screen_height + top_scroll;
		  
		  // координаты углов искомого элемента
		  var hz = 50;
		  var div_x1 = div_left;
		  var div_x2 = div_left + div_height;
		  var div_y1 = div_top;
		  var div_y2 = div_top + hz + div_width;
		  
		  // проверка - виден див полностью или нет
		  if( div_x1 >= see_x1 && div_x2 <= see_x2  && div_y2 >= see_y2 ){
		    // если виден
		    $('.user_price').removeClass('fix');
		    // $('.user_price').addClass('fix');
		    
		  }else{
		    // если не виден
		      // $('.user_price').removeClass('fix');
		     $('.user_price').addClass('fix');
		  }
		}

}());

function ConfirmZip () {
	var  select = document.getElementById('sel_car');
	$('.select_car').css({
		'display':'block',
	});

		$( select ).change(
		function () {
		    if (select.value != 1){
				$('.big_light, .warning').css({
					'display':'block',
				});
				$(document).ready(function(){
  $(document).scroll(function(){
    // проверяем
    checkPosition();
  });
  
  // после загрузки страницы сразу проверяем
  checkPosition();
  
  // проверка при ресайзе страницы
  $(window).resize(function(){
    checkPosition();
  });
  
});

// функция проверки полной видимости элемента
function checkPosition(){
  // координаты дива
  var div_position = $('.big_light, .warning').offset();
  // отступ сверху
  var div_top = div_position.top;
  // отступ слева
  var div_left = div_position.left;
  // ширина
  var div_width = $('.big_light, .warning').width();
  // высота
  var div_height = $('.big_light, .warning').height();
  
  // проскроллено сверху 
  var top_scroll = $(document).scrollTop();
  // проскроллено слева
  var left_scroll = $(document).scrollLeft();
  // ширина видимой страницы
  var screen_width = $(window).width();
  // высота видимой страницы
  var screen_height = $(window).height();
  
  // координаты углов видимой области
  var see_x1 = left_scroll;
  var see_x2 = screen_width + left_scroll;
  var see_y1 = top_scroll;
  var see_y2 = screen_height + top_scroll;
  
  // координаты углов искомого элемента
  var fifti = -50;
  var div_x1 = div_left;
  var div_x2 = div_left + fifti + div_height;
  var div_y1 = div_top;
  var div_y2 = div_top + fifti + div_width;
  
  // проверка - виден див полностью или нет
  if( div_x1 >= see_x1 && div_x2 <= see_x2  && div_y2 <= see_y2 ){
    // если виден
    $('.secondLi').addClass('active');
  }else{
    // если не виден
    $('.secondLi').removeClass('active');   
  }
}
			}
	})
	.change();
};

$('.dow').click(function () {
    $('html, body').stop().animate({scrollTop: 1300}, 'slow', 'swing');
});

$('.delateImg').click(function () {
    $('html, body').stop().animate({scrollTop: 700}, 'slow', 'swing');

    $('.user_price').css({
    	'display':'block'
    })
     $('.user_select_price').css({
    	'display':'none'
    })

    $('.big_light2').css({
    	'display':'none'
    })
});

$('.AddServ').click(function () {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');

    $('.user_price').css({
    	'display':'none'
    })
     $('.user_select_price').css({
    	'display':'block'
    })
});

$('.Go_back').click(function () {
    $('html, body').stop().animate({scrollTop: 700}, 'slow', 'swing');

    $('.big_light2').css({
    	'display':'none'
    })
});

$('.chrcircle').click(function () {
    $('.chrcircle').css({
    	'left':'1px'
    })
    $('.chkbody').css({
    	'background-color':'#c4c4c4'
    })
});


$('.location_user').click(function () {
    $('html, body').stop().animate({scrollTop: 160}, 'slow', 'swing');
});

$('.cars_user').click(function () {
    $('html, body').stop().animate({scrollTop: 410}, 'slow', 'swing');
});


function chechFn() {

	$('.DELL').css({
		'display':'none',
	});

	$('.big_light2').css({
		'display':'block',
		'height':'800px',
	});

	$('.chech').css({
		'display':'block',
	});
};


function OilChangeFn() {
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'360px',
	});
	$('.Appointment_Oil_Change').css({
		'display':'block',
	});
};

function AppointmentbrakeFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'604px',
	});
	$('.Appointment_brake').css({
		'display':'block',
	});
};

function AppointmentBrakePadsFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'437px',
	});
	$('.Appointment_brake_pads').css({
		'display':'block',
	});
};

function AppointmentEngineSoonFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'492px',
	});
	$('.Appointment_engine_soon').css({
		'display':'block',
	});
};

function ALTFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'540px',
	});
	$('.ALT').css({
		'display':'block',
	});
};

function AbsHelpFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'550px',
	});
	$('.abs_help').css({
		'display':'block',
	});
};

function AppointmentTempFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'550px',
	});
	$('.Appointment_Temp').css({
		'display':'block',
	});
};


function AppointmentCoolantFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'480px',
	});
	$('.Appointment_coolant').css({
		'display':'block',
	});
};

function AppointmentEngineOilFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'377px',
	});
	$('.Appointment_engine_oil').css({
		'display':'block',
	});
};

function AppointmentParkingBrakeFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'377px',
	});
	$('.Appointment_parking_brake').css({
		'display':'block',
	});
};

function Appointment_ThrottleFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'456px',
	});
	$('.Appointment_Throttle').css({
		'display':'block',
	});
};

function AppointmentTractionFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'594px',
	});
	$('.Appointment_traction').css({
		'display':'block',
	});
};

function AppointmentSteeringFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'521px',
	});
	$('.Appointment_steering').css({
		'display':'block',
	});
};

function AppointmentSecurityFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'333px',
	});
	$('.Appointment_Security').css({
		'display':'block',
	});
};


function TireFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'375px',
	});
	$('.Tire').css({
		'display':'block',
	});
};


function IndicatorLightFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'303px',
	});
	$('.indicator_light').css({
		'display':'block',
	});
};

function AppointmentOverdrivFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'398px',
	});
	$('.Appointment_Overdrive').css({
		'display':'block',
	});
};

function AppointmentSeatBeltFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'370px',
	});
	$('.Appointment_seat_belt').css({
		'display':'block',
	});
};

function AppointmentCatalyticOnverteFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'398px',
	});
	$('.Appointment_catalytic_converte').css({
		'display':'block',
	});
};

function AppointmentTransmissionTemperatureFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'323px',
	});
	$('.Appointment_Transmission_Temperature').css({
		'display':'block',
	});
};

function AppointmentAirbagSystemFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'453px',
	});
	$('.Appointment_airbag_system').css({
		'display':'block',
	});
};

function AppointmentDefrostFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'266px',
	});
	$('.Appointment_Defrost').css({
		'display':'block',
	});
};

function AppointmentFogLightsFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'248px',
	});
	$('.Appointment_fog_lights').css({
		'display':'block',
	});
};

function AppointmentExteriorLightsFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'248px',
	});
	$('.Appointment_exterior_lights').css({
		'display':'block',
	});
};

function AppointmentReducedPowerFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'447px',
	});
	$('.Appointment_Reduced_Power').css({
		'display':'block',
	});
};

function AppointmentGasCapFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'380px',
	});
	$('.Appointment_gas_cap').css({
		'display':'block',
	});
};

function AppointmentBeamLightFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'280px',
	});
	$('.Appointment_Beam_Light').css({
		'display':'block',
	});
};

function AppointmentCarIsOpenFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'280px',
	});
	$('.Appointment_car_is_open').css({
		'display':'block',
	});
};

function AppointmentWasherFluidFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'280px',
	});
	$('.Appointment_Washer_fluid').css({
		'display':'block',
	});
};













