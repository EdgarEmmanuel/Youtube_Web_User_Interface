class ThirdPARTY {
    static fetchData(path){
        return fetch(path)
        .then((response) => {
            return response.json();
        });
    }
}


class Videos {
    static displayProperlyNumberOfView(numberOfView)
    {
        let result = numberOfView / 1000
        if( result > 1){
            return `${result}K`
        }
        return result;
    }
    static createChildData(oneVideo){
        let div = document.createElement("div");

        let {trailer_image_url, video_number_of_views, youtube_channel_name, video_title, youtuber_logo} = oneVideo;

        let formattedNumberOfView = this.displayProperlyNumberOfView(video_number_of_views);

        div.innerHTML = `
        
                <div class="image">
                        <img src="${trailer_image_url}" 
                        alt="" />
                    </div>
                    <div class="content">
                        <div class="top">
                            <div class="image_min">
                                <img src="${youtuber_logo}"
                                 alt="" />
                            </div>
                            <div class="video_title">
                                <h1>
                                    ${video_title}
                                </h1>
                            </div>
                        </div>
                        <div class="middle">
                            <h1>
                                ${youtube_channel_name}
                            </h1>
                        </div>
                        <div class="bottom">
                            <p>
                                ${formattedNumberOfView} vues . il y'a 3 semaines
                            </p>
                        </div>
                    </div>

        `;

        div.classList.add("one_video");

        return div;
    }

    static getParentElement(){
        let parent = document.querySelector(".content_part .right_part_videos .videos");
        return parent;
    }
    static async displayData(path){
        let response = await ThirdPARTY.fetchData(path);

        let videos = response.data;

        const PARENT = this.getParentElement();


        videos.forEach((oneVideo) => {
            console.log(oneVideo);
            let div = this.createChildData(oneVideo);

            PARENT.appendChild(div);
        })
    }
}

const VIDEOS_PATH = "./data/videos.json";

Videos.displayData(VIDEOS_PATH);