import http from '@ohos.net.http';

export default {
    onInit() {
        this.loadNew(1);
    },
//    scrollUp(direction) {
//        var scroller = this.$refs.scroll;
//        var curPosition = scroller.getScrollOffset().y;
//        console.log("CurPosition: " + curPosition);
//
//        if (direction == 2) {
//            console.log("SCROLL UP");
//            if (curPosition > 5) scroller.scrollTo({position: curPosition - 5});
//        } else {
//            console.log("SCROLL DOWN");
//            scroller.scrollTo({position: curPosition + 5});
//        }
//    },
    loadNew(jokeCat) {
        let context = this;
        let httpRequest = http.createHttp();

        try {
            httpRequest.request("http://rzhunemogu.ru/RandJSON.aspx?CType=" + jokeCat, (err, data) => {
                if (err == null) {
                    try {

                        // This weird way of getting content used because API returns not well-formed json sometimes
                        // It just adds prefix {content:" and suffix "} to the text
                        // ignoring inner carriage returns, quotes and backslash, causing JSON.parse to fail with exception

                        let finalText = data.result.replace("{\"content\":\"", "").replace("\"}", "");

                        if (finalText.length < 256) {
                            context.fontClass = 'big-font';
                        } else if (finalText.length > 600) {
                            context.fontClass = 'small-font';
                        } else {
                            context.fontClass = 'medium-font';
                        }
                        console.log(context.fontClass);
                        context.text = finalText;
                    } catch (error) {
                        console.log(error);
                        context.fontClass = 'big-font';
                        context.text = 'Ошибка загрузки, попробуйте ещё раз';
                    }
                } else {
                    console.info('error:' + err.data);
                }
            })
        } catch (error) {
            console.log(error);
            context.fontClass = 'big-font';
            context.text = 'Ошибка загрузки, попробуйте ещё раз';
        }
    },
    data: {
        componentData: {},
        text: '- Как только утром по телевидению начинается аэробика, мой муж\nтут же вскакивает с кровати.\n- Он так увлечен аэробикой в его-то годы?\n- Нет, сам он ею не занимается, а наблюдает в окно, как выполняет эти упражнения полуобнаженная молоденькая соседка.',
        fontClass: 'big-font'
    },
}
