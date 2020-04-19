const { packageJson, install, copyFiles, makeDirs } = require("mrm-core");
const fs = require("fs");
const path = require("path");

module.exports = webpackTask;

function webpackTask() {
	installDependencies();
	writeFiles();
	writePackageJsonScripts();
}

function installDependencies() {
	const webpackPackages = ["webpack", "webpack-cli", "webpack-dev-server"];
	const loaderPackages = ["babel-loader", "style-loader", "css-loader"];
	const loaderDependencies = ["@babel/core", "@babel/preset-env"];
	install([...webpackPackages, ...loaderPackages, ...loaderDependencies], {
		yarn: true,
	});
}

function writeFiles() {
	copyFiles(path.join(__dirname, "templates"), "webpack.config.js");
	copyFiles(path.join(__dirname, "templates"), "index.html");
	makeDirs("src");
	const indexJsPath = path.join("src", "index.js");
	if (!fs.existsSync(indexJsPath)) {
		fs.writeFileSync(indexJsPath, "");
		console.info(`Create ${indexJsPath}`);
	}
}

function writePackageJsonScripts() {
	packageJson()
		.setScript("start:dev", "webpack-dev-server")
		.setScript("build:dev", "webpack")
		.setScript("build", "webpack --mode production")
		.save();
}
