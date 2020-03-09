site.resources = (function ($) {
  "use strict"

  var Model = {
  },
  View = {
    resourceCardsClass: '.resource-card',
    resourceProdBtnId: '#resource-btn-prod',
    resourceBetaBtnId: '#resource-btn-beta',
    resourceBtnGroupBtnClass: '#resource-btns .btn-group .btn'
  },
  Controller = {
    showProdResourceCards: function initializeProdResourceCards() {
      $('[data-environment="beta"]').hide()
    },
    initializeResourcesBtns: function initializeResourcesBtns() {
      $(View.resourceProdBtnId).click(function() {
        console.log('Prod Button Clicked!')
        $(View.resourceBtnGroupBtnClass).removeClass('btn-primary').addClass('btn-light')
        $(this).removeClass('btn-light').addClass('btn-primary')

        $('[data-environment="beta"]').hide()
        $('[data-environment="prod"]').show()
      });

      $(View.resourceBetaBtnId).click(function() {
        console.log('Beta Button Clicked!')
        $(View.resourceBtnGroupBtnClass).removeClass('btn-primary').addClass('btn-light')
        $(this).removeClass('btn-light').addClass('btn-primary')

        $('[data-environment="beta"]').show()
        $('[data-environment="prod"]').hide()
      });
    },
    init: function init() {
      console.log('In skills:init()')
      Controller.showProdResourceCards()
      Controller.initializeResourcesBtns()
    }
  }
  
  return {
    init: Controller.init,
  };
})(jQuery);