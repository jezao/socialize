
window.onload = function () {

    console.log('start')

    const VIDEOID = 350636625491886;
    const ACCESSTOKEN = 'EAAcf1Tp1GlwBAGfPot5JtzoZBM4B8CWOrFvE8Q3ZCZCiZCruGmcwChgHEMntWtLWjdRAx7tG5jovPBN5ncbAyYxGcXVpZCDvYs4y39ERisklLqzC0l8UOIcUkcCIcdame4ArEpB9Lp4LrydUoQl3SnZBVUTvuJCFDs3qkOWorEh7VtY893OAC7RkdzgKyECO3TOzGlHNxtf1WlSzFFZBCZAFyOT8l3GvwEsFycMbsW1ZCxgZDZD';

    const url = 'https://streaming-graph.facebook.com/' + VIDEOID + '/live_reactions?access_token=' + ACCESSTOKEN + '&fields=reaction_stream';

    if (!window.EventSource) {
        console.log('No event source support');
    } else {
        var source = new EventSource(url);

        source.addEventListener('message', function (e) {
            handleMessage(e.data);
        }, false);

    }
}


function handleMessage(data) {
    obj = JSON.parse(data);

    _WOW = 0;
    _LIKE = 0;
    _LOVE = 0;

    reactions = obj.reaction_stream;

    for (i = 0; i < reactions.length; i++) {

        if (reactions[i].key == 'LIKE') {
            _LIKE += reactions[i].value;
        }

        if (reactions[i].key == 'WOW') {
            _WOW += reactions[i].value;
        }

        if (reactions[i].key == 'LOVE') {
            _LOVE += reactions[i].value;
        }

    }

    total = _LIKE + _WOW + _LOVE;

    totalLike = (100 * _LIKE) / total;
    totalWow = (100 * _WOW) / total;
    totalLove = (100 * _LOVE) / total;

    document.getElementsByClassName('votesGermany')[0].innerHTML = (Math.round(totalWow * 100) / 100) + '%'
    document.getElementsByClassName('votesSpain')[0].innerHTML = Math.round(totalLike * 100) / 100 + '%'
    document.getElementsByClassName('votesArab')[0].innerHTML = Math.round(totalLove * 100) / 100 + '%'

    console.log(reactions, totalLike, totalWow, totalLove)
}