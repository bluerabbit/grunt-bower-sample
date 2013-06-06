module.exports = function (grunt) {
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: './lib',
          layout: 'byType', // byTypeかbyComponentか任意のレイアウト関数を登録できます。
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: false
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-bower-task');
};
