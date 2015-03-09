/// <reference path="../SRC/jquery-2.1.3.js" />
/// <reference path="../SRC/underscore/underscore.js" />
/// <reference path="../SRC/jquery-ui-1.11.2.custom/jquery-ui.js" />
/// <reference path="../SRC/handlebars-v2.0.0.js" />
/// <reference path="../SRC/ember.js" />
/// <reference path="../SRC/ember-data.js" />
/*
    Views:
    By Perspective
    By Chapter
    By Section (+ Chapter)
    By Perspective/Chapter
    By All
    By Paging/Reading Above
*/
var App = Ember.Application.create({
    rootElement: '#container',
    LOG_TRANSITIONS: true
});

App.Router.map(function () {
    //this.resource('pathName', { path: '/Path/:Option/:Option2' });
    this.resource('read', { path: '/Page/:page/' });
});

$(document).ready(function () {

});

App.ApplicationController = Ember.Controller.extend({
    queryParams: ['chapter', 'section', 'perspective'],
    chapter: null,
    section: null,
    perspective: null,
    chapters: function () {
        return [1, 2, 3];
        //return ember.store etc
    }.property(),
    sections: function () {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }.property(),
    perspectives: function () {
        return [
            {
                "id": 1,
                "perspective": "Dan"
            },
            {
                "id": 2,
                "perspective": "Mark"
            }
        ];
    }.property()
});

App.BootstrapDropdownSelectComponent = Em.Component.extend({
    valueKey: 'id',
    labelKey: 'label',
    prompt: 'Choose One',
    tagName: 'li',
    classNames: ['dropdown', 'size-fixed'],
    optionsProxy: function () {
        var vKey = this.valueKey,
            lKey = this.labelKey,
            opts = this.get('options');
        return _.map(opts, function (o) {
            return {
                id: o[vKey] || o,
                label: o[lKey] || o
            };
        });
    }.property('options'),
    selectedOption: function () {
        if (Ember.isEmpty(this.get('value'))) {
            return this.prompt ;
        } else {
            var opt = this.get('optionsProxy').findBy('id', +this.get('value'));
            return opt.label; //||
                //this.get('optionsProxy').findProperty('label', this.get('value')) ||
                //this.get('value');
        }
    }.property('optionsProxy', 'value'),
    selectedDisplay: function() {
        return this.get('selectedOption').label;
    }.property('selectedOption'),
    actions: {
        select: function (opt) {
            this.set('value', opt.id || opt);
        }
    }
});

Ember.LinkView.reopen({
    action: null,
    _invoke: function (event) {
        var action = this.get('action');
        if (action) {
            // There was an action specified (in handlebars) so take custom action
            event.preventDefault(); // prevent the browser from following the link as normal
            if (this.bubbles === false) { event.stopPropagation(); }

            // trigger the action on the controller
            this.get('controller').send(action, this.get('actionParam'));
            return false;
        }

        // no action to take, handle the link-to normally
        return this._super(event);
    }
});