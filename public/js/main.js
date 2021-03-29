import {loadLevel} from './loaders/level.js';
import Entity from './Entity.js';
//import {loadMario} from './entities/Mario.js';
import {createMario} from './entities.js';
import {createHouse,createChar_winnie,createChar_isaac,createChar_jiajia,createChar_peisi,createChar_dongxin,createChar_haifaa,createChar_alicia,createChar_talia,createChar_kaiyang} from './entities_char.js';
import {createMsg_winnie,createMsg_isaac,createMsg_jiajia,createMsg_peisi,createMsg_dongxin,createMsg_haifaa,createMsg_alicia,createMsg_talia,createMsg_kaiyang} from './entities_msg.js';
import Timer from './Timer.js';
import Compositor from './Compositor.js';
import {setupKeyboard} from './input.js';
import Camera from './Camera.js';
//import {setupMouseControl} from './debug.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

 Promise.all([
 	createMario(),
 	loadLevel('1-1'),
 	createHouse(),
 	createChar_winnie(),
 	createChar_isaac(),
 	createChar_jiajia(),
 	createChar_peisi(),
 	createChar_dongxin(),
 	createChar_haifaa(),
 	createChar_alicia(),
 	createChar_talia(),
 	createChar_kaiyang(),
 	createMsg_winnie(),
 	createMsg_isaac(),
 	createMsg_jiajia(),
 	createMsg_peisi(),
 	createMsg_dongxin(),
 	createMsg_haifaa(),
 	createMsg_alicia(),
 	createMsg_talia(),
 	createMsg_kaiyang(),
 ])
 .then(([mario,level,house,winnie,isaac,jiajia,peisi,dongxin,haifaa,alicia,talia,kaiyang,message_winnie,message_isaac,message_jiajia,message_peisi,message_dongxin,message_haifaa,message_alicia,message_talia,message_kaiyang])=>{
 	const camera = new Camera();
 	window.camera=camera;

 	//const mario =createMario();
 	mario.pos.set(1000,90);
 	house.pos.set(0,0);
 	winnie.pos.set(800,7);
 	isaac.pos.set(1050,0);
 	jiajia.pos.set(1300,0);
 	peisi.pos.set(1550,0);
 	dongxin.pos.set(1800,0);
 	haifaa.pos.set(2050,0);
 	alicia.pos.set(2300,0);
 	talia.pos.set(2550,0);
 	kaiyang.pos.set(2800,0);

 	message_winnie.pos.set(640,0);
 	message_isaac.pos.set(890,0);
 	message_jiajia.pos.set(1140,0);
 	message_peisi.pos.set(1390,0);
 	message_dongxin.pos.set(1640,0);
 	message_haifaa.pos.set(1890,0);
 	message_alicia.pos.set(2140,0);
 	message_talia.pos.set(2390,0);
 	message_kaiyang.pos.set(2640,0);

 	//mario.addTrait({
 	//	NAME: 'hacktrait',
 	//	spawnTimeout:0,
 	//	obstruct(){
//
 //		},
 	//	update(mario,deltaTime){
 	//		if (this.spawnTimeout>0.1 && mario.vel.y<0){
 	//			const spawn = createMario();
 	//			spawn.pos.x=mario.pos.x;
 	//			spawn.pos.y=mario.pos.y;
 	//			spawn.vel.y=mario.vel.y-200;
 	//			level.entities.add(spawn);
 	//			this.spawnTimeout=0;
 	//		}
 	//		this.spawnTimeout+=deltaTime;
 	//	}
 	//})
 	
 	//createCollisionLayer(level);
	level.entities.add(house);
	level.entities.add(mario);
	level.entities.add(winnie);
	level.entities.add(isaac);
	level.entities.add(jiajia);
	level.entities.add(peisi);
	level.entities.add(dongxin);
	level.entities.add(haifaa);
	level.entities.add(alicia);
	level.entities.add(talia);
	level.entities.add(kaiyang);

	level.entities.add(message_winnie);
	level.entities.add(message_isaac);
	level.entities.add(message_jiajia);
	level.entities.add(message_peisi);
	level.entities.add(message_dongxin);
	level.entities.add(message_haifaa);
	level.entities.add(message_alicia);
	level.entities.add(message_talia);
	level.entities.add(message_kaiyang);

	//level.comp.layers.push(
	//	createCollisionLayer(level),
	//	createCameraLayer(camera));

 	const input=setupKeyboard(mario);
 	input.listenTo(window);

 	//setupMouseControl(canvas,mario,camera);

 	const timer= new Timer(1/60);

 	timer.update =function update(deltaTime){
 	level.comp.draw(context,camera);
 	//house.comp.draw(context,camera);
 	//people.comp.draw(context,camera);
 	//message.comp.draw(context,camera);
 	level.update(deltaTime);
 	if (mario.pos.x>100){
 		camera.pos.x=mario.pos.x-100
 	}
 }
 	timer.start();
 });
