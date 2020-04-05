import storage from 'local-storage';

class BackgroundService {

    constructor() {
        this.date = new Date();
        this.now = this.date.getTime();
    }

    get nextShuffleTime() {
        return this.now + (1000 * 60 * 60); // every hour
    }

    /**
     * Retrieve background image and potentially metadata
     *
     * Arguments:
     *   user - obj - User data object
     * Return:
     *   object
     */
    retrieve(user) {
        this.user = user;

        return new Promise((resolve, reject) => {
            let b = this.user.backgrounds;

            if(this.timeToUpdate())
            {
                this.getImagesFromAPI()
                    .then((data) => {
                        user.backgrounds = {
                            nextRefresh: this.now + (1000 * 60 * 60 * 24), // refresh all saved images with a new API call
                            nextShuffle: this.nextShuffleTime,
                            images: data,
                            id: 0,
                            active: data[0],
                        };

                        this.user = user;
                        storage.set('user', user);

                        resolve(this.loadHTML(this.user.backgrounds.active));
                    })
                    .catch((error) => {
                        reject(error);
                    });
            }
            else
            {
                this.shuffle();
                resolve(this.loadHTML(this.user.backgrounds.active));
            }
        });
    }

    loadHTML(BG) {
        let bg = new Image();
        bg.src = 'http://localhost:3001/backgrounds/' + BG.name;
        return bg;
    }

    timeToUpdate() {
        let b = this.user.backgrounds;

        return !this.user.hasOwnProperty('backgrounds')
            || b.nextRefresh < this.now
            || b.nextShuffle < this.now && ((b.images.length - 1) <= b.id);
    }

    getImagesFromAPI() {
        return new Promise(function (resolve, reject) {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4)
                {
                    if (this.status == 200)
                    {
                        resolve(JSON.parse(this.responseText));
                    } else
                    {
                        let error = 'No background found.';

                        if ([409, 404, 403, 401, 400, 204].includes(this.status))
                        {
                            error += ` ${this.status} - ${this.statusText}`;
                        }

                        reject(error);
                    }
                }
            };
            xhttp.open('GET', 'http://localhost:3001/get-background', true);

            xhttp.withCredentials = true;
            xhttp.setRequestHeader( 'Access-Control-Allow-Credentials', true);
            xhttp.setRequestHeader( 'Content-Type', 'application/json' );

            xhttp.send();
        });
    }

    shuffle() {
        let b = this.user.backgrounds;

        if(b.nextShuffle < this.now) {
            b.id++;
            b.active = b.images[b.id];
            b.nextShuffle = this.nextShuffleTime; // - load a new pic every time during development.
        }

        storage.set('user', this.user);
    }
}

export default new BackgroundService();