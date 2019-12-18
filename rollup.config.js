import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import alias from '@rollup/plugin-alias';
import autoPreprocess from 'svelte-preprocess';
import { terser } from 'rollup-plugin-terser';

// eslint-disable-next-line no-undef
const production = !process.env.ROLLUP_WATCH;
const buildDir = 'app';

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: buildDir + '/build/bundle.js'
	},
	plugins: [
    alias({
     entries:{
       "@app": "src/"
     }
    }),
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write(buildDir + '/build/bundle.css');
      },
      preprocess: autoPreprocess()
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve({
      contentBase: buildDir,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload({
      watch: buildDir
    }),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
