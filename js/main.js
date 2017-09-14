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

}());

function ConfirmZip () {
	var  select = document.getElementById('sel_car');
	$('.select_car').css({
		'display':'block',
	});

		$( select ).change(
		function () {
		    if (select.value != 1){
		    	console.log('1');
				$('.big_light, .warning').css({
					'display':'block',
				});
			}
	})
	.change();
};

function chechFn() {
	$('.DELL').css({
		'display':'none',
	});

	$('.chech').css({
		'display':'block',
	});
};


function OilChangeFn() {
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_Oil_Change').css({
		'display':'block',
	});
};

function AppointmentbrakeFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_brake').css({
		'display':'block',
	});
};

function AppointmentBrakePadsFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_brake_pads').css({
		'display':'block',
	});
};

function AppointmentEngineSoonFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_engine_soon').css({
		'display':'block',
	});
};

function ALTFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.ALT').css({
		'display':'block',
	});
};

function AbsHelpFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.abs_help').css({
		'display':'block',
	});
};

function AppointmentTempFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_Temp').css({
		'display':'block',
	});
};


function AppointmentCoolantFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_coolant').css({
		'display':'block',
	});
};

function AppointmentEngineOilFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_engine_oil').css({
		'display':'block',
	});
};

function AppointmentParkingBrakeFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_parking_brake').css({
		'display':'block',
	});
};

function Appointment_ThrottleFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_Throttle').css({
		'display':'block',
	});
};

function AppointmentTractionFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_traction').css({
		'display':'block',
	});
};

function AppointmentSteeringFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_steering').css({
		'display':'block',
	});
};

function AppointmentSecurityFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_Security').css({
		'display':'block',
	});
};


function TireFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Tire').css({
		'display':'block',
	});
};


function IndicatorLightFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.indicator_light').css({
		'display':'block',
	});
};

function AppointmentOverdrivFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_Overdrive').css({
		'display':'block',
	});
};

function AppointmentSeatBeltFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_seat_belt').css({
		'display':'block',
	});
};

function AppointmentCatalyticOnverteFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_catalytic_converte').css({
		'display':'block',
	});
};

function AppointmentTransmissionTemperatureFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_Transmission_Temperature').css({
		'display':'block',
	});
};

function AppointmentAirbagSystemFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_airbag_system').css({
		'display':'block',
	});
};

function AppointmentDefrostFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_Defrost').css({
		'display':'block',
	});
};

function AppointmentFogLightsFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_fog_lights').css({
		'display':'block',
	});
};

function AppointmentExteriorLightsFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_exterior_lights').css({
		'display':'block',
	});
};

function AppointmentReducedPowerFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_Reduced_Power').css({
		'display':'block',
	});
};

function AppointmentGasCapFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_gas_cap').css({
		'display':'block',
	});
};

function AppointmentBeamLightFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_Beam_Light').css({
		'display':'block',
	});
};

function AppointmentCarIsOpenFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_car_is_open').css({
		'display':'block',
	});
};

function AppointmentWasherFluidFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.Appointment_Washer_fluid').css({
		'display':'block',
	});
};
















