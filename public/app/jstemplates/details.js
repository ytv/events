angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('public/app/details/details.html',
    "<div>\n" +
    "    <h3>Event Details:</h3>\n" +
    "\n" +
    "    <div class=\"jumbotron\" ng-controller=\"detailsCtrl\">\n" +
    "        <h3>{{ eventDetails.name }} (id#: {{ eventDetails.id }})</h3>\n" +
    "\n" +
    "        <p>{{ eventDetails.description }}</p>\n" +
    "\n" +
    "        <p>You have RSVP'd: {{eventDetails.response}}</p>\n" +
    "\n" +
    "        <!--<form>\n" +
    "            Name: <input type=\"text\" ng-model=\"eventDetails.guestName\"><br>\n" +
    "            <!-- TODO: Initialize radio button based on eventDetails.response -->\n" +
    "            <!-- TODO: Set default values of form based on eventDetails after submit -->\n" +
    "            <!-- <div ng-init=\"response = 'Yes'\">\n" +
    "                <input type=\"radio\" ng-model=\"response\" value=\"Yes\">Attending\n" +
    "                <input type=\"radio\" ng-model=\"response\" value=\"No\">Not Attending<br>\n" +
    "            </div> -->\n" +
    "            <!-- <div ng-show=\"response !== 'No'\">\n" +
    "                How many guests will you bring: <br>\n" +
    "                <input type=\"text\" ng-model=\"eventDetails.extraGuests\">\n" +
    "            </div>\n" +
    "            <div ng-show=\"response === 'No'\">\n" +
    "                Reason for not attending: <br>\n" +
    "                <input type=\"textarea\" ng-model=\"eventDetails.excuse\">\n" +
    "            </div>\n" +
    "            <input type=\"submit\" ng-click=\"submitForm(eventDetails.id, eventDetails.guestName, response, eventDetails.extraGuests, eventDetails.excuse)\">-->\n" +
    "\n" +
    "        </form>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );

}]);
