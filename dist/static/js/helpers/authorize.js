function authorize(cb) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            if(this.status == 200)
            {
                cb(undefined, JSON.parse(this.responseText));
            }
            else
            {
                cb('error', {});
            }
        }
    });

    xhr.open("GET", "http://localhost:3002/api/validate");
    xhr.send(data);
}

export default authorize;