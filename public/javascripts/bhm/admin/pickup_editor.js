BHM.withNS('Admin.PickupEditor', function(ns) {
  ns.fieldsetSelector = '.pickup-input';
  ns.removeSelector = 'a.remove-pickup-link';
  ns.addSelector = 'a.add-pickup-link';
  ns.template = '';
  ns.attachEvents = function attachEvents() {
    $(ns.addSelector).click(function() {
      ns.addPickup();
      return false;
    });
    return $(ns.fieldsetSelector).each(function() {
      return ns.attachEventOn($(this));
    });
  };
  ns.attachEventOn = function attachEventOn(fs) {
    return fs.find(ns.removeSelector).click(function() {
      ns.deletePickup(this);
      return false;
    });
  };
  ns.addPickup = function addPickup() {
    var inner;
    inner = ns.template.replace(/PICKUP_IDX/g, Number(new Date()));
    $(("" + ns.fieldsetSelector + ":last")).after(inner);
    return ns.attachEventOn($(("" + ns.fieldsetSelector + ":last")));
  };
  ns.deletePickup = function deletePickup(link) {
    link = $(link);
    return link.parents(ns.fieldsetSelector).find("input[type=hidden]").val('1').end().hide();
  };
  ns.setup = function setup() {
    return ns.attachEvents();
  };
  return ns.setup;
});