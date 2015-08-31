module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
                files: {
                    "src/ng-loading-overlay.min.js": "src/ng-loading-overlay.js"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};
