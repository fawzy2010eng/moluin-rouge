export function getMovie(search) {
    var API_KEY = "";
    // var search = "";
    // search = $("#search").val();

    API_KEY = "AIzaSyAoE-DFI4DF4FTELqUImvuB6iVusvC6wb0";
    var url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}
          &part=snippet&q=${search}&type=video`;
    $.ajax({
        method: "GET",
        url: url,
        beforeSend: function () {
            // $("#btn").attr("disabled", true);
            // $("#results").empty();
        },
        success: function (data) {
            const item = data.items[0];
            return item;
        },
    });
}