angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/events/events.html',
    "<div>\r" +
    "\n" +
    "    <table class=\"table\" ng-controller=\"eventsCtrl\">\r" +
    "\n" +
    "            <tr>\r" +
    "\n" +
    "                <td class=\"col-sm-1 col-xs-2\">ID#</td>\r" +
    "\n" +
    "                <td class=\"col-sm-2 col-xs-3\">Type</td>\r" +
    "\n" +
    "                <td class=\"col-sm-3 col-xs-5\">Event</td>\r" +
    "\n" +
    "                <td class=\"col-sm-2 col-xs-2\"></td>\r" +
    "\n" +
    "                <td class=\"col-sm-3 hidden-xs\"></td>\r" +
    "\n" +
    "                <td class=\"col-sm-1 hidden-xs\">RSVP'd</td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "            <tr ng-repeat=\"event in events\" ng-controller=\"eventCtrl\" ng-class=\"bgColor()\">\r" +
    "\n" +
    "                <td>{{ event.id }}</td>\r" +
    "\n" +
    "                <td>{{ event.type }}</td>\r" +
    "\n" +
    "                <td>{{ event.name }}</td>\r" +
    "\n" +
    "                <td><a ng-href=\"#/events/{{ event.id }}\">Details</a></td>\r" +
    "\n" +
    "                <td class=\"hidden-xs\" ng-show=\"event.response === ''\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"rsvp(event.id, 'Yes')\">Yes</button>\r" +
    "\n" +
    "                    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"rsvp(event.id, 'No')\">No</button>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td class=\"hidden-xs\" ng-show=\"event.response !== ''\">\r" +
    "\n" +
    "                    <a class=\"btn btn-success\" ng-href=\"#/events/{{ event.id }}\">Edit RSVP</a>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td class=\"hidden-xs\" ng-model='response'>{{ event.response }}</td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "    </table>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
