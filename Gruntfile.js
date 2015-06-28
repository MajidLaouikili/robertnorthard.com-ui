module.exports = function(grunt){
    grunt.initConfig({
        "http-server":{
            'dev': {
                root: "./",
                port: 8282,
                host: "127.0.0.1",
                showDir : true,
                autoIndex: true,
                ext: "html",
                runInBackground: false,
            }
        }
    });
grunt.loadNpmTasks('grunt-http-server');
};