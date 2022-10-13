//console.log('testing');

const youtubeSearchURL = 'https://www.googleapis.com/youtube/v3/search';

//GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1//
function getDataFromApi(searchTerm, callback) {
    const settings = {
        url: youtubeSearchURL,
        data: {
            part: 'snippet',
            key: "AIzaSyCbUpbMbDMdUhMgciIuFMEaZ_hllkzFJ6g",
            q: `${searchTerm}`,
            maxResults: 10
        },
        dataType: 'json',
        type: 'GET',
        success: callback
    };

    $.ajax(settings);
}
//https://www.youtube.com/watch?v=
https://www.youtube.com/c//

//Limit results to 10//
//add thumbnail image that also links to the channel in results.//

// thumbnail image url: https://i.ytimg.com/vi/ //

function renderResult(result) {
    console.log(result);
    return `
      <div>
        <h2>
            <a class="js-result-name" href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank">
                <img src='${result.snippet.thumbnails.medium.url}'/>
                <p>${result.snippet.title}</p>
            </a >
        </h2 >
      </div >
        `;
}
//test//

function youtubeSearchData(data) {
    const results = data.items.map((item, index) => renderResult(item));
    $('.js-search-results').html(results);
}


function watchSubmit() {
    $('.js-search-form').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        // clear out the input
        queryTarget.val("");
        getDataFromApi(query, youtubeSearchData);
    });
}

function loadMore() {
    console.log("testing");
    $(".loadMore").click(event => {
        console.log(event);
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        // clear out the input
        queryTarget.val("");
        getDataFromApi(query, youtubeSearchData);
    });
};

$(watchSubmit);
$(loadMore);