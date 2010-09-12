# Define the default BHM namespace
Shuriken.as 'BHM'

BHM.withBase (ns) ->
  ns.data    = (element, args...) -> $(element).dataAttr args...
  ns.hasData = (element, args...) -> $(element).hasDataAttr args...
  

$(document).ready -> $("input[placeholder]").placeholder()