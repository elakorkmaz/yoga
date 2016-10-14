$( function() {
  $('#datepicker').datepicker({ minDate: 0, maxDate: "+12M" });
} );

$( function() {
$.widget( "ui.timespinner", $.ui.spinner, {
  options: {
    // seconds
    step: 60 * 1000,
    // hours
    page: 60
  },

  _parse: function( value ) {
    if ( typeof value === "string" ) {
      // already a timestamp
      if ( Number( value ) == value ) {
        return Number( value );
      }
      return +Globalize.parseDate( value );
    }
    return value;
  },

  _format: function( value ) {
    return Globalize.format( new Date(value), "t" );
  }
});

$( "#spinner" ).timespinner();

$( "#culture" ).on( "change", function() {
  var current = $( "#spinner" ).timespinner( "value" );
  Globalize.culture( $(this).val() );
  $( "#spinner" ).timespinner( "value", current );
});
} );
