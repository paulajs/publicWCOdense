var browsersync = require('browser-sync');
var gulp = require("gulp");
gulp.task('default', ['watch', 'webserver']);

gulp.task('watch', function(){
	gulp.watch(['./js/**/*.js', './style.css']).on('change', browsersync.reload);
});
gulp.task('changeDetect', function(){
	console.log('fu');
});
gulp.task('webserver', function(){
	browsersync({
		server: {
			baseDir: "./"
		}
	});
});