import Entity from './Entity.js';
import Go from './traits/Go.js';
import Jump from './traits/Jump.js';
import {loadSpriteSheet} from './loaders.js';
import {createAnim} from './anim.js';

export function createHouse(){
	return loadSpriteSheet('breadtalk')
	.then(sprite=>{
		const breadtalk = new Entity();
		breadtalk.size.set(200,193);

		breadtalk.draw=function drawChar(context){
			sprite.draw('breadtalk',context,0,0);
		}

		return breadtalk;
	});
}
export function createChar_winnie(){
	return loadSpriteSheet('characters')
	.then(sprite=>{
		const dummy = new Entity();
		dummy.size.set(48,48);
		
		//dummy.addTrait(new Go());
		//dummy.addTrait(new Jump());

		//const runAim=createAnim(['run-1','run-2'],15);

		//function routeFrame(mario){
			//if (mario.jump.falling){
				//return 'jump';
			//}
			//if (mario.go.dir!==0){
				//if ((mario.vel.x>0&&mario.go.dir<0)||(mario.vel.x<0&&mario.go.dir>0)){
					//return 'break';
				//}
				//return runAim(mario.go.distance);
			//}
			//return 'player';
		//}

		dummy.draw=function drawChar(context){
			sprite.draw('winnie',context,0,0);
		}

		return dummy;
	});
}

export function createChar_isaac(){
	return loadSpriteSheet('characters')
	.then(sprite=>{
		const dummy = new Entity();
		dummy.size.set(48,48);

		dummy.draw=function drawChar(context){
			sprite.draw('isaac',context,0,0);
		}

		return dummy;
	});
}

export function createChar_jiajia(){
	return loadSpriteSheet('characters')
	.then(sprite=>{
		const dummy = new Entity();
		dummy.size.set(48,48);

		dummy.draw=function drawChar(context){
			sprite.draw('jiajia',context,0,0);
		}

		return dummy;
	});
}

export function createChar_peisi(){
	return loadSpriteSheet('characters')
	.then(sprite=>{
		const dummy = new Entity();
		dummy.size.set(48,48);

		dummy.draw=function drawChar(context){
			sprite.draw('peisi',context,0,0);
		}

		return dummy;
	});
}

export function createChar_dongxin(){
	return loadSpriteSheet('characters')
	.then(sprite=>{
		const dummy = new Entity();
		dummy.size.set(48,48);

		dummy.draw=function drawChar(context){
			sprite.draw('dongxin',context,0,0);
		}

		return dummy;
	});
}

export function createChar_haifaa(){
	return loadSpriteSheet('characters')
	.then(sprite=>{
		const dummy = new Entity();
		dummy.size.set(48,48);

		dummy.draw=function drawChar(context){
			sprite.draw('haifaa',context,0,0);
		}

		return dummy;
	});
}

export function createChar_alicia(){
	return loadSpriteSheet('characters')
	.then(sprite=>{
		const dummy = new Entity();
		dummy.size.set(48,48);

		dummy.draw=function drawChar(context){
			sprite.draw('alicia',context,0,0);
		}

		return dummy;
	});
}

export function createChar_talia(){
	return loadSpriteSheet('characters')
	.then(sprite=>{
		const dummy = new Entity();
		dummy.size.set(48,48);

		dummy.draw=function drawChar(context){
			sprite.draw('talia',context,0,0);
		}

		return dummy;
	});
}

export function createChar_kaiyang(){
	return loadSpriteSheet('characters')
	.then(sprite=>{
		const dummy = new Entity();
		dummy.size.set(48,48);

		dummy.draw=function drawChar(context){
			sprite.draw('kaiyang',context,0,0);
		}

		return dummy;
	});
}