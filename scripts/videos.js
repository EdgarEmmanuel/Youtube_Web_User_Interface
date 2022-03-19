class ThirdPARTY {
    static fetchData(path){
        return fetch(path)
        .then((response) => {
            return response.json();
        });
    }
}


class Videos {
    static createChildData(oneVideo){
        let div = document.createElement("div");

        div.innerHTML = `
        
                <div class="image">
                        <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg" 
                        alt="" />
                    </div>
                    <div class="content">
                        <div class="top">
                            <div class="image_min">
                                <img src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/01/20133422/software-developer-coding.jpg"
                                 alt="" />
                            </div>
                            <div class="video_title">
                                <h1>
                                    Software Engineers Be Like (Pt. 1)
                                </h1>
                            </div>
                        </div>
                        <div class="middle">
                            <h1>
                                Namanh Kapur
                            </h1>
                        </div>
                        <div class="bottom">
                            <p>
                                4.4K vues . il y'a 3 semaines
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
    }
}

const VIDEOS_PATH = "./data/videos.json";

Videos.displayData(VIDEOS_PATH);