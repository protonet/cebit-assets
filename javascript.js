$(function() {
  if (!protonet.config.user_is_stranger) {
    return;
  }
  
  var config = {
    "brought to you by": [
      {
        href:     "https://deskwanted.com/",
        "class":  "deskwanted"
      }, {
        href:     "http://www.car2go.com/",
        "class":  "car2go"
      }, {
        href:     "http://dreisechsnull.telekom.de/",
        "class":  "dsn"
      }
    ],
    "host": [
      {
        href:     "http://betahaus.de/",
        "class":  "betahaus"
      }
    ],
    "kindly supported by": [
      {
        href:     "http://www.bitkom.org/",
        "class":  "bitkom"
      }, {
        href:     "http://www.cebit.de/",
        "class":  "cebit"
      }
    ]
  };
  
  var $list = $("<ul>", { "class": "cebit-logo-container" });
  
  $.each(config, function(headline, logos) {
    var $item = $("<li>").appendTo($list);
    $.each(logos, function(i, logo) {
      $("<a>", $.extend(logo, { target: "_blank" })).appendTo($item);
    });
    $("<h4>", { text: headline }).appendTo($item);
  });
  
  $list.insertAfter(".welcome");
});