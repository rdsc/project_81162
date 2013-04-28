/*
 * JS for startScreen generated by Appery.io
 *
 * Created on: Sunday, April 28, 2013, 08:19:00 AM (PDT)
 */

/* Setting project environment indicator */
Appery.env = "bundle";

Appery.getProjectGUID = function() {
    return '743467d5-e153-4198-8ee7-d205df8ee867';
}

Appery.getTargetPlatform = function() {
    return '0';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

/*
 * Services
 */
var TwitterREST = new Appery.RestService({
    'url': 'http://search.twitter.com/search.json',
    'dataType': 'jsonp',
    'type': 'get',
});

//createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
Appery.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}];

j_0_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'searchInput': 'j_4',
        'searchButton': 'j_5',
        'outputGrid': 'j_6',
        'mobilegridcell_5': 'j_7',
        'tweetpicture': 'j_8',
        'mobilegridcell_6': 'j_9',
        'tweetFrom': 'j_10',
        'tweetText': 'j_11'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    Appery.CurrentScreen = 'j_0';

    /*
     * Nonvisual components
     */
    var datasources = [];

    restservice1 = new Appery.DataSource(TwitterREST, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("j_0");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['results'],
            'ID': 'outputGrid',
            'SET': [{
                'PATH': ['from_user'],
                'ID': 'tweetFrom',
                'ATTR': '@'
            }, {
                'PATH': ['profile_image_url'],
                'ID': 'tweetpicture',
                'ATTR': 'src'
            }, {
                'PATH': ['text'],
                'ID': 'tweetText',
                'ATTR': '@'
            }]
        }],
        'requestMapping': [{
            'PATH': ['q'],
            'ID': 'searchInput',
            'ATTR': 'value'
        }]
    });

    datasources.push(restservice1);

    /*
     * Events and handlers
     */
    j_0_beforeshow = function() {
        Appery.CurrentScreen = 'j_0';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_3671_onLoad = j_0_onLoad = function() {
        screen_3671_elementsExtraJS();

        j_0_windowEvents();
        screen_3671_elementsEvents();
    }

    // screen window events
    screen_3671_windowEvents = j_0_windowEvents = function() {
        $('#j_0').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // screen elements extra js
    screen_3671_elementsExtraJS = j_0_elementsExtraJS = function() {
        // screen (screen-3671) extra code

    }

    // screen elements handler
    screen_3671_elementsEvents = j_0_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#j_3 [name="searchButton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    try {
                        restservice1.execute({})
                    } catch (ex) {
                        console.log(ex.name + '  ' + ex.message);
                        hideSpinner();
                    };

                }
            },
        });

    }

    $("#j_0").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_0_beforeshow();
    });

    if (runBeforeShow) {
        j_0_beforeshow();
    } else {
        j_0_onLoad();
    }

}

$("#j_0").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    j_0_js();
});