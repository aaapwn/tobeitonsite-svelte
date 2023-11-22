export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.fe5628ea.js","app":"_app/immutable/entry/app.90a8ed82.js","imports":["_app/immutable/entry/start.fe5628ea.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/singletons.1466a26b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.90a8ed82.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.4e2fe401.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();