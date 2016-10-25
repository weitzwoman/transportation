$(document).ready(function(){
  $("form#transportationSurvey").submit(function(event){
    event.preventDefault();
    $("#workResponses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#workResponses').append(workTransportationMode + "<br>");
    });

    $("#funResponses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#funResponses').append(funTransportationMode + "<br>");
    });

    $('#transportationSurvey').hide();
  });
});
