$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);
    const searchValue = urlParams.get('SiteSearchValue');
    $("#search-value").text(searchValue); 
});