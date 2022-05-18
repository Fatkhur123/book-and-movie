function searchMovie(){
    $('#movie-list').html('');

    $.ajax({
        url: 'http://omdbapi.com/apikey=789b5641&s=' + $('#search-input').val(),
        dataType: 'json',
        success: function(result){
            if (result.Response == "True"){
                const movies = result.Search;

                $.each(movies, function(i,data){
                    $('#movie-list').append(`
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div style="height: 350px; overflow: hidden;">
                                <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                                <a href="#" class="card-link">See Detail?</a>
                            </div>
                        </div>
                    </div>
                    `)
                });

                $('#search-input').val('');
            }else {
                $('#movie-list').html(`
                <div class="col">
                    <h1 class="text-center">`+ result.Error +`</h1>
                </div>
                `);
            };
        },
    });
}

$('#search-button').on('click', function(){
    searchMovie();
});

$('#search-input').on('keyup', function(e){
    if(e.key === "Enter"){
        searchMovie();
    }
});


