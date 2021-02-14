const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=default",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "337df17a46msh96db7594d1505a5p1ba225jsn7a85942ceb89",
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
    }
};

$(document).ready(function () {
    // Get value on button click and update parameter
    $("#search-btn").click(function () {
        let searchTerm = $("#search-input").val();
        let url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchTerm}`
        settings.url = url;
        $.ajax(settings).done(function (response) {
            $("#search-result").empty();
            const resultList = response.list;
            if (resultList.length === 0) {
                $("#search-result")
                    .append(`<li class="list-group-item">
                    <p class="bold"> No Result </p>
                </li>`);
            } else {
                for (let i = 0; i < resultList.length; i++) {
                    $("#search-result")
                        .append(`<li class="list-group-item">
                            <p class="bold">Definition: </p>
                            ${resultList[i].definition}
                            <p class="bold mt-3">Example: </p>
                            ${resultList[i].example}
                        </li>`);
                }
            }

        }).fail(function (xhr, status, error) {
            //Ajax request failed.
            var errorMessage = xhr.status + ': ' + xhr.statusText
            alert('Error - ' + errorMessage);
        });
    });
});