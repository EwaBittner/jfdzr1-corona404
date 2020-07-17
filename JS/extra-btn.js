function myFunction() {
    alert("Jeszcze nie działa, nie klikaj!");
    prompt("Ile to 2 x 2?")
    alert("Nie interesuje mnie to:) Nie działa to nie działa:P");
  }
  $(document).ready(function() {
    $('[data-toggle="popover"]').popover({
       placement: 'top',
       trigger: 'hover'
    });
 });