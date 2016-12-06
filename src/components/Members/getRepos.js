import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';


function repos(username) {
    $("#repos").empty();
    let url = "https://api.github.com/users/" + username + "/repos";
    $.ajax(url)
        .then(displayData)
        .catch(displayError);

    function displayData(repos) {
        for (let repo of repos) {
            let link = $('<a class="list-group-item list-group-item-action list-group-item-success">').text(repo.full_name);
            link.attr('href', repo.html_url);
            $('#repos').append(link);
            //append($('<li className="list-group-item"></li>').append(link));
        }
    }

    function displayError(error) {
        console.log(error);
    }
}

export { repos }