'use strict';

angular.module('frontendApp')
  .controller('CalendarCtrl', function ($compile) {
    var $ctrl = this;

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $ctrl.alertOnEventClick = alertOnEventClick;
    $ctrl.alertOnDrop = alertOnDrop;
    $ctrl.alertOnResize = alertOnResize;

    $ctrl.addEvent = addEvent;

    $ctrl.rosterEvents = [
      {
        events: [
          { title: 'All Day Event', start: new Date(y, m, 1) },
          { title: 'Long Event', start: new Date(y, m, d - 5), end: new Date(y, m, d - 2) },
          { id: 999, title: 'Repeating Event', start: new Date(y, m, d - 3, 16, 0), allDay: false },
          { id: 999, title: 'Repeating Event', start: new Date(y, m, d + 4, 16, 0), allDay: false },
          { title: 'Birthday Party', start: new Date(y, m, d + 1, 19, 0), end: new Date(y, m, d + 1, 22, 30), allDay: false }
        ]
      }
    ];

    initialise();

    return;

    function initialise() {
      $ctrl.uiConfig = {
        calendar: {
          height: 450,
          editable: true,
          header: {
            left: 'title',
            center: '',
            right: 'today prev,next'
          },
          eventClick: $ctrl.alertOnEventClick,
          eventDrop: $ctrl.alertOnDrop,
          eventResize: $ctrl.alertOnResize
        }
      }
    }

    function alertOnEventClick() {

    }

    function alertOnDrop() {

    }

    function alertOnResize() {

    }

    function addEvent() {
      console.log('adding event');
      console.log($ctrl.rosterEvents);
      $ctrl.rosterEvents[0].events.push({
        title: 'Test',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    }
  });
