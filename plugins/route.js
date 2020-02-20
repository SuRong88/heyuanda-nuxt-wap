export default ({
    app
}) => {
    app.router.afterEach((to, from) => {
        if (process.client) {
            let scroll = to.path.indexOf('/about/companyNews/') >= 0 || to.path.indexOf('/about/industryNews/') >=
                0
            if (scroll) {
                console.log('scroll');
                window.scrollTo(0, 500)
            } else {

            }
        }
        // console.log(to)
        // console.log(to.path,to.fullPath)
    })
}
