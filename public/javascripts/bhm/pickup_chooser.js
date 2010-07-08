BHM.require('Pickups', function() {
  return BHM.withNS('PickupChooser', function(ns) {
    var changingPickup, pickups;
    changingPickup = false;
    pickups = BHM.Pickups;
    ns.addressStatusSelector = "#pickup-address";
    ns.addressStatusInner = "span";
    ns.pickupChooserSelector = "input[name='mission_participation[pickup_id]']";
    ns.fieldValue = function(element, value) {
      if (!(typeof element !== "undefined" && element !== null)) {
        element = $(ns.pickupChooserSelector);
      }
      if (typeof value !== "undefined" && value !== null) {
        return element.removeAttr("checked").filter("[value='" + value + "']").attr("checked", "checked");
      } else {
        return Number(element.filter(":checked").val());
      }
    };
    ns.setupFieldWatchers = function() {
      var element;
      element = $(ns.pickupChooserSelector);
      element.change(function() {
        var id;
        id = ns.fieldValue(element);
        changingPickup = true;
        pickups.selectPickup(id, true);
        changingPickup = false;
        return changingPickup;
      });
      pickups.onPickupSelect(function(pu) {
        $("" + ns.addressStatusSelector + " " + ns.addressStatusInner).text(pu.title);
        return ns.fieldValue(element, pu.id);
      });
      return element.change();
    };
    ns.setup = function() {
      $(ns.addressStatusSelector).show();
      return ns.setupFieldWatchers();
    };
    return ns.setup;
  });
});