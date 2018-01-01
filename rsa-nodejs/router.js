function route(handle,pathName,response,request){
    console.log("About to route a request for "+pathName);

    if(typeof handle[pathName] === 'function'){
        return handle[pathName](response,request,pathName);
    }else{
        console.log("No request handler found for "+pathName);
        response.writeHead(404,{"Content-Type":"text/plain"});
        reponse.write("404 NOT FOUND!");
        reponse.end();
    }
}

exports.route = route;