export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/bash.svg","img/boat.png","img/canvalogo.png","img/cat.png","img/curiousVillage.jpg","img/faller.jpeg","img/faller.png","img/faller.png~","img/hackathon.jpeg","img/hobbies/dnd.png","img/hobbies/drawing.jpg","img/hobbies/folkDance.jpg","img/hobbies/folkDance.png","img/hobbies/gaming.jpg","img/hobbies/gaming.png","img/hobbies/languages.jpg","img/hobbies/languages.png","img/hobbies/piano.jpg","img/hobbies/piano.png","img/hobbies/psychology.jpg","img/hobbies/psychology.png","img/hobbies/reading.jpg","img/hobbies/reading.png","img/hz.png","img/logo.png","img/logos/arch.png","img/logos/bash.png","img/logos/blender.png","img/logos/cs.png","img/logos/docker.png","img/logos/git.png","img/logos/java.png","img/logos/jsTs.png","img/logos/laravel.png","img/logos/nodeJs.png","img/logos/oop.png","img/logos/pandas.jpg","img/logos/pandas.png","img/logos/photoshop.png","img/logos/php.png","img/logos/python.png","img/logos/svelte.png","img/pco.png","img/pzem.jpg","img/safari.jpeg","img/safari.png","img/wave.gif"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".jpeg":"image/jpeg",".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.LNgGqNzo.js","app":"_app/immutable/entry/app.BEq-JTdJ.js","imports":["_app/immutable/entry/start.LNgGqNzo.js","_app/immutable/chunks/entry.DHRpq_yI.js","_app/immutable/chunks/scheduler.BeaK0CkN.js","_app/immutable/entry/app.BEq-JTdJ.js","_app/immutable/chunks/scheduler.BeaK0CkN.js","_app/immutable/chunks/index.BZRb3Aqr.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
