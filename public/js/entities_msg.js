import Entity from './Entity.js';
import Go from './traits/Go.js';
import Jump from './traits/Jump.js';
import {loadSpriteSheet} from './loaders.js';
import {createAnim} from './anim.js';

export function createMsg_winnie(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,250);
		
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

		text.draw=function drawMsg(context){
			//sprite.draw('text1',context,0,0);
			sprite.draw('text_winnie',context,0,0);
		}

		return text;
	});
}

export function createMsg_isaac(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,250);

		text.draw=function drawMsg(context){
			sprite.draw('text_isaac',context,0,0);
		}

		return text;
	});
}

export function createMsg_jiajia(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,250);

		text.draw=function drawMsg(context){
			sprite.draw('text_jiajia',context,0,0);
		}

		return text;
	});
}

export function createMsg_peisi(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,250);

		text.draw=function drawMsg(context){
			sprite.draw('text_peisi',context,0,0);
		}

		return text;
	});
}

export function createMsg_dongxin(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,250);

		text.draw=function drawMsg(context){
			sprite.draw('text_dongxin',context,0,0);
		}

		return text;
	});
}

export function createMsg_haifaa(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,250);

		text.draw=function drawMsg(context){
			sprite.draw('text_haifaa',context,0,0);
		}

		return text;
	});
}

export function createMsg_alicia(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,250);

		text.draw=function drawMsg(context){
			sprite.draw('text_alicia',context,0,0);
		}

		return text;
	});
}

export function createMsg_talia(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,250);

		text.draw=function drawMsg(context){
			sprite.draw('text_talia',context,0,0);
		}

		return text;
	});
}

export function createMsg_kaiyang(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,250);

		text.draw=function drawMsg(context){
			sprite.draw('text_kaiyang',context,0,0);
		}

		return text;
	});
}

