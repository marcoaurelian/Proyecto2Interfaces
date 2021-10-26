const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function disableSubmit() {
  document.getElementById("submit").disabled = true;
 }

  function activateButton(element) {

      if(element.checked) {
        document.getElementById("submit").disabled = false;
       }
       else  {
        document.getElementById("submit").disabled = true;
      }

  }


  $( function drag() {
  $( ".exp" ).draggable({
  cursor:'move',
  helper:'clone',
    } );
} );

  $(function drop(){
    $("#droppable").droppable({
      drop:function (event, ui) {
        ui.draggable.clone().appendTo($(this)).draggable();
        }
    } );
  } );


  $( function sort(){
    $( '.item#droppable' ).sortable();
    $( '.item#droppable' ).disableSelection();
  } );
  function allowDrop(ev) {
        ev.preventDefault();
    }

  function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

  function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");

        thisdiv = ev.target;
        $(document.getElementById(data)).insertBefore(thisdiv);
    }

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#draggable *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
