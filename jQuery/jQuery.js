// destination
$(function() {
  $("#destination").selectmenu();
});

// Comfort level
$(function() {
  $("#comfort-level").selectmenu();
});

// Availability
$(function() {
  $("#activities").selectmenu();
});

// selectable
$(function() {
  $("#selectable").selectable({
    stop: function() {
      var result = $("#select-result").empty();
      $(".ui-selected", this).each(function() {
        var index = $("#selectable li").index(this);
        result.append(" #" + (index + 1));
      });
    }
  });
});

//data
$(function() {
  $("#time").selectmenu();
});

//price slider
$(function() {
  $("#slider-range").slider({
    range: true,
    min: 1254,
    max: 4200,
    values: [75, 300],
    slide: function(event, ui) {
      $("#amount").val(ui.values[0] + " -  " + ui.values[1]);
    }
  });

  $("#amount").val(
    $(" #slider-range").slider("values", 0) +
      " - " +
      $("#slider-range").slider("values", 1)
  );
});

// jquery widgets
$(function() {
  $("#tabs").tabs({
    event: "mouseover"
  });
});

// searching option
$(function() {
  $("#Search").on("click", function() {
    var destinationType = $("#destination").val();
    var comfortlevelType = $("#comfort-level").val();
    // var minBed =  $("#spinner2").val();
    // var date = $("#time").val();
    var minPrice = $("#slider-range").slider("option", "values")[0];
    var maxPrice = $("#slider-range").slider("option", "values")[1];

    var output = "<ul>";
    for (var i in data.resorts) {
      if (
        destinationType == data.resorts[i].destination ||
        destinationType == "Any"
      )
        if (
          comfortlevelType == data.resorts[i].comfortLevel ||
          comfortlevelType == "Any"
        )
          if (
            data.resorts[i].price >= minPrice &&
            data.resorts[i].price <= maxPrice
          ) {
            {
              {
                output +=
                  '<div class="col-md-4"><div class="feature-box"><div class="feature-img"><img src=' +
                  data.resorts[i].picture +
                  '><div class="price">' +
                  data.resorts[i].price +
                  '</p></div></div><div class="feature-details"><h4><a href= ' +
                  data.resorts[i].url +
                  ">" +
                  data.resorts[i].name +
                  "</a>" +
                  "</h4><p>" +
                  data.resorts[i].short_description +
                  '</p><div><span><i class="fa fa-map-marker" aria-hidden="true"> ' +
                  data.resorts[i].location +
                  "</i></span></div></div></div></div></div>";
              }
            }
          }
    }
    output += "</ul>";
    document.getElementById("Placeholder").innerHTML = output;
  });
});
