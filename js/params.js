CRM.$(function($) {
  let searchParams = new URLSearchParams(window.location.search);
  let sent = searchParams.get('amount');
  let freq = searchParams.get('freq');
  if(sent == '2000') {
    $('#CIVICRM_QFID_1079_4').trigger('click');
  }
  else if (sent == '1000') {
    $('#CIVICRM_QFID_1080_6').trigger('click');
  }
  else if (sent == '500') {
    $('#CIVICRM_QFID_1081_8').trigger('click');
  }
  else if (sent == '100') {
    $('#CIVICRM_QFID_1082_10').trigger('click');
  }
  else if (sent == '50') {
    $('#CIVICRM_QFID_1083_12').trigger('click');
  }
  else if (sent) {
    $('#CIVICRM_QFID_0_16').trigger('click');
    $('#price_94').val(sent);
  }

  if (freq == 'once') {
    //do nothing
  }
  if (freq == 'weekly') {
    $('#is_recur').trigger('click');
    $('#frequency_unit').val('week');
  }
  if (freq == 'monthly') {
    $('#is_recur').trigger('click');
    $('#frequency_unit').val('month');
  }

});
