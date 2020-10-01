CRM.$(function($) {
  let searchParams = new URLSearchParams(window.location.search);
  let sent = searchParams.get('sent');
  console.log(sent);
});
