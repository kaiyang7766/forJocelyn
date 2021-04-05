import KeyboardState from './KeyboardState.js';

export function setupKeyboard(entity){
 	const input =new KeyboardState();
	input.addMapping('Space', keyState=>{
		if (keyState){
			entity.jump.start();
		} 
		else{
			entity.jump.cancel();
		}
	});
	input.addMapping('KeyW', keyState=>{
		if (keyState){
			entity.jump.start();
		} 
		else{
			entity.jump.cancel();
		}
	});
	input.addMapping('ArrowRight', keyState=>{
		entity.go.dir+=keyState?1:-1;
	});
	input.addMapping('KeyD', keyState=>{
		entity.go.dir+=keyState?1:-1;
	});
	input.addMapping('ArrowLeft', keyState=>{
		entity.go.dir+=keyState?-1:1;
	});
	input.addMapping('KeyA', keyState=>{
		entity.go.dir+=keyState?-1:1;
	});

	return input;
}
