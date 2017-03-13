$(document).ready(function(){
  $('#submit-btn').click(function(){
  event.preventDefault();
  var city = $('#city-type').val();
  $('#city-type').val('');

    // if input ID == New York, New York City or NYC
    // change background to nyc.jpg
    if(city == 'New York' || city == 'New York City' || city == 'NYC') { 
    $('body').attr('class','nyc');
    }

    // if input ID == San Francisco, SF or Bay Area
    // change background to sf.jpg
    else if(city == 'San Francisco' || city == 'SF' || city == 'Bay Area') { 
    $('body').attr('class','sf');
    }

    // if input ID == Los Angeles or LA or LAX
    // change background to la.jpg
    else if(city == 'Los Angeles' || city == 'LA' || city == 'LAX') { 
    $('body').attr('class','la');
    }

    // if input ID == Austin or ATX
    // change background to austin.jpg
    else if(city == 'Austin' || city == 'ATX') { 
    $('body').attr('class','austin');
    }

    // if input ID == Sydney or SYD
    // change background to sydney.jpg
    else if(city == 'Sydney' || city == 'SYD') { 
    $('body').attr('class','sydney');
    }

  });
});