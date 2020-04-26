$(document).ready(function() {

	//Validation Rules
	//Allocations add up to 100%
	function cmpAllocation(){
		var equities = parseFloat($("#initialEquities").val());
		var bonds = parseFloat($("#initialBonds").val());
		var gold = parseFloat($("#initialGold").val());
		var cash = parseFloat($("#initialCash").val());
		if(equities + bonds + gold + cash == 100){
			return true;
		}else{
			return false;
		}
	}
	$("#initialEquities").keyup(function() {
		if(cmpAllocation()){
			$("#allocationError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#allocationError").show();
			$(".runSim").addClass("disabled");
		}
	});
	$("#initialBonds").keyup(function() {
		if(cmpAllocation()){
			$("#allocationError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#allocationError").show();
			$(".runSim").addClass("disabled");
		}
	});
	$("#initialGold").keyup(function() {
		if(cmpAllocation()){
			$("#allocationError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#allocationError").show();
			$(".runSim").addClass("disabled");
		}
	});
	$("#initialCash").keyup(function() {
		if(cmpAllocation()){
			$("#allocationError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#allocationError").show();
			$(".runSim").addClass("disabled");
		}
	});
	
	//Target Assets allocation add up to 100%
	function cmpTargetAllocation(){
		var equities = parseFloat($("#targetEquities").val());
		var bonds = parseFloat($("#targetBonds").val());
		var gold = parseFloat($("#targetGold").val());
		var cash = parseFloat($("#targetCash").val());
		if(equities + bonds + gold + cash == 100){
			return true;
		}else{
			return false;
		}
	}
		$("#targetEquities").keyup(function() {
		if(cmpTargetAllocation()){
			$("#targetAllocationError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#targetAllocationError").show();
			$(".runSim").addClass("disabled");
		}
	});
	$("#targetBonds").keyup(function() {
		if(cmpTargetAllocation()){
			$("#targetAllocationError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#targetAllocationError").show();
			$(".runSim").addClass("disabled");
		}
	});
	$("#targetGold").keyup(function() {
		if(cmpTargetAllocation()){
			$("#targetAllocationError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#targetAllocationError").show();
			$(".runSim").addClass("disabled");
		}
	});
	$("#targetCash").keyup(function() {
		if(cmpTargetAllocation()){
			$("#targetAllocationError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#targetAllocationError").show();
			$(".runSim").addClass("disabled");
		}
	});
	
	//Target Asset Years
	function cmpTargetYears(){
		var startYear = parseInt($("#changeAllocationStartYear").val());
		var endYear = parseInt($("#changeAllocationEndYear").val());
		var simulationStartYear = parseInt($("#simulationStartYear").val());
		if((startYear < endYear) && (startYear >= simulationStartYear)){
			return true;
		}else{
			return false;
		}
	}
	$("#changeAllocationStartYear").keyup(function() {
		if(cmpTargetYears()){
			$("#targetAllocationYearsError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#targetAllocationYearsError").show();
			$(".runSim").addClass("disabled");
		}
	});
	$("#changeAllocationEndYear").keyup(function() {
		if(cmpTargetYears()){
			$("#targetAllocationYearsError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#targetAllocationYearsError").show();
			$(".runSim").addClass("disabled");
		}
	});

	//Retirement Years Validation
	function cmpYears(){
		var simulationStartYear = parseInt($("#simulationStartYear").val());
		var retirementStartYear = parseInt($("#retirementStartYear").val());
		var endYear = parseInt($("#retirementEndYear").val());
		if((retirementStartYear < endYear) && (retirementStartYear >= simulationStartYear)){
			return true;
		}else{
			return false;
		}
	}
	$("#simulationStartYear").keyup(function() {
		if(cmpYears()){
			$("#yearsError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#yearsError").show();
			$(".runSim").addClass("disabled");
		}
	});
	$("#retirementStartYear").keyup(function() {
		if(cmpYears()){
			$("#yearsError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#yearsError").show();
			$(".runSim").addClass("disabled");
		}
	});
	$("#retirementEndYear").keyup(function() {
		if(cmpYears()){
			$("#yearsError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#yearsError").show();
			$(".runSim").addClass("disabled");
		}
	});
	
	//Initial Portfolio Validation
	function cmpPortfolio(){
		var portfolio = parseFloat($("#portfolioInitial").val());
		if((portfolio >= 0) && !(isNaN(portfolio))){
			return true;
		}else{
			return false;
		}
	}
	$("#portfolioInitial").keyup(function() {
		if(cmpPortfolio()){
			$("#portfolioError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#portfolioError").show();
			$(".runSim").addClass("disabled");
		}
	});
	

	//Spending Validation
	function cmpInitialSpending(){
		var spending = parseFloat($("#initialSpending").val());
		if((spending >= 0) && !(isNaN(spending))){
			return true;
		}else{
			return false;
		}
	}
	$("#initialSpending").keyup(function() {
		if(cmpInitialSpending()){
			$("#initialSpendingError").hide();
			$(".runSim").removeClass("disabled");
		}else{
			$("#initialSpendingError").show();
			$(".runSim").addClass("disabled");
		}
	});

});



//Pensions Validation
function cmpPensions() {
	var startYears = $('input[name^=pensionYear]').map(function(idx, elem) {
		return parseInt($(elem).val());
	}).get();
	var values = $('input[name^=pensionAmount]').map(function(idx, elem) {
		return parseFloat($(elem).val());
	}).get();
	var simulationStartYear = parseInt($("#simulationStartYear").val());
	var inflRate = $('input[name^=pensionInflationRate]').map(function(idx, elem) {
		return parseFloat($(elem).val());
	}).get();
	var inflType = $('select[name^=pensionInflationType]').map(function(idx, elem) {
		return elem.value;
	}).get();
	var yearsTrigger = true, rateTrigger = true, valueTrigger = true;
	for (var i = 0; i < startYears.length; i++) {
		if ((startYears[i] < simulationStartYear) || (isNaN(startYears[i]))) {
			yearsTrigger = false;
		}
		if(values[i] < 0 || (isNaN(values[i]))){
			valueTrigger = false;
		}
	}
	for (var i = 0; i < inflRate.length; i++) {
		if (((inflRate[i] < 0) || (isNaN(inflRate[i]))) && inflType[i] == "string:constant") {
			rateTrigger = false;
		}
	}
	if (yearsTrigger == true) {
		$("#pensionsError").hide();
		$(".runSim").removeClass("disabled");
	} else if (yearsTrigger == false) {
		$("#pensionsError").show();
		$(".runSim").addClass("disabled");
	}
	if (valueTrigger == true) {
		$("#pensionsValueError").hide();
		$(".runSim").removeClass("disabled");
	} else if (valueTrigger == false) {
		$("#pensionsValueError").show();
		$(".runSim").addClass("disabled");
	}
	if (rateTrigger == true) {
		$("#pensionsRateError").hide();
		$(".runSim").removeClass("disabled");
	} else if (rateTrigger == false) {
		$("#pensionsRateError").show();
		$(".runSim").addClass("disabled");
	}
}

$(document).on("keyup", "input[name^=pensionYear]", function() {
	cmpPensions();
});
$(document).on("keyup", "input[name^=pensionInflationRate]", function() {
	cmpPensions();
});
$(document).on("keyup", "input[name^=pensionAmount]", function() {
	cmpPensions();
});
$(document).on('change',"select[name^=pensionInflationType]",  function() {
	cmpPensions();
});


//Extra Spending Validation
function cmpExtraSpending() {
	var startYears = $("input[ng-model='extraSpending.startYear']");
	var endYears = $("input[ng-model='extraSpending.endYear']");
	var simulationStartYear = parseInt($("#simulationStartYear").val());
	var values = $("input[ng-model='extraSpending.val']");
	var inflRate = $("input[ng-model='extraSpending.inflationRate']");
	var inflType = $("select[ng-model='extraSpending.inflationType']");
	var recurring = $("select[ng-model='extraSpending.recurring']");
	var yearsTrigger = true, rateTrigger = true, valueTrigger = true;
	for (var i = 0; i < startYears.length; i++) {
		if ((parseInt(startYears[i].value) < simulationStartYear) || (isNaN(parseInt(startYears[i].value))) || (parseInt(startYears[i].value) >= parseInt(endYears[i].value))) {
			yearsTrigger = false;
		}
		if(parseFloat(values[i].value) < 0 || (isNaN(parseFloat(values[i].value)))){
			valueTrigger = false;
		}
		if(((isNaN(parseInt(startYears[i].value))) || (isNaN(parseInt(endYears[i].value)))) && recurring[i].value == 0){
			yearsTrigger = false;
		}
	}
	for (var i = 0; i < inflRate.length; i++) {
		if (((parseFloat(inflRate[i].value) < 0) || (isNaN(parseFloat(inflRate[i].value)))) && inflType[i].value == 1) {
			rateTrigger = false;
		}
	}
	if(yearsTrigger == true){
		$("#extraSpendingError").hide();
		$(".runSim").removeClass("disabled");
	}else if (yearsTrigger == false){
		$("#extraSpendingError").show();
		$(".runSim").addClass("disabled");
	}
	if(valueTrigger == true){
		$("#extraSpendingValueError").hide();
		$(".runSim").removeClass("disabled");
	}else if (valueTrigger == false){
		$("#extraSpendingValueError").show();
		$(".runSim").addClass("disabled");
	}
	if(rateTrigger == true){
		$("#extraSpendingRateError").hide();
		$(".runSim").removeClass("disabled");
	}else if (rateTrigger == false){
		$("#extraSpendingRateError").show();
		$(".runSim").addClass("disabled");
	}

}

$(document).on("keyup", "input[ng-model='extraSpending.endYear']", function() {
	cmpExtraSpending();
});
$(document).on("keyup", "input[ng-model='extraSpending.inflationRate']", function() {
	cmpExtraSpending();
});
$(document).on("keyup", "input[ng-model='extraSpending.startYear']", function() {
	cmpExtraSpending();
});
$(document).on("keyup", "input[ng-model='extraSpending.val']", function() {
	cmpExtraSpending();
});
$(document).on('change',"select[ng-model='extraSpending.inflationType']",  function() {
	cmpExtraSpending();
});
$(document).on('change',"select[ng-model='extraSpending.recurring']",  function() {
	cmpExtraSpending();
});

//Extra Income Validation
function cmpExtraIncome() {
	var startYears = $("input[ng-model='extraSaving.startYear']");
	var endYears = $("input[ng-model='extraSaving.endYear']");
	var simulationStartYear = parseInt($("#simulationStartYear").val());
	var values = $("input[ng-model='extraSaving.val']");
	var inflRate = $("input[ng-model='extraSaving.inflationRate']");
	var inflType = $("select[ng-model='extraSaving.inflationType']");
	var recurring = $("select[ng-model='extraSaving.recurring']");
	var yearsTrigger = true, rateTrigger = true, valueTrigger = true;
	for (var i = 0; i < startYears.length; i++) {
		if ((parseInt(startYears[i].value) < simulationStartYear) || (parseInt(startYears[i].value) >= parseInt(endYears[i].value))) {
			yearsTrigger = false;
		}
		if(((isNaN(parseInt(startYears[i].value))) || (isNaN(parseInt(endYears[i].value)))) && recurring[i].value == 0){
			yearsTrigger = false;
		}
		if(parseFloat(values[i].value) < 0 || (isNaN(parseFloat(values[i].value)))){
			valueTrigger = false;
		}
		if (((parseFloat(inflRate[i].value) < 0) || (isNaN(parseFloat(inflRate[i].value)))) && inflType[i].value == 1) {
			rateTrigger = false;
		}
	}

	if(yearsTrigger == true){
		$("#extraIncomeError").hide();
		$(".runSim").removeClass("disabled");
	}else if (yearsTrigger == false){
		$("#extraIncomeError").show();
		$(".runSim").addClass("disabled");
	}
	if(valueTrigger == true){
		$("#extraIncomeValueError").hide();
		$(".runSim").removeClass("disabled");
	}else if (valueTrigger == false){
		$("#extraIncomeValueError").show();
		$(".runSim").addClass("disabled");
	}
	if(rateTrigger == true){
		$("#extraIncomeRateError").hide();
		$(".runSim").removeClass("disabled");
	}else if (rateTrigger == false){
		$("#extraIncomeRateError").show();
		$(".runSim").addClass("disabled");
	}

}

$(document).on("keyup", "input[ng-model='extraSaving.endYear']", function() {
	cmpExtraIncome();
});
$(document).on("keyup", "input[ng-model='extraSaving.inflationRate']", function() {
	cmpExtraIncome();
});
$(document).on("keyup", "input[ng-model='extraSaving.startYear']", function() {
	cmpExtraIncome();
});
$(document).on("keyup", "input[ng-model='extraSaving.val']", function() {
	cmpExtraIncome();
});
$(document).on('change',"select[ng-model='extraSaving.inflationType']",  function() {
	cmpExtraIncome();
});
$(document).on('change',"select[ng-model='extraSaving.recurring']",  function() {
	cmpExtraIncome();
});

//Social Security Validation
function cmpSS(){
	var startYears = [$("input[ng-model='data.extraIncome.socialSecurity.startYear']"), $("input[ng-model='data.extraIncome.socialSecuritySpouse.startYear']")] ;
	var endYears = [$("input[ng-model='data.extraIncome.socialSecurity.endYear']"), $("input[ng-model='data.extraIncome.socialSecuritySpouse.endYear']")] ;    
	var simulationStartYear = parseInt($("#simulationStartYear").val());
	var values = [$("input[ng-model='data.extraIncome.socialSecurity.val']"), $("input[ng-model='data.extraIncome.socialSecuritySpouse.val']")] ;  
	var yearsTrigger = true, rateTrigger = true, valueTrigger = true;
	for (var i = 0; i < startYears.length; i++) {
		if ((parseInt(startYears[i][0].value) < simulationStartYear) || (parseInt(startYears[i][0].value) >= parseInt(endYears[i][0].value))) {
			yearsTrigger = false;
		}
		if(((isNaN(parseInt(startYears[i][0].value))) || (isNaN(parseInt(endYears[i][0].value))))){
			yearsTrigger = false;
		}
		if(parseFloat(values[i][0].value) < 0 || (isNaN(parseFloat(values[i][0].value)))){
			valueTrigger = false;
		}
	}

	if(yearsTrigger == true){
		$("#ssError").hide();
		$(".runSim").removeClass("disabled");
	}else if (yearsTrigger == false){
		$("#ssError").show();
		$(".runSim").addClass("disabled");
	}
	if(valueTrigger == true){
		$("#ssValueError").hide();
		$(".runSim").removeClass("disabled");
	}else if (valueTrigger == false){
		$("#ssValueError").show();
		$(".runSim").addClass("disabled");
	}

}
$(document).on("keyup", "input[ng-model='data.extraIncome.socialSecurity.endYear']", function() {
	cmpSS();
});
$(document).on("keyup", "input[ng-model='data.extraIncome.socialSecurity.startYear']", function() {
	cmpSS();
});
$(document).on("keyup", "input[ng-model='data.extraIncome.socialSecurity.val']", function() {
	cmpSS();
});
$(document).on("keyup", "input[ng-model='data.extraIncome.socialSecuritySpouse.endYear']", function() {
	cmpSS();
});
$(document).on("keyup", "input[ng-model='data.extraIncome.socialSecuritySpouse.startYear']", function() {
	cmpSS();
});
$(document).on("keyup", "input[ng-model='data.extraIncome.socialSecuritySpouse.val']", function() {
	cmpSS();
});

//Data Options Validation
function cmpDataOptions(){
	var startYear = $("input[ng-model='data.data.start']")[0].value;
	var endYear = $("input[ng-model='data.data.end']")[0].value;
	var simulationStartYear = $("input[ng-model='data.simulationStartYear']")[0].value;
	var retirementEndYear = $("input[ng-model='data.retirementEndYear']")[0].value;
	var currentYear = Math.max.apply(null,Object.keys(Market));
	var rate = $("input[ng-model='data.data.growth']")[0].value;
	var singleStart = $("input[ng-model='data.data.singleStart']")[0].value;
	var maxcape = $("input[ng-model='data.data.maxcape']")[0].value;
	var mincape = $("input[ng-model='data.data.mincape']")[0].value;
	var yearsTrigger = true, rateTrigger = true, yearTrigger = true, valueTrigger = true, capeTrigger = true;
	if ((parseInt(startYear) < 1871) || (parseInt(startYear) >= parseInt(endYear)) || (parseInt(endYear) > currentYear)) {
		yearsTrigger = false;
	}
	if(((isNaN(parseInt(startYear))) || (isNaN(parseInt(endYear))))){
		yearsTrigger = false;
	}
	if(	(parseInt(endYear) - parseInt(startYear)) <  (parseInt(retirementEndYear) - parseInt(retirementStartYear))					){
		yearsTrigger = false;
	}

	if (((parseFloat(rate) < 0) || (isNaN(parseFloat(rate))))) {
		rateTrigger = false;
	}

	if ((parseInt(singleStart) < 1871) || isNaN(parseInt(singleStart)) ||
		(currentYear - parseInt(singleStart)) <  (parseInt(retirementEndYear) - parseInt(simulationStartYear))){
		yearTrigger = false;
	}

	if ((parseFloat(mincape) < 0) || (parseFloat(maxcape) < 0) ||
		(parseFloat(mincape) >= parseFloat(maxcape))) {
		capeTrigger = false;
	}

	if(yearsTrigger){
		$("#dataError").hide();
		$(".runSim").removeClass("disabled");
	}else{
		$("#dataError").show();
		$(".runSim").addClass("disabled");
	}
	if(rateTrigger){
		$("#dataRateError").hide();
		$(".runSim").removeClass("disabled");
	}else{
		$("#dataRateError").show();
		$(".runSim").addClass("disabled");
	}
	if(yearTrigger){
		$("#dataSingleYearError").hide();
		$(".runSim").removeClass("disabled");
	}else{
		$("#dataSingleYearError").show();
		$(".runSim").addClass("disabled");
	}
	if(capeTrigger){
		$("#dataCapeError").hide();
		$(".runSim").removeClass("disabled");
	}else{
		$("#dataCapeError").show();
		$(".runSim").addClass("disabled");
	}

}
$(document).on("keyup", "input[ng-model='data.data.start']", function() {
	cmpDataOptions();
});
$(document).on("keyup", "input[ng-model='data.data.end']", function() {
	cmpDataOptions();
});
$(document).on("keyup", "input[ng-model='data.data.growth']", function() {
	cmpDataOptions();
});
$(document).on("keyup", "input[ng-model='data.data.singleStart']", function() {
	cmpDataOptions();
});
$(document).on("keyup", "input[ng-model='data.data.mincape']", function() {
	cmpDataOptions();
});
$(document).on("keyup", "input[ng-model='data.data.maxcape']", function() {
	cmpDataOptions();
});
