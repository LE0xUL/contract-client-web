(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

})()

connectWeb3();

$("#lnkMetamask").click( (event) => {
  event.preventDefault();
  connectWeb3();
});

$("#btnSignOCVote").click( SignOCVote );
$("#btnValidOCVote").click( ValidOCVote );
$("#btnSendOCVote").click( SendOCVote );

$("#btnInvAcp").click( ()=> { SignOCInvit( true ) } );
$("#btnInvRjc").click( ()=> { SignOCInvit( false ) } );
$("#btnValidOCInvit").click( ValidOCInvit );
$("#btnSendOCInvit").click( SendOCInvit );

// $("#btnValidate").click( ()=> {        
//   $.ajax({
//       url: "/notes/" + id,
//       type: "get", //Change this to post or put
//       dataType: "json",
//       contentType: "application/json",
//       success: function(data) {
//           $($("#updateForm")[0].update_id).val(data.id);
//           $($("#updateForm")[0].updatetitle).val(data.title);
//           $($("#updateForm")[0].updatedescription).val(data.description)
//       },
//   });
// }); 